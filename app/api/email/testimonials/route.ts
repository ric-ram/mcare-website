import TestimonialEmail from "@/emails/testimonial-email";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { v4 as uuid } from 'uuid';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const data = await request.formData();
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const testimonial = data.get('testimonial') as string;
	const image = data.get('image') as Blob | null;
	const imageBuffer = Buffer.from(await image.arrayBuffer());

	try {
		resend.sendEmail({
			from: 'Ricram <testing@ricardoframos.com>',
			to: 'ricram.log@gmail.com',
			subject: `Testemunho de ${name}`,
			react: TestimonialEmail({
				name,
				email,
				testimonial,
				imageName: image.name
			}),
			attachments: [
				{
					filename: image.name,
					content: imageBuffer,
				},
			],
			headers: {
				'X-Entity-Ref-ID': uuid(),
			},
		});

		return NextResponse.json(
			{ message: "O email foi enviado com sucesso" },
			{ status: 200 }
		);
	} catch (e) {
		return NextResponse.json(
			{ error: "Algo correu mal" },
			{ status: 500 }
		);
	}
}