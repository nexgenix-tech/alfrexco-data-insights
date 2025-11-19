/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VercelRequest, VercelResponse } from '@vercel/node';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set');
    return res.status(500).json({ error: 'Internal server error: Configuration issue' });
  }

  if (!email || typeof email !== 'string' || !name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Email and name are required' });
  }

  try {
    // Dynamic import to avoid CJS/ESM issues
    const { default: axios } = await import('axios');
    
    
    
    await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        listIds: [12],
        updateEnabled: true,
      },
      { headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' } }
    );
    console.log('Newsletter subscriber saved to Brevo:', email);

    

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Newsletter API Error:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Failed to process newsletter signup', details: error.response?.data?.message || error.message });
  }
};

export default handler;