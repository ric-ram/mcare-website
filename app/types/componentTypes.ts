import { Area } from "@/data/areas";

export type StepCardProps = {
	image: string;
	step: number;
	text: string;
};

export type ComponentProps = {
	bgColor?: string;
};

export type AreaButtonProps = {
	Area: Area;
	activeArea: Area;
	onClick?: React.MouseEventHandler;
};

export type AreaDescriptionProps = {
	activeArea: Area;
};

export type AreaCardProps = {
	name: string;
	image: string;
	href: string;
};

export type AreaProps = {
	params: {
		areaId: string;
	};
};

export type SlideProps = {
	key: number;
	slideType: string;
	id: string;
};

export type CarouselProps = {
	carouselType: string;
	cardIds: string[];
	bgColor?: string;
};

export type AppointmentFormProps = {
	popover?: boolean;
};

export type AppointmentsInputs = {
	name: string;
	email: string;
	phone: number;
	message: string;
	agree: boolean;
};

export type TestimonialInputs = {
	name: string;
	email: string;
	rating: number;
	testimonial: string;
	agree: boolean;
	image?: File;
};

export type RecruitInputs = {
	name: string;
	email: string;
	phone: number;
	actuationZone: string;
	specializationArea: string;
	file: File;
	message: string;
	agree: boolean;
};

export type OptionProp = {
	label: string;
	value: string;
};

export type CardProps = {
	id: string;
};