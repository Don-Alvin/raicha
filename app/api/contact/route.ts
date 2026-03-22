import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '24 h')
})
export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1'
    const { success, limit, reset, remaining } = await ratelimit.limit(ip)

    if(!success){
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.'},
            {
                status: 429,
                headers: {
                    'X-RateLimit-limit': limit.toString(),
                    'X-RateLimit-Remaining': remaining.toString(),
                    'X-RateLimit': reset.toString()
                }
            }
        )
    }
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Map service values to readable names
    const serviceMap: { [key: string]: string } = {
        "commercial-electrical":'Commercial Electrical',
        "residential-electrical":'Residential Electrical',
        "industrial-electrical":'Industrial Electrical',
        "electrical-repairs":'Electrical Repairs',
        "lighting-installation":'Lighting Installation',
        "electrical-upgrades":'Electrical Upgrades',
        "generator-installation":'Generator Installation',
        "emergency-services":'Emergency Services',
        "security-systems":'Security Systems',
        "other":'Other'
    };

    // Send email to your team
    const { data, error } = await resend.emails.send({
      from: 'Raicha Contact Form <onboarding@resend.dev>', 
      to: ['alvindon41@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Raicha Electrical Contractors</h1>
            <p style="color: white; margin: 10px 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #667eea; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; background: white; border-radius: 5px; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 10px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: white; border-radius: 5px; font-weight: bold;">Email:</td>
                <td style="padding: 10px;"><a href="mailto:${email}" style="color: #667eea;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background: white; border-radius: 5px; font-weight: bold;">Phone:</td>
                <td style="padding: 10px;"><a href="tel:${phone}" style="color: #667eea;">${phone}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px; background: white; border-radius: 5px; font-weight: bold;">Company:</td>
                <td style="padding: 10px;">${company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px; background: white; border-radius: 5px; font-weight: bold;">Service Required:</td>
                <td style="padding: 10px;">${serviceMap[service] || service}</td>
              </tr>
            </table>
            
            <h2 style="color: #667eea; margin-top: 30px;">Message</h2>
            <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 14px; color: #666;">
              <p style="margin: 5px 0;">This message was sent from the Raicha website contact form.</p>
              <p style="margin: 5px 0;">Please respond within 24 hours as per our policy.</p>
            </div>
          </div>
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

    // Send auto-reply to the customer
    await resend.emails.send({
      from: 'Raicha Electrical Contractors <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Raicha',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for contacting Raicha</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Raicha Electrical Contractors</h1>
            <p style="color: white; margin: 10px 0 0; opacity: 0.9;">Thank You for Contacting Us</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #667eea; margin-top: 0;">Dear ${name},</h2>
            
            <p>Thank you for reaching out to Raicha Electrical Contractors. We have received your inquiry and our team will review it shortly.</p>
            
            <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #667eea; margin-top: 0;">Summary of Your Inquiry:</h3>
              <p><strong>Service Required:</strong> ${serviceMap[service] || service}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f0f0f0; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul style="color: #666;">
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll contact you via phone or email to discuss your project</li>
              <li>For urgent matters, please call us directly at (057) 2026188/9</li>
            </ul>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
              <p style="margin: 5px 0;">Best regards,</p>
              <p style="margin: 5px 0; font-weight: bold; color: #667eea;">The Raicha Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}