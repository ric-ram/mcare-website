export type Area = {
	areaId: string;
	label: string;
	image: string;
	description: string;
	bullets?: string[];
}

export const AREAS: Area[] = [
	{
		areaId: 'cardiorrespiratoria',
		label: 'Cardiorrepiratória',
		image: '',
		description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.',
		bullets: [
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			'Aliquam tincidunt mauris eu risus.',
			'Vestibulum auctor dapibus neque.',
		],
	},
	{
		areaId: 'massagem',
		label: 'Massagem',
		image: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare magna in dolor elementum tempor. Curabitur iaculis, libero id pulvinar cursus, orci eros egestas ex, nec porta elit lectus at lorem. Nam ut nulla sed ex consectetur bibendum. Pellentesque dictum leo sodales consequat tincidunt. Sed eu nunc id nunc facilisis vehicula et ac lacus.',
		bullets: [
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			'Aliquam tincidunt mauris eu risus.',
			'Vestibulum auctor dapibus neque.',
		],
	}
]