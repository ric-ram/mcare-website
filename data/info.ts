export type PointDescription = {
	leading: string;
	leadingVariant?: string;
	bullets: string[]
}

export type Image = {
	src: string;
	alt: string;
}

export type InfoDescription = {
	title: string;
	paragraphs: string[];
	pointDescription?: PointDescription;
	image?: Image;
}

export const ABOUT: InfoDescription = {
	title: 'A MCare',
	paragraphs: [
		'A MCare surge em Outubro de 2022 pela necessidade de dar resposta àqueles que, por qualquer motivo, requerem cuidados em sua casa.',
		'A Fisioterapeuta Mariana Gomes, fundadora da MCare, é licenciada em Fisioterapia e apresenta um conhecimento abrangente em todas as áreas da Fisioterapia, contudo focou a sua formação e especialização na área da Neurologia.',
		'Atualmente somos uma equipa constituída por Fisioterapeutas, Terapeutas Ocupacionais e Terapeutas da Fala especializados na sua área de eleição e com o grande objetivo de levar a saúde até todos! Comprometemo-nos a praticar uma intervenção próxima, especializada e individualizada.',
	],
	pointDescription: {
		leading: 'Advém e rege-se através de 4 pilares essenciais:',
		bullets: [
			'Cuidar',
			'Apoiar',
			'Reabilitar',
			'Entreajudar',
		],
	},
	image: {
		src: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		alt: 'feature image',
	},
}

export const VISAO: InfoDescription = {
	title: 'Visão',
	paragraphs: [
		'Na MCare, Terapeutas Especializados pretendem prevenir, desenvolver, manter e reabilitar, prestando cuidados de saúde, ao domicílio, de excelência, com base na evidência científica mais atual.',
	],
	pointDescription: {
		leading: 'Princípios e Valores chave',
		leadingVariant: 'header3',
		bullets: [
			'Intervenção personalizada e individualizada;',
			'Diversidade;',
			'Excelência e inovação nos serviços prestados;',
			'Disponibilidade;',
			'Espírito de equipa;',
			'Respeito;',
			'Ética profissional;',
			'Competência técnica; ',
			'Proximidade com o utente;',
			'Formação profissional específica e contínua.',
		],
	}
}

export const MISSAO: InfoDescription = {
	title: 'Missão',
	paragraphs: [
		'A MCare tem como missão prevenir, desenvolver, manter e reabilitar disfunções do sistema neurológico, músculo-esquelético e cardiorrespiratório, em pessoas jovens, adultas e idosas, no domicílio.',
		'Temos como principal objetivo promover o bem-estar físico e emocional de cada pessoa, através do trabalho de terapeutas qualificados. A nossa intervenção diferencia-se pela qualidade dos cuidados e inovação, oferecendo serviços personalizados e direcionados a cada pessoa como ser único e individual. Temos, também, a experiência e o dever de saber reencaminhar para outros profissionais de saúde, sempre que necessário.',
	],
}

export const EXPERIENCIA: InfoDescription = {
	title: 'Experiência',
	paragraphs: [
		'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
	],
	image: {
		src: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		alt: 'feature image',
	}
}

export const EQUIPA: InfoDescription = {
	title: 'Equipa de Fisioterapeutas',
	paragraphs: [
		'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum.',
		'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.',
	],
	image: {
		src: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		alt: 'feature image',
	}
}