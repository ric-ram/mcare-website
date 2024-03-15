export type Specialty = {
	specialtyId: string;
	label: string;
	image: string;
	description: string;
	areas?: string[];
};

export const SPECIALTIES: Specialty[] = [
	{
		specialtyId: "fisioterapia",
		label: 'Fisioterapia',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
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
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
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
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
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
		specialtyId: "pilates-clinicio",
		label: 'Pilates Clínico',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
];
