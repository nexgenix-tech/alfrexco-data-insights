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
          name: 'Alfrexco Recruitment' 
        },
        to: [
          { 
            email: 'linda@alfrexcosa.co.za', 
            name: 'Alfrexco HR Team' 
          },
        ],
        replyTo: { email: email, name: fullName },
        subject: `New Recruitment Application: ${potentialRole} - ${fullName}`,
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
              .role-badge {
                display: inline-block;
                background: #F37021;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                margin-top: 10px;
                font-size: 14px;
                font-weight: bold;
              }
              .content { 
                padding: 30px 20px; 
              }
              .section {
                margin-bottom: 25px;
              }
              .section-title {
                color: #F37021;
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 2px solid #F37021;
              }
              .field { 
                margin-bottom: 12px; 
                padding: 8px 0;
              }
              .field strong { 
                color: #2A2A2A; 
                display: inline-block;
                min-width: 140px;
              }
              .field-value {
                color: #555;
              }
              .motivation-box { 
                background-color: #f8f9fa; 
                padding: 20px; 
                border-left: 4px solid #F37021; 
                margin-top: 15px;
                border-radius: 4px;
                line-height: 1.6;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #666;
                font-size: 12px;
                border-top: 1px solid #e0e0e0;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Recruitment Application</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px;">from <span class="logo-accent">Alfrexco SA</span> Website</p>
                <div class="role-badge">${potentialRole || 'Not specified'}</div>
              </div>
              <div class="content">
                <div class="section">
                  <div class="section-title">Personal Information</div>
                  <div class="field">
                    <strong>Name:</strong> <span class="field-value">${firstName} ${lastName || ''}</span>
                  </div>
                  <div class="field">
                    <strong>Email:</strong> <span class="field-value">${email}</span>
                  </div>
                  <div class="field">
                    <strong>Phone:</strong> <span class="field-value">${phone || 'Not provided'}</span>
                  </div>
                  <div class="field">
                    <strong>LinkedIn:</strong> <span class="field-value">${linkedin ? `<a href="${linkedin}" style="color: #F37021;">${linkedin}</a>` : 'Not provided'}</span>
                  </div>
                </div>

                <div class="section">
                  <div class="section-title">Application Details</div>
                  <div class="field">
                    <strong>Potential Role:</strong> <span class="field-value">${potentialRole || 'Not specified'}</span>
                  </div>
                  <div class="field">
                    <strong>Experience Level:</strong> <span class="field-value">${experience || 'Not specified'}</span>
                  </div>
                </div>

                <div class="section">
                  <div class="section-title">Motivation</div>
                  <div class="motivation-box">
                    ${motivation || 'No motivation provided'}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>This application was submitted via the Alfrexco SA recruitment page</p>
                <p style="margin-top: 5px;">Please review and contact the candidate at your earliest convenience</p>
              </div>
            </div>
          </body>
          </html>
        `,
        textContent: `New Recruitment Application - Alfrexco SA

PERSONAL INFORMATION
--------------------
Name: ${firstName} ${lastName || ''}
Email: ${email}
Phone: ${phone || 'Not provided'}
LinkedIn: ${linkedin || 'Not provided'}

APPLICATION DETAILS
-------------------
Potential Role: ${potentialRole || 'Not specified'}
Experience Level: ${experience || 'Not specified'}

MOTIVATION
----------
${motivation || 'No motivation provided'}

---
This application was submitted via the Alfrexco SA recruitment page.`,
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Recruitment email sent successfully to HR Team');
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email API Error:', error.response?.data || error.message);
    return res.status(500).json({
      error: 'Failed to send recruitment email',
      details: error.response?.data?.message || error.message,
    });
  }
};

export default handler;