export type Area = {
	areaId: string;
	label: string;
	image: string;
	description: string;
	services?: string[];
};

export const AREAS: Area[] = [
	{
		areaId: "fisioterapia",
		label: 'Fisioterapia',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
		services: [
			"cardiorrespiratoria",
			"massagem",
		]
	},
	{
		areaId: "terapia-da-fala",
		label: 'Terapia da Fala',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
	{
		areaId: "terapia-ocupacional",
		label: 'Terapia Ocupacional',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
	{
		areaId: "pilates",
		label: 'Pilates',
		image: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
	},
];
