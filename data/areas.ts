export type SubArea = {
	title: string;
	description: string[];
}

export type Area = {
	areaId: string;
	label: string;
	descriptionParagraphs: string[];
	specialtyId: string;
	bullets?: string[];
	areaNotes?: string[];
	image?: string;
	subAreas?: SubArea[];
}

export const AREAS: Area[] = [
	{
		areaId: 'neurologia',
		label: 'Neurologia',
		descriptionParagraphs: [
			'A Neurologia é a área da saúde que consiste nas disfunções do Sistema Nervoso Central e/ou Periférico, de origem congénita ou adquirida.'
		],
		specialtyId: 'fisioterapia',
		bullets: [
			'Acidente Vascular Cerebral (AVC);',
			'Doença de Alzheimer (DA);',
			'Doença de Parkinson (DP);',
			'Demências;',
			'Esclerose Lateral Amiotrófica (ELA);',
			'Esclerose Múltipla;',
			'Lesões Vértebro - Medulares (LVM\'s);',
			'Parkinsonismos Atípicos;',
			'TCE (Traumatismo Cranioencefálico)',
			'Tumores cerebrais;',
			'Entre outras',
		],
		areaNotes: [
			'A intervenção visa prevenir o rápido declínio, manter as capacidades e promover a funcionalidade da pessoa.',
		],
	},
	{
		areaId: 'neurologia',
		label: 'Neurologia',
		descriptionParagraphs: [
			'A Neurologia é a área da saúde que consiste nas disfunções do Sistema Nervoso Central e/ou Periférico, de origem congénita ou adquirida.'
		],
		specialtyId: 'terapia-ocupacional',
		bullets: [
			'Acidente Vascular Cerebral (AVC);',
			'Doença de Alzheimer (DA);',
			'Doença de Parkinson (DP);',
			'Demências;',
			'Esclerose Lateral Amiotrófica (ELA);',
			'Esclerose Múltipla;',
			'Lesões Vértebro - Medulares (LVM\'s);',
			'Parkinsonismos Atípicos;',
			'TCE (Traumatismo Cranioencefálico)',
			'Tumores cerebrais;',
			'Entre outras',
		],
		areaNotes: [
			'Com o objetivo de manter a autonomia e a participação da pessoa nas atividades diárias.',
		],
	},
	{
		areaId: 'musculo-esqueletica',
		label: 'Músculo-esquelética',
		descriptionParagraphs: [
			'A Músculo-esquelética é a área da saúde que consiste nas disfunções do sistema neuro-músculo-esquelético.',
		],
		specialtyId: 'fisioterapia',
		bullets: [
			'Artroses e artrites;',
			'Dores;',
			'Entorses;',
			'Fraturas;',
			'Hérnias Discais;',
			'Lesões musculares;',
			'Pós - operatórios;',
			'Prótese do joelho ou anca;',
			'Tendinopatias;',
			'Entre outras',
		],
		areaNotes: [
			'A intervenção visa prevenir, diminuir, eliminar e gerir a dor e sintomas relacionados com a disfunção.'
		]
	},
	{
		areaId: 'cardiorrespiratoria',
		label: 'Cardiorrespiratória',
		descriptionParagraphs: [
			'A Cardiorrespiratória é a área da saúde que consiste nas disfunções do sistema cardiopulmonar.'
		],
		specialtyId: 'fisioterapia',
		bullets: [
			'Atelectasias;',
			'Bronquite Crónica;',
			'Condição pós - covid19;',
			'Derrames Pleurais;',
			'Doenças Pulmonares Obstrutivas Crónicas (DPOC\'s);',
			'Enfisema;',
			'Pneumonias;',
			'Entre outras',
		],
		areaNotes: [
			'A intervenção visa diminuir e eliminar sinais de dificuldade respiratória, assim como maximizar a função pulmonar.',
		],
	},
	{
		areaId: 'geriatria',
		label: 'Geriatria',
		descriptionParagraphs: [
			'A terapia aplicada ao envelhecimento está presente desde a prevenção até a reabilitação.',
			'A intervenção visa analisar as capacidades do idoso e o seu risco de queda, e promover a sua autonomia e funcionalidade, com consequente melhoria da qualidade de vida.',
		],
		specialtyId: 'fisioterapia',
	},
	{
		areaId: 'geriatria',
		label: 'Geriatria',
		descriptionParagraphs: [
			'Intervenção direcionada às dificuldades associadas ao envelhecimento normal, desde a prevenção à adaptação do ambiente de forma a manter a participação da pessoa nas atividades que deseja ou necessita de realizar. ',
		],
		specialtyId: 'terapia-ocupacional',
	},
	{
		areaId: 'oncologia',
		label: 'Oncologia',
		descriptionParagraphs: [
			'A Oncologia é a área da saúde que consiste nas doenças neoplásicas.'
		],
		specialtyId: 'fisioterapia',
		bullets: [
			'Tumores da cabeça e pescoçoç',
			'Melanoma;',
			'Cancro da mama;',
			'Cancro do pulmão;',
			'Cancro do Colo do Útero;',
			'Cancro da Próstata;',
			'Entre outros;',
		],
		areaNotes: [
			'A intervenção visa prestar cuidados de reabilitação após cirurgia oncológica incidindo na dor, diminuição das amplitudes articulares, diminuição da força, alteração da sensibilidade, tratamento e cuidados da cicatriz, entre outros.',
			'A fisioterapia é também fundamental na preparação para a cirugia e tratamento oncológico,'
		],
	},
	{
		areaId: 'drenagem-linfatica-manual',
		label: 'Drenagem Linfática Manual ',
		descriptionParagraphs: [
			'A drenagem linfática manual visa a eliminação da acumulação de edema no corpo, através de técnicas suaves em zonas específicas do corpo.',
		],
		specialtyId: 'fisioterapia',
	},
	{
		areaId: 'massagem-terapeutica',
		label: 'Massagem Terapêutica',
		descriptionParagraphs: [
			'A intervenção consiste em técnicas de massagem visando o alívio de dores musculares, relaxamento e preparação muscular.'
		],
		specialtyId: 'fisioterapia',
		bullets: [
			'Massagem Desportiva;',
			'Massagem de Relaxamento;',
			'Massagem Terapêutica.',
		],
	},
	{
		areaId: 'lesoes-membro=superior',
		label: 'Lesões de Membro Superior',
		descriptionParagraphs: [
			'Intervenção nas lesões que provoquem disfunção ou dificuldades nas atividades de vida diária como por exemplo:'
		],
		specialtyId: 'terapia-ocupacional',
		bullets: [
			'Lesões laborais;',
			'Tendinites;',
			'Entorces;',
			'Entre outras.'
		],
	},
	{
		areaId: 'dependencia-funcional',
		label: 'Dependência Funcional',
		descriptionParagraphs: [
			'Promover a autonomia da pessoa nas atividades funcionais, através da análise, graduação e adaptação da atividade. Intervenção em atividades como a alimentação, o treino de vestir e despir e a higiene pessoal.'
		],
		specialtyId: 'terapia-ocupacional',
	},
	{
		areaId: 'privacao-ocupacional',
		label: 'Privação Ocupacional',
		descriptionParagraphs: [
			'Promover o envolvimento em papéis significativos através de estratégias e ensino, tanto à pessoa como à família. '
		],
		specialtyId: 'terapia-ocupacional',
	},
	{
		areaId: 'motricidade-orofacial',
		label: 'Motricidade Orofacial',
		descriptionParagraphs: [
			'Intervenção nas alterações estruturais e funcionais da região oral e facial envolvidas nas funções de fala, mastigação, deglutição e respiração.'
		],
		specialtyId: 'terapia-da-fala',
	},
	{
		areaId: 'degluticao',
		label: 'Deglutição',
		descriptionParagraphs: [
			'O ato de deglutir (“engolir”) envolve uma série de movimentos coordenados dos músculos da boca e da faringe e laringe.',
			'A intervenção visa promover um processo de deglutição eficaz, sem risco de engasgamentos e possíveis pneumonias por aspiração, atuando assim na Disfagia.'
		],
		specialtyId: 'terapia-da-fala',
	},
	{
		areaId: 'fluencia',
		label: 'Fluência',
		descriptionParagraphs: [
			'A fluência consiste na capacidade de encadear os sons, sílabas e palavras de forma natural e sem esforço associado, com uma velocidade adequada com ritmo e pausas adequadas. É natural num discurso fluente ocorrerem algumas hesitações, mas não há um esforço evidente associado a estas.',
			'A Terapia da Fala é uma das principais formas de tratamento para pessoas que sofrem de uma perturbação da fluência, sendo a mais conhecida, a gaguez.'
		],
		specialtyId: 'terapia-da-fala',
	},
	{
		areaId: 'voz',
		label: 'Voz',
		descriptionParagraphs: [
			'A modificação da qualidade vocal poderá indicar uma alteração ao nível da estrutura ou do movimento das cordas vocais.',
			'Sintomas mais comuns são:'
		],
		specialtyId: 'terapia-da-fala',
		bullets: [
			'Rouquidão persistente;',
			'Fadiga vocal, comum em pessoas que usam excessivamente a voz, como professores ou cantores;',
			'Dor ou desconforto ao falar ou engolir;',
			'Mudanças na qualidade da voz;',
			'Dificuldade em controlar a voz;',
			'Perda total da voz.',
		],
		areaNotes: [
			'A Terapia da Fala pode ajudar a melhorar a qualidade vocal por forma a promover a qualidade de vida em pessoas com distúrbios vocais sendo que é sempre indicada uma consulta de Otorrinolaringologia prévia.'
		]
	},
	{
		areaId: 'comunicacao',
		label: 'Comunicação',
		descriptionParagraphs: [
			'Na presença de uma patologia ou síndrome que condicione a comunicação da pessoa, impossibilitando o uso da fala e/ou linguagem escrita para comunicar, a Terapia da Fala intervém adequando e instalando um sistema aumentativo e/ou alternativo de comunicação.'
		],
		specialtyId: 'terapia-da-fala',
	},
	{
		areaId: 'linguagem',
		label: 'Linguagem',
		descriptionParagraphs: [
			''
		],
		specialtyId: 'terapia-da-fala',
		subAreas: [
			{
				title: 'Linguagem Oral',
				description: [
					'A Linguagem Oral compreende a componente expressiva e compreensiva e é composta por 4 elementos linguísticos: a semântica (reconhecimento, significado e relação entre as palavras), a morfossintaxe (conhecimento implícito das regras sintáticas e morfológicas necessárias para a construção de frases gramaticais), a fonologia (reconhecimento e reflexão sobre os sons da fala) e a pragmática (capacidade de adequação da linguagem ao contexto).'
				]
			},
			{
				title: 'Linguagem Escrita',
				description: [
					'A linguagem escrita, ao contrário da linguagem oral, pressupõe uma aprendizagem explícita da releºão fonema (som)/grafema (letra), para que sejam acionados mecanismos de codificação (escrita) e descodificação (leitura).'
				]
			},
		],
		areaNotes: [
			'A Terapia da Fala intervém nos casos de dificuldade de leitura (alexia) e escrita (agrafia). '
		]
	},
	{
		areaId: 'articulacao',
		label: 'Articulação',
		descriptionParagraphs: [
			'A articulação verbal consiste na produção oral dos fonemas/sons. Para uma articulação correta dos sons é necessário que as estruturas e os músculos orofaciais estejam sadios.'
		],
		specialtyId: 'terapia-da-fala',
	},
	{
		areaId: 'envelhecimento-normal',
		label: 'Envelhecimento Normal',
		descriptionParagraphs: [
			'“O cérebro é como um músculo: quanto mais o exercitamos, mais forte ele fica” - Michael Merzenich, investigador premiado na área das neurociências e do envelhecimento.',
			'À medida que se atingem idades cada vez mais avançadas, surge a preocupação de saber se as alterações cognitivas que vão surgindo são normais e se é possível mudar o rumo do nosso envelhecimento cerebral, de forma a conservar a saúde do cérebro durante o máximo de tempo possível.Da mesma forma que o exercício físico é necessário para manter a forma física, a participação em atividades estimulantes para o cérebro também é fundamental para manter o seu bom funcionamento, e a investigação tem demonstrado que a Intervenção Cognitiva em pessoas cognitivamente saudáveis pode trazer melhorias, mesmo em idades muito avançadas.'
		],
		specialtyId: 'neuropsicologia',
	},
	{
		areaId: 'defeito-cognitivo-ligeiro',
		label: 'Defeito Cognitivo Ligeiro (DCL)',
		descriptionParagraphs: [
			'Está comprovado que a participação em atividades cognitivamente estimulantes e significativas pode promover a reversão do quadro de DCL para cognição normal, ou pelo menos o atraso na sua progressão para Doença de Alzheimer, podendo gerar ganhos moderados ao nível de funções cognitivas como a linguagem, memória, atenção, velocidade de processamento, entre outras.'
		],
		specialtyId: 'neuropsicologia',
	},
	{
		areaId: 'doencas-neurodegenerativas',
		label: 'Doenças Neurodegenerativas',
		descriptionParagraphs: [
			'No caso de doenças Neurodegenerativas, como a Doença de Alzheimer, a participação em atividades estimulantes para o cérebro continua a ser fundamental para retardar o agravamento da doença e promover o bem - estar da pessoa.De acordo com o National Institute for Health and Clinical Excellence, a Estimulação Cognitiva é a única intervenção não farmacológica recomendada para a sintomatologia cognitiva e a manutenção da funcionalidade, sendo que todos os indivíduos com demência deveriam participar em programas de Estimulação Cognitiva. A Neuropsicologia também intervém noutras doenças neurodegenerativas como a Doença de Parkinson, Parkinsonismos Atípicos, Esclerose Múltipla, Esclerose Lateral Amiotrófica, entre outras.',
			'Os benefícios mais consistentes da Estimulação Cognitiva para pessoas com doenças neurodegenerativas são os seguintes:'
		],
		specialtyId: 'neuropsicologia',
		bullets: [
			'Melhorar, ou pelo menos manter, a cognição global;',
			'Promover o bem-estar e qualidade de vida;',
			'Reduzir a apatia e sintomatologia depressiva;',
			'Melhorar o humor, a comunicação e o relacionamento interpessoal;',
			'Melhorar os níveis de energia, atenção, envolvimento e interesse.',
		],
	},
	{
		areaId: 'lesao-cerebral-adquirida',
		label: 'Lesão Cerebral Adquirida',
		descriptionParagraphs: [
			'A Intervenção Cognitiva nos casos de Lesão Cerebral Adquirida tem um papel fundamental na compensação e melhoria das dificuldades cognitivas após a lesão, seja em situações de traumatismos cranioencefálicos ou Acidentes Vasculares Cerebrais.Os exercícios e estratégias adotadas no processo de reabilitação envolvem frequentemente a memória, resolução de problemas, atenção, raciocínio lógico, funções executivas, entre outras.',
		],
		specialtyId: 'neuropsicologia',
	},
]