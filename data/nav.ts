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
    label: 'Serviços',
    href: '/servicos',
    children: [
      {
        label: 'Neurologia',
        href: '/marcacao',
      },
      {
        label: 'Músculo-esquelética',
        href: '/marcacao',
      },
      {
        label: 'Cardiorrespiratória',
        href: '/marcacao',
      },
      {
        label: 'Drenagem Linfática',
        href: '/marcacao',
      },
      {
        label: 'Massagem Terapêutica',
        href: '/marcacao',
      },
      {
        label: 'Geriatria',
        href: '/marcacao',
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
