import { DBTestimonial } from "@/app/context/store";
import { Dispatch, SetStateAction } from "react";

export const getTestimonialsIds = (
	testimonials: DBTestimonial[],
	setAcceptedTestimonialIds: Dispatch<SetStateAction<string[]>>,
) => {
	let ids = [];
	testimonials.forEach((testimonial: DBTestimonial) => {
		if (testimonial.aprovado && testimonial.visivel && !testimonial.destaque) {
			ids.push(testimonial.id);
		}
	});
	setAcceptedTestimonialIds(ids);
};

export const getHighlightedTestimonialsIds = (
	testimonials: DBTestimonial[],
	setHighlightedTestimonialsIds: Dispatch<SetStateAction<DBTestimonial[]>>,
) => {
	let data = [];
	testimonials.forEach((testimonial: DBTestimonial) => {
		if (testimonial.aprovado && testimonial.visivel && testimonial.destaque) {
			data.push(testimonial);
		}
	});
	setHighlightedTestimonialsIds(data);
};

export const getTestimonial = (id: string, testimonials: DBTestimonial[]) => {
	return testimonials.find(
		(testimonial: DBTestimonial) => testimonial.id === id,
	);
};