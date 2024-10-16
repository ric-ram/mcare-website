import { Area } from "@/data/areas";
import { Specialty } from "@/data/specialties";

export type StepCardProps = {
	image: string;
	step: number;
	text: string;
};

export type GeneralComponentProps = {
	bgColor?: string;
}

export type InteractiveTableProps = {
	title: string;
	items: Specialty[] | Area[];
	type?: string;
	bgColor?: string;
};

export type HighlightedItemButtonProps = {
	item: Specialty | Area;
	activeItem: Specialty | Area;
	onClick?: React.MouseEventHandler;
	type?: string;
};

export type SpecialtyDescriptionProps = {
	activeSpecialty: Specialty;
};

export type AreaDescriptionProps = {
	activeArea: Area;
};

export type HowToCardProps = {
	label: string;
	howToIntro: string;
	howToSteps: string[];
}

export type SpecialtyCardProps = {
	name: string;
	image: string;
	href: string;
};

export type SpecialtyProps = {
	params: {
		specialtyId: string;
	};
};

export type SlideProps = {
	key: number;
	id: string;
};

export type CarouselProps = {
	cardIds: string[];
	bgColor?: string;
};

export type AppointmentFormProps = {
	popover?: boolean;
};

export type AppointmentsInputs = {
	name: string;
	email: string;
	countryCode: string;
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

export enum ModalTypes {
	Testimonial = 'Testimonial',
	Appointment = 'Appointment',
	Recruit = 'Recruit',
}

export type ModalProps = {
	onClose: () => void;
	isOpen: boolean;
	success: boolean;
	type: ModalTypes;
};