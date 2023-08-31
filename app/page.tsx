import ContainerWithImage from "@/components/containerImage";
import TestimonialCard from "@/components/testimonialCard";
import TestimonialCarousel from "@/components/testimonialCarousel";

export default function Home() {
  const imgContainer = {
    loreumText:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    imageAlt: "feature image",
  };

  const testimonial = {
    author: 'John Doe',
    review: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
    odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
    Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
    pede.`,
    rating: 5
  }

  return (
    <>
      <TestimonialCarousel />
      {/* <TestimonialCard author={testimonial.author} review={testimonial.review} rating={testimonial.rating}/> */}
      {/* <ContainerWithImage title={'A MCare'} text={imgContainer.loreumText} imageSrc={imgContainer.imagePlaceholder} imageAlt={imageContainer.imageAlt} />
      <ContainerWithImage title={'A MCare'} text={imgContainer.loreumText} imageSrc={imgContainer.imagePlaceholder} imageAlt={imgContainer.imageAlt} imageRight={true} bgColor="pastelBlue"/> */}
    </>
  );
}
