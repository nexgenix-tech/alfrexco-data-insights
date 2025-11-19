/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VercelRequest, VercelResponse } from '@vercel/node';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { 
    email, 
    firstName, 
    lastName, 
    phone, 
    linkedin, 
    potentialRole, 
    experience, 
    motivation 
  } = req.body;
  
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set');
    return res.status(500).json({ error: 'Internal server error: Configuration issue' });
  }

  // Basic validation
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!firstName || typeof firstName !== 'string') {
    return res.status(400).json({ error: 'First name is required' });
  }

  // Validate phone format if provided (E.164: + followed by 9-14 digits)
  if (phone && !/^\+[1-9]\d{9,14}$/.test(phone)) {
    console.warn('Phone number not in E.164 format, attempting to save anyway:', phone);
  }

  try {
    // Dynamic import to avoid CJS/ESM issues
    const { default: axios } = await import('axios');
    
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        attributes: { 
          FIRSTNAME: firstName || '', 
          LASTNAME: lastName || '', 
          SMS: phone || '', 
          LINKEDIN: linkedin || '',
          POTENTIAL_ROLE: potentialRole || '',
          EXPERIENCE: experience || '',
          MOTIVATION: motivation || ''
        },
        listIds: [11], // Recruitment list ID
        updateEnabled: true,
      },
      { 
        headers: { 
          'api-key': BREVO_API_KEY, 
          'Content-Type': 'application/json' 
        } 
      }
    );
    
    console.log('Brevo recruitment contact saved successfully:', response.data);
    return res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    console.error('Brevo API Error:', error.response?.data || error.message);
    return res.status(500).json({ 
      error: 'Failed to save recruitment contact to Brevo', 
      details: error.response?.data?.message || error.message 
    });
  }
};

export default handler;