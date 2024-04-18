export type Testimonial = {
	testimonialId: string;
	author: string;
	review: string;
	rating: number;
	accepted: boolean;
	visible: boolean;
	highlighted: boolean;
	image?: string;
	imageAlt?: string;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		testimonialId: 'john-doe',
		author: 'John Doe',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.`,
		rating: 5,
		accepted: true,
		visible: true,
		highlighted: false,
	},
	{
		testimonialId: 'jane-doe',
		author: 'Jane Doe',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4,
		accepted: true,
		visible: true,
		highlighted: false,
	},
	{
		testimonialId: 'john-wick',
		author: 'John Wick',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4,
		accepted: true,
		visible: true,
		highlighted: false,
	},
	{
		testimonialId: 'slenderman',
		author: 'Slenderman',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 3.5,
		accepted: true,
		visible: true,
		highlighted: false,
	},
	{
		testimonialId: 'dr-watson',
		author: 'Dr. Watson',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 5,
		accepted: true,
		visible: true,
		highlighted: false,
	},
	{
		testimonialId: 'winston',
		author: 'Winston',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4,
		accepted: true,
		visible: true,
		highlighted: false,
	},
	{
		testimonialId: 'pennywise',
		author: 'Pennywise',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 5,
		accepted: true,
		visible: true,
		highlighted: true,
		image: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		imageAlt: 'pennyswise image',
	},
	{
		testimonialId: 'james-bond',
		author: 'James Bond',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4.5,
		accepted: true,
		visible: true,
		highlighted: true,
		image: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		imageAlt: 'james bond image',
	},
];