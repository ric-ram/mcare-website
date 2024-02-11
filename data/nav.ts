export interface NavItem {
	label: string;
	options?: string;
	children?: Array<NavItem>;
	href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'A MCare',
		href: '/sobre-mcare',
		children: [
			{
				label: 'Sobre nós',
				href: '/sobre-mcare',
			},
			{
				label: 'Equipa',
				href: '/equipa',
			},
		],
	},
	{
		label: 'Áreas',
		href: '/areas',
		children: [
			{
				label: 'Fisioterapia',
				href: '/areas/fisioterapia',
			},
			{
				label: 'Terapia da Fala',
				href: '/areas/terapia-da-fala',
			},
			{
				label: 'Terapia Ocupacional',
				href: '/areas/terapia-ocupacional',
			},
			{
				label: 'Pilates',
				href: '/areas/pilates',
			},
		],
	},
	{
		label: 'Testemunhos',
		href: '/testemunhos',
	},
	{
		label: 'Marcações',
		options: 'mobile-only',
		href: '/marcacao',
	},
];
