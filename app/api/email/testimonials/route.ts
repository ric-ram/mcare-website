import TestimonialEmail from '@/emails/testimonial-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.formData();
  const id = data.get('id') as string;
  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const rating = data.get('rating') as string;
  const testimonial = data.get('testimonial') as string;
  const imageName = data.get('imageName') as string;
  const imageSrc = data.get('imageSrc') as string;
  const logoURL = data.get('logoURL') as string;

  try {
    resend.emails.send({
      from: 'Testemunho Website <info@mcare.com.pt>',
      to: 'geral@mcare.com.pt',
      subject: `Testemunho de ${name}`,
      react: TestimonialEmail({
        name,
        email,
        rating,
        testimonial,
        imageName,
        imageSrc,
        logoURL,
      }),
      headers: {
        'X-Entity-Ref-ID': id,
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
