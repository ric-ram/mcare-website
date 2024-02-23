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
			"cardiorrespiratoria",
			"massagem",
		]
	},
	{
		specialtyId: "terapia-da-fala",
		label: 'Terapia da Fala',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
	{
		specialtyId: "terapia-ocupacional",
		label: 'Terapia Ocupacional',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
	{
		specialtyId: "pilates",
		label: 'Pilates',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
];
