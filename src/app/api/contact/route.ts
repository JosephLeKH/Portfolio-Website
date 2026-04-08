import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getTransporter() {
  const port = Number(process.env.SMTP_PORT) || 587;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, body: messageBody } = body;
  if (!name || !email || !messageBody) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const transporter = getTransporter();
    const to = process.env.CONTACT_TO_EMAIL ?? 'josephle@stanford.edu';

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${messageBody}\n\nFrom: ${name} <${email}>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

