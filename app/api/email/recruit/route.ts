import RecruitEmail from '@/emails/recruit-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { v4 as uuid } from 'uuid';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.formData();
  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const phone = data.get('phone') as string;
  const actuationZone = data.get('actuationZone') as string;
  const specializationArea = data.get('specializationArea') as string;
  const message = data.get('message') as string;
  const file = data.get('file') as Blob | null;
  const fileBuffer = Buffer.from(await file.arrayBuffer());

  try {
    resend.sendEmail({
      from: 'Ricram <testing@ricardoframos.com>',
      to: 'ricram.log@gmail.com',
      subject: `Candidatura de ${name}`,
      react: RecruitEmail({
        name,
        email,
        phone,
        actuationZone,
        specializationArea,
        message,
      }),
      attachments: [
        {
          filename: file.name,
          content: fileBuffer,
        },
      ],
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
