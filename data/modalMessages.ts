import { ModalTypes } from '@/app/types/componentTypes';

export type ModalMessage = {
	type: string;
	success: boolean;
	paragraphs: string[];
}

export const MODALMESSAGES: Array<ModalMessage> = [
	{
		type: ModalTypes.Testimonial,
		success: false,
		paragraphs: [
			'Parece que algo ocorreu de errado. Por favor, tenta mais tarde.',
			'Se o problema continua a verificar-se, entra contacta-nos directamente.'
		]
	},
	{
		type: ModalTypes.Testimonial,
		success: true,
		paragraphs: [
			'O teu testemunho foi enviado com sucesso!',
			'Agradecemos as tuas palavras. A tua opinião é bastante importante para nós!'
		]
	},
	{
		type: ModalTypes.Appointment,
		success: false,
		paragraphs: [
			'Parece que algo ocorreu de errado. Por favor, tenta mais tarde.',
			'Se o problema continua a verificar-se, entra contacta-nos directamente.'
		]
	},
	{
		type: ModalTypes.Appointment,
		success: true,
		paragraphs: [
			'A tua tentativa de marcação foi enviada com sucesso!',
			'Iremos entrar em contacto contigo o mais cedo possivel para realizármos o agendamento.'
		]
	},
	{
		type: ModalTypes.Recruit,
		success: false,
		paragraphs: [
			'Parece que algo ocorreu de errado. Por favor, tenta mais tarde.',
			'Se o problema continua a verificar-se, entra contacta-nos directamente.'
		]
	},
	{
		type: ModalTypes.Recruit,
		success: true,
		paragraphs: [
			'A tua candidatura foi enviada com sucesso!',
			'Agradecemos a tua vontade de fazer parte da nossa equipa. Iremos entrar em contacto contigo o mais rápido possível.'
		]
	},
]