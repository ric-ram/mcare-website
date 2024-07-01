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
			'Parece que algo ocorreu de errado. Por favor, tente mais tarde.',
			'Se o problema continua a verificar-se, por favor entre em contacto directamente.'
		]
	},
	{
		type: ModalTypes.Testimonial,
		success: true,
		paragraphs: [
			'O seu testemunho foi enviado com sucesso!',
			'Agradecemos as suas palavras. A sua opinião é bastante importante para nós!'
		]
	},
	{
		type: ModalTypes.Appointment,
		success: false,
		paragraphs: [
			'Parece que algo ocorreu de errado. Por favor, tente mais tarde.',
			'Se o problema continua a verificar-se, por favor entre em contacto directamente.'
		]
	},
	{
		type: ModalTypes.Appointment,
		success: true,
		paragraphs: [
			'A sua tentativa de marcação foi enviada com sucesso!',
			'Iremos entrar em contacto consigo o mais cedo possivel para realizármos o agendamento.'
		]
	},
	{
		type: ModalTypes.Recruit,
		success: false,
		paragraphs: [
			'Parece que algo ocorreu de errado. Por favor, tente mais tarde.',
			'Se o problema continua a verificar-se, por favor entre em contacto directamente.'
		]
	},
	{
		type: ModalTypes.Recruit,
		success: true,
		paragraphs: [
			'A sua candidatura foi enviada com sucesso!',
			'Agradecemos a sua vontade de fazer parte da nossa equipa. Iremos entrar em contacto consigo o mais rápido possível.'
		]
	},
]