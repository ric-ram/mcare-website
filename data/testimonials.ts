export type Testimonial = {
	testimonialId: string;
	author: string;
	review: string;
	rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		testimonialId: 'john-doe',
		author: 'John Doe',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 5,
	},
	{
		testimonialId: 'jane-doe',
		author: 'Jane Doe',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4,
	},
	{
		testimonialId: 'john-wick',
		author: 'John Wick',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4,
	},
	{
		testimonialId: 'slenderman',
		author: 'Slenderman',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 3.5,
	},
	{
		testimonialId: 'dr-watson',
		author: 'Dr. Watson',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 5,
	},
	{
		testimonialId: 'winston',
		author: 'Winston',
		review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`,
		rating: 4,
	},
];