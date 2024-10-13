export type Question = {
	questionTitle: string;
	description: string[];
	isBullet?: boolean;
}

export type SpecialtyNotes = {
	noteIntro: string[];
	bullets?: string[];
	finalNotes?: string[];
}

export type Specialty = {
	specialtyId: string;
	label: string;
	summary: string;
	descriptionParagraphs: string[];
	questions?: Question[];
	howToIntro?: string;
	howToSteps?: string[];
	specialtyNotes?: SpecialtyNotes;
	areas?: string[];
	image?: string;
};

export const SPECIALTIES: Specialty[] = [
	{
		specialtyId: "fisioterapia",
		label: 'Fisioterapia',
		image: '/images/especialidades/fisioterapia.jpg',
		summary:
			'A Fisioterapia previne, promove e reabilita alterações do quadro motor e é prestada em circunstâncias em que a funcionalidade da pessoa é, ou pode ser, comprometida pelo envelhecimento, lesões, dor, doenças, distúrbios, condições, entre outras.',
		descriptionParagraphs: [
			'“A Fisioterapia é o serviço prestado por Fisioterapeutas a indivíduos e populações de forma a desenvolver, manter e restaurar o máximo movimento e capacidade funcional ao longo da vida.” Associação Portuguesa de Fisioterapeutas (APFISIO)',
			'A Fisioterapia previne, promove e reabilita alterações do quadro motor e é prestada em circunstâncias em que a funcionalidade da pessoa é, ou pode ser, comprometida pelo envelhecimento, lesões, dor, doenças, distúrbios ou outras condições.'
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
			'A Terapia Ocupacional é a área da saúde responsável por promover a participação ou o envolvimento da pessoa nas ocupações necessárias e significativas do seu dia a dia, potenciando o seu desempenho e funcionalidade.',
		descriptionParagraphs: [
			'“Entende-se por ocupação tudo aquilo que a pessoa realiza com o objetivo de cuidar de si própria (autocuidados), desfrutar da vida (lazer) ou contribuir para o desenvolvimento da sua comunidade (produtividade).” Associação Portuguesa de Terapeutas Ocupacionais (APTO)',
			'A Terapia Ocupacional é a área da saúde responsável por promover a participação ou o envolvimento da pessoa nas ocupações necessárias e significativas do seu dia a dia, potenciando o seu desempenho e funcionalidade. Tem como parâmetros todos os fatores que influenciam a participação e o envolvimento da pessoa na ocupação (memória, destreza manual, barreiras do espaço físico, ou exigência da atividade a realizar, por exemplo).',
			'O objetivo fundamental da Terapia Ocupacional é promover a autonomia, envolvimento e bem-estar a pessoa.',
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
			'A Terapia da Fala, no caso da população adulta/idosa, desempenha uma função crucial nas perturbações da linguagem adquiridas (afasias), perturbações motoras da fala (disartria e apraxia do discurso), perturbações da deglutição (disfagia), melhorando assim a sua qualidade de vida.',
		descriptionParagraphs: [
			'“Para todas as idades, com ou sem patologias diagnosticadas, otimiza as competências da comunicação e/ ou da deglutição promovendo a qualidade de vida do indivíduo.” American Speech - Language - Hearing Association(ASHA)',
			'A Terapia da Fala, no caso da população adulta/idosa, desempenha uma função crucial nas perturbações da linguagem adquiridas (afasias), perturbações motoras da fala (disartria e apraxia do discurso), perturbações da deglutição (disfagia), melhorando assim a sua qualidade de vida.',
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
			'O Pilates é um método de exercício físico que permite trabalhar a conexão entre a mente e o corpo, como um só.',
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
					'Temos aulas de grupo a decorrer às terças e quintas-feiras das 19h30 às 20h15, e também a opção de realizar aulas individuais com mais flexibilidade de horário e exercícios adaptados a si.'
				]
			}
		]
	},
	{
		specialtyId: "neuropsicologia",
		label: 'Neuropsicologia',
		image: '/images/especialidades/neuropsicologia.jpg',
		summary:
			'A Neuropsicologia ajudar na compreensão, através de uma Avaliação Neuropsicológica, do funcionamento do cérebro e das suas funções quando existem queixas cognitivas (esquecimentos, lentificação de pensamento, dificuldades de atenção e concentração, entre outras).Após essa avaliação, a Neuropsicologia tem um papel importante na implementação de planos de intervenção baseados na evidência científica com o objetivo de compensar, manter, ou melhorar o funcionamento cognitivo da pessoa, contribuindo assim para a manutenção do seu bem- estar, autonomia, e qualidade de vida.',
		descriptionParagraphs: [
			'A Neuropsicologia é uma área da Psicologia especializada na compreensão da relação entre o cérebro, a cognição, e o comportamento, aplicando esse conhecimento à avaliação e intervenção em casos de patologia neurológica ou psiquiátrica(American Psychological Association, 2018).',
			'A Neuropsicologia ajudar na compreensão, através de uma Avaliação Neuropsicológica, do funcionamento do cérebro e das suas funções quando existem queixas cognitivas (esquecimentos, lentificação de pensamento, dificuldades de atenção e concentração, entre outras).Após essa avaliação, a Neuropsicologia tem um papel importante na implementação de planos de intervenção baseados na evidência científica com o objetivo de compensar, manter, ou melhorar o funcionamento cognitivo da pessoa, contribuindo assim para a manutenção do seu bem- estar, autonomia, e qualidade de vida.',
		],
		areas: [
			"Envelhecimento normal",
			"Defeito Cognitivo Ligeiro (DCL)",
			"Doenças Neurodegenerativas",
			"Lesão Cerebral Adquirida",
		],
		specialtyNotes: {
			noteIntro: [
				'O processo de envelhecimento, bem como algumas lesões e doenças do sistema nervoso podem comprometer o funcionamento cognitivo, originando sintomas como:',
			],
			bullets: [
				'Esquecimentos frequentes (nomes, datas, compromissos);,',
				'Dificuldade em arranjar as palavras certas;',
				'Falta de atenção e concentração;',
				'Dificuldade em tomar decisões do dia - a - dia;',
				'Lentificação de pensamento;',
				'Dificuldade em assimilar novas informações;',
			],
			finalNotes: [
				'Se identificar em si, ou em algum familiar, este tipo de sintomas, a avaliação por parte de um Neuropsicólogo pode ser útil para compreender se as queixas correspondem a um processo de envelhecimento normal ou patológico. Por outro lado, a intervenção focada na Estimulação Cognitiva pode ser importante de forma a estimular o funcionamento cognitivo global, com o objetivo de manter / melhorar o funcionamento da pessoa e promover o seu bem - estar e autonomia.',
			],
		}
	},
];
