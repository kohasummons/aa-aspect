import { ContactFormEmail } from '@/app/components/email/contact-form-template';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
  'Peculiar@aa-aspect.com',
  'office@aa-aspect.com',
  'info.aaaspect@gmail.com'
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    try {
      await resend.contacts.create({
        email: email,
        firstName: name,
        audienceId: process.env.RESEND_AUDIENCE_ID!,
        unsubscribed: false
      });
    } catch (error: any) {
      console.error('Error adding contact to audience:', error);
    }


    const { error } = await resend.emails.send({
      from: 'AA-Aspect Contact Form <samuel@aa-aspect.com>',
      to: RECIPIENTS,
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactFormEmail({ name, email, subject, message }) as React.ReactElement,
      replyTo: email
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}