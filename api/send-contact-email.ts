/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VercelRequest, VercelResponse } from '@vercel/node';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, lastName, company, phone, message } = req.body;
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set');
    return res.status(500).json({ error: 'Internal server error: Configuration issue' });
  }

  // Basic validation
  if (!email || typeof email !== 'string' || !firstName || typeof firstName !== 'string') {
    return res.status(400).json({ error: 'Email and first name are required' });
  }

  try {
    // Dynamic import to avoid CJS/ESM issues
    const { default: axios } = await import('axios');

    // Build the full name safely
    const fullName = `${firstName} ${lastName || ''}`.trim();

    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { 
          email: 'clientservices@ekhayasearch.co.za', 
          name: 'Alfrexco Website Enquiry' 
        },
        to: [
          { 
            email: 'clientservices@alfrexcosa.co.za', 
            name: 'Alfrexco Client Services Team' 
          },
          { 
            email: 'linda@alfrexcosa.co.za', 
            name: 'Linda Banda' 
          },
        ],
        replyTo: { email: email, name: fullName },
        subject: `New Contact Form Submission from ${fullName}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                background-color: #F5F7FA; 
                color: #333333; 
                margin: 0; 
                padding: 0; 
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #FFFFFF; 
                padding: 20px; 
                border-radius: 10px; 
              }
              .header { 
                text-align: center; 
                padding: 20px; 
                background: linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%); 
                color: #FFFFFF; 
                border-radius: 10px 10px 0 0; 
              }
              .header h2 {
                margin: 0;
                font-size: 24px;
              }
              .logo-accent {
                color: #F37021;
                font-weight: bold;
              }
              .content { 
                padding: 30px 20px; 
              }
              .field { 
                margin-bottom: 15px; 
                padding: 10px 0;
                border-bottom: 1px solid #f0f0f0;
              }
              .field:last-child {
                border-bottom: none;
              }
              .field strong { 
                color: #F37021; 
                display: inline-block;
                min-width: 120px;
              }
              .message-box { 
                background-color: #f8f9fa; 
                padding: 20px; 
                border-left: 4px solid #F37021; 
                margin-top: 20px;
                border-radius: 4px;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px;">from <span class="logo-accent">Alfrexco SA</span> Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <strong>Name:</strong> ${firstName} ${lastName || ''}
                </div>
                <div class="field">
                  <strong>Email:</strong> ${email}
                </div>
                <div class="field">
                  <strong>Phone:</strong> ${phone || 'Not provided'}
                </div>
                <div class="field">
                  <strong>Company:</strong> ${company || 'Not provided'}
                </div>
                <div class="message-box">
                  <strong style="display: block; margin-bottom: 10px;">Message:</strong>
                  <p style="margin: 0; line-height: 1.6;">${message || 'No additional message'}</p>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the Alfrexco SA contact form</p>
              </div>
            </div>
          </body>
          </html>
        `,
        textContent: `New Contact Form Submission - Alfrexco SA

Name: ${firstName} ${lastName || ''}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message || 'No additional message'}`,
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Contact email sent successfully to Client Services Team');
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email API Error:', error.response?.data || error.message);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.response?.data?.message || error.message,
    });
  }
};

export default handler;