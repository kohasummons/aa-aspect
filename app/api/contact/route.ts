import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailConfig = {
  host: process.env.SMTP_HOST,
  service: process.env.SMTP_SERVICE,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true,
  logger: true,
  timeout: 10000,
};

const emailConfig2 = {
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "smtp@mailtrap.io",
      pass: "a2ef15c7e57eda4816c2f1cd5a2a68f0"
    }
  }

const recipients = [
  'mercyomolara234@yahoo.com',
  'me@koha.wtf',
];

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport(emailConfig2);

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipients.join(', '),
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 