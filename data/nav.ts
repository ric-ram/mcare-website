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
		label: 'Especialidades',
		href: '/especialidades',
		children: [
			{
				label: 'Fisioterapia',
				href: '/especialidades/fisioterapia',
			},
			{
				label: 'Terapia Ocupacional',
				href: '/especialidades/terapia-ocupacional',
			},
			{
				label: 'Terapia da Fala',
				href: '/especialidades/terapia-da-fala',
			},
			{
				label: 'Pilates Clínico',
				href: '/especialidades/pilates-clinico',
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
