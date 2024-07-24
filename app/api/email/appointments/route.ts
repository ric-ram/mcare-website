import AppointmentEmail from '@/emails/appointment-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { v4 as uuid } from 'uuid';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.formData();
  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const countryCode = data.get('countryCode') as string;
  const phone = data.get('phone') as string;
  const message = data.get('message') as string;

  console.log("Resend API Key:", process.env.NEXT_PUBLIC_RESEND_API_KEY ? "Present" : "Not Set");
  console.log("Email data:", data);

  let fullPhone;
  if (countryCode === '') {
    fullPhone = '+351' + phone;
  } else {
    fullPhone = countryCode + phone
  }

  try {
    resend.emails.send({
      from: 'Marcação Website <info@mcare.com.pt>',
      to: ['geral@mcare.com.pt'],
      subject: `Tentativa de marcação de ${name}`,
      react: AppointmentEmail({
        name,
        email,
        fullPhone,
        message,
      }) as React.ReactElement,
      headers: {
        'X-Entity-Ref-ID': uuid(),
      },
    });

    return NextResponse.json(
      { message: 'O email foi enviado com sucesso' },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ error: 'Algo correu mal' }, { status: 500 });
  }
}
