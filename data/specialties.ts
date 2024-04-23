export type Question = {
	questionTitle: string;
	description: string[];
	isBullet?: boolean;
}

export type Specialty = {
	specialtyId: string;
	label: string;
	summary: string;
	descriptionParagraphs: string[];
	questions?: Question[];
	howToSteps?: string[];
	areas?: string[];
	image?: string;
};

export const SPECIALTIES: Specialty[] = [
	{
		specialtyId: "fisioterapia",
		label: 'Fisioterapia',
		image: '/images/especialidades/fisioterapia.jpg',
		summary:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
		descriptionParagraphs: [
			'“A Fisioterapia é o serviço prestado por Fisioterapeutas a indivíduos e populações de forma a desenvolver, manter e restaurar o máximo movimento e capacidade funcional ao longo da vida.” Associação Portuguesa de Fisioterapeutas (APFISIO)',
			'A Fisioterapia previne, promove e reabilita alterações do quadro motor e é prestada em circunstâncias em que a funcionalidade da pessoa é, ou pode ser, comprometida pelo envelhecimento, lesões, dor, doenças, distúrbios, condições, entre outras.'
		],
		howToSteps: [
			'Fortalecimento Muscular Global;',
			'Treino de Equilíbrio Global;',
			'Treino de mobilidade global;',
			'Treino de Prevenção de Quedas;',
			'Treino de Coordenação Motora;',
			'Treino em Contexto Real e Modificações de Ambiente;',
			'Treino de Atividades Funcionais (sentar / levantar, subir / descer escadas, transferências e mobilidade no leito);',
			'Treino de Marcha.'
		],
		areas: [
			"Neurologia",
			"Músculo-esquelética",
			"Cardiorrespiratória",
			"Geriatria",
			"Oncologia",
			"Drenagem Linfática Manual",
			"Massagem Terapêutica"
		]
	},
	{
		specialtyId: "terapia-ocupacional",
		label: 'Terapia Ocupacional',
		image: '/images/especialidades/terapia-ocupacional.jpg',
		summary:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
		descriptionParagraphs: [
			'“Entende-se por ocupação tudo aquilo que a pessoa realiza com o objetivo de cuidar de si própria (autocuidados), desfrutar da vida (lazer) ou contribuir para o desenvolvimento da sua comunidade (produtividade).” Associação Portuguesa de Terapeutas Ocupacionais (APTO)',
			'A Terapia Ocupacional é a área da saúde responsável por promover a participação ou o envolvimento da pessoa nas ocupações necessárias e significativas do seu dia a dia, potenciando o seu desempenho e funcionalidade. Tem como parâmetros todos os fatores que influenciam a participação e o envolvimento da pessoa na ocupação (memória, destreza manual, barreiras do espaço físico, ou exigência da atividade a realizar, por exemplo).',
			'O objetivo fundamental da Terapia da Fala é promover a autonomia, envolvimento e bem-estar a pessoa.',
		],
		howToSteps: [
			'Promoção de interesses, rotina e papéis;',
			'Treino de atividades de vida diária;',
			'Estimulação sensorial e da cognição; ',
			'Intervenção na comunidade;',
			'Adaptação do contexto diário e avaliação do domicílio;',
		],
		areas: [
			"Neurologia",
			"Geriatria",
			"Lesões de Membro Superior",
			"Dependência Funcional",
			"Privação Ocupacional"
		]
	},
	{
		specialtyId: "terapia-da-fala",
		label: 'Terapia da Fala',
		image: '/images/especialidades/terapia-fala.jpg',
		summary:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
		descriptionParagraphs: [
			'“Para todas as idades, com ou sem patologias diagnosticadas, otimiza as competências da comunicação e/ ou da deglutição promovendo a qualidade de vida do indivíduo.” American Speech - Language - Hearing Association(ASHA)',
			'Na Terapia da Fala, o foco de intervenção é maioritariamente em perturbações da linguagem adquiridas, patologias vocais e da deglutição, melhorando assim a sua qualidade de vida. Tem também um papel preponderante na promoção das competências da comunicação e da voz nos mais diversos profissionais.',
		],
		areas: [
			"Motrocidade Orofacial",
			"Deglutição",
			"Fluência",
			"Voz",
			"Comunicação",
			"Linguagem",
			"Articulação"
		]
	},
	{
		specialtyId: "pilates-clinico",
		label: 'Pilates Clínico',
		image: '/images/especialidades/pilates-clinico.jpg',
		summary:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
		descriptionParagraphs: [
			'O Pilates é um método de exercício físico que permite trabalhar a conexão entre a mente e o corpo, como um só.',
		],
		questions: [
			{
				questionTitle: 'Em que se baseia?',
				description: [
					'O Pilates Clínico foi desenvolvido por Joseph Pilates na década de 1920 e desde então tem vindo a evoluir e a tornar-se cada vez mais popular, sendo um método de referência em todo o mundo na melhoria da condição física e da qualidade de vida.',
					'Em 2000, o Pilates Tradicional foi adaptado por 2 fisioterapeutas que direcionaram a prática para a reabilitação, potenciar capacidades físicas e promover funcionalidade, passando a chamar-se Pilates Clínico necessitando do acompanhamento por Terapeutas especializados.',
					'O Pilates baseia-se em movimentos controlados e fluidos, executados com ênfase na concentração, respiração controlada, alinhamento postural, fortalecimento do centro do corpo (músculos abdominais, lombares, pélvicos e glúteos) e desenvolvimento de flexibilidade.'
				]
			},
			{
				questionTitle: 'Quais os seus benefícios?',
				description: [
					'Fortalecimento do core, mais especificamente dos músculos abdominais profundos, que por sua vez melhoram a estabilidade do tronco e a postura, prevenindo o aparecimento de dores.',
					'Melhoria da flexibilidade global, através da estimulação das amplitudes de movimento articular e do alongamento muscular. ',
					'Aumento da força muscular e tonificação, através da utilização do peso do próprio corpo, ou de materiais que resistam o movimento durante os exercícios. ',
					'Melhoria da postura e de desequilíbrios musculares, através da consciência e alinhamento adequados do corpo, durante a realização dos exercícios. ',
					'Promoção do bem - estar mental e físico e redução do stress, através da concentração e integração da mente e do corpo na realização de cada exercício.',
					'Promoção do processo de recuperação de lesões, pela possibilidade de criação de programas de reabilitação física adaptados às necessidades individuais. ',
					'Prevenção de lesões, através do fortalecimento dos músculos estabilizadores e do alinhamento postural adequado.',
				],
				isBullet: true,
			},
			{
				questionTitle: 'Quem pode praticar?',
				description: [
					'Pode ser praticado por pessoas de todas as idades e níveis físicos, com ou sem disfunção.',
				]
			},
			{
				questionTitle: 'Que material necessito para as aulas online?',
				description: [
					'Necessita apenas de um computador ou telemóvel ligados à internet, um colchão e uma toalha! Todos os restantes materiais são aconselhados, durante as aulas, pela nossa Fisioterapeuta, e são opcionais.'
				]
			},
			{
				questionTitle: 'Quando é que são as aulas?',
				description: [
					'Temos aulas de grupo a decorrer às terças e quintas-feiras das 19h45 às 20h30, e também a opção de realizar aulas individuais com mais flexibilidade de horário e exercícios adaptados a si.'
				]
			}
		]
	},
];
