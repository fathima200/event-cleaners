// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';


// export async function POST(request: Request) {
//   const apiKey = process.env.RESEND_API_KEY;

//   if (!apiKey) {
//     return NextResponse.json(
//       { error: 'Missing Resend API key. Please add RESEND_API_KEY to .env.local' },
//       { status: 500 }
//     );
//   }

//   const resend = new Resend(apiKey);

//   try {
//     const body = await request.json();
//     const { name, email, phone, service, details, date, contactMethod } = body;

//     // Basic server-side validation
//     if (!name || !email || !phone || !service) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const { data, error } = await resend.emails.send({
//       from: 'Event Cleaners <onboarding@resend.dev>', // Update this when you have a verified domain
//       to: ['aliyufatima916@gmail.com'], // Replace with your actual receiving email
//       subject: `New Quote Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="utf-8">
//             <title>New Quote Request</title>
//           </head>
//           <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #334155; background-color: #f1f5f9; margin: 0; padding: 0;">

//             <!-- Main Container -->
//             <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">

//               <!-- Header -->
//               <div style="background-color: #0f172a; padding: 32px 40px; text-align: center; border-bottom: 4px solid #facc15;">
//                 <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">THE EVENT CLEANERS</h1>
//                 <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">New Quote Request</p>
//               </div>

//               <!-- Content -->
//               <div style="padding: 40px;">

//                 <!-- Key Info Card -->
//                 <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
//                   <div style="display: flex; align-items: center; margin-bottom: 16px;">
//                     <div style="width: 4px; height: 4px; background-color: #facc15; border-radius: 50%; margin-right: 8px;"></div>
//                     <span style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Client Name</span>
//                   </div>
//                   <div style="font-size: 20px; font-weight: 600; color: #0f172a; margin-bottom: 4px;">${name}</div>
//                   <a href="mailto:${email}" style="color: #0f172a; text-decoration: none; border-bottom: 2px solid #facc15; font-weight: 500;">${email}</a>
//                 </div>

//                 <!-- Grid Layout -->
//                 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px;">
//                   <div>
//                     <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">Service Needed</div>
//                     <div style="font-size: 15px; font-weight: 500; color: #0f172a; background-color: #fff; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 8px;">${service}</div>
//                   </div>
//                   <div>
//                     <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">Requested Date</div>
//                     <div style="font-size: 15px; font-weight: 500; color: #0f172a; background-color: #fff; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 8px;">${date || 'Not specified'}</div>
//                   </div>
//                 </div>

//                 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px;">
//                    <div>
//                     <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">Phone Number</div>
//                     <a href="tel:${phone}" style="display: block; font-size: 15px; font-weight: 500; color: #0f172a; text-decoration: none; background-color: #fff; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 8px;">${phone}</a>
//                   </div>
//                   <div>
//                     <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">Contact Method</div>
//                     <div style="font-size: 15px; font-weight: 500; color: #0f172a; background-color: #fff; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 8px; text-transform: capitalize;">${contactMethod}</div>
//                   </div>
//                 </div>

//                 <!-- Details Section -->
//                 <div>
//                   <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Additional Details</div>
//                   <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; font-size: 15px; line-height: 1.6; color: #334155;">
//                     ${details || 'No additional details provided.'}
//                   </div>
//                 </div>

//               </div>

//               <!-- Footer -->
//               <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
//                 <p style="margin: 0; font-size: 12px; color: #94a3b8;">
//                   This email was sent from the <strong>Event Cleaners</strong> website contact form.
//                 </p>
//               </div>
//             </div>
//           </body>
//         </html>
//       `,
//     });

//     if (error) {
//       console.error('Resend error:', error);
//       return NextResponse.json(
//         { error: 'Failed to send email' },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { message: 'Quote request received successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error processing quote request:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing Resend API key. Please add RESEND_API_KEY to .env.local' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, phone, service, details, date, contactMethod } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Event Cleaners <onboarding@resend.dev>',
      to: ['contact@theeventcleaners.ca'],
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Quote Request</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #f1f5f9;">
            
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f1f5f9; padding: 40px 20px;">
              <tr>
                <td align="center">
                  
                  <!-- Main Container -->
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 48px 40px; text-align: center; position: relative;">
                        <div style="width: 60px; height: 4px; background-color: #facc15; margin: 0 auto 24px; border-radius: 2px;"></div>
                        <h1 style="color: #ffffff; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; letter-spacing: 2px;">EVENT CLEANERS</h1>
                        <p style="color: #cbd5e1; margin: 0; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px;">New Quote Request</p>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 48px 40px;">
                        
                        <!-- Client Card -->
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 36px;">
                          <tr>
                            <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-left: 4px solid #facc15; border-radius: 12px; padding: 28px;">
                              <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px;">Client Information</p>
                              <h2 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 700; color: #0f172a;">${name}</h2>
                              <a href="mailto:${email}" style="display: inline-block; color: #0f172a; text-decoration: none; font-size: 15px; font-weight: 500; padding: 6px 16px; background-color: #facc15; border-radius: 6px; transition: background-color 0.2s;">${email}</a>
                            </td>
                          </tr>
                        </table>

                        <!-- Details Grid -->
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 20px;">
                          <tr>
                            <td width="48%" style="vertical-align: top; padding-right: 12px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                                <tr>
                                  <td style="background-color: #0f172a; padding: 12px 18px;">
                                    <p style="margin: 0; font-size: 10px; font-weight: 700; color: #facc15; text-transform: uppercase; letter-spacing: 1.2px;">Service Needed</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 18px;">
                                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a;">${service}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td width="48%" style="vertical-align: top; padding-left: 12px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                                <tr>
                                  <td style="background-color: #0f172a; padding: 12px 18px;">
                                    <p style="margin: 0; font-size: 10px; font-weight: 700; color: #facc15; text-transform: uppercase; letter-spacing: 1.2px;">Requested Date</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 18px;">
                                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a;">${date || 'Not specified'}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 36px;">
                          <tr>
                            <td width="48%" style="vertical-align: top; padding-right: 12px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                                <tr>
                                  <td style="background-color: #0f172a; padding: 12px 18px;">
                                    <p style="margin: 0; font-size: 10px; font-weight: 700; color: #facc15; text-transform: uppercase; letter-spacing: 1.2px;">Phone Number</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 18px;">
                                    <a href="tel:${phone}" style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a; text-decoration: none;">${phone}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td width="48%" style="vertical-align: top; padding-left: 12px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                                <tr>
                                  <td style="background-color: #0f172a; padding: 12px 18px;">
                                    <p style="margin: 0; font-size: 10px; font-weight: 700; color: #facc15; text-transform: uppercase; letter-spacing: 1.2px;">Contact Method</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 18px;">
                                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a; text-transform: capitalize;">${contactMethod}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!-- Additional Details -->
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td>
                              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px;">Additional Details</p>
                              <div style="background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px;">
                                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #334155; white-space: pre-wrap;">${details || 'No additional details provided.'}</p>
                              </div>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
                        <div style="width: 40px; height: 3px; background-color: #facc15; margin: 0 auto 16px; border-radius: 2px;"></div>
                        <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.6;">
                          Received from <strong style="color: #facc15;">Event Cleaners</strong> contact form<br>
                          <span style="color: #64748b; font-size: 11px;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </p>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Quote request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
