import ContainerWithImage from "@/components/containerImage";

export default function Home() {
  const loreumText = 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

  const imagePlaceholder = 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  const imageAlt = 'feature image';

  return (
    <>
      <ContainerWithImage title={'A MCare'} text={loreumText} imageSrc={imagePlaceholder} imageAlt={imageAlt} />
      <ContainerWithImage title={'A MCare'} text={loreumText} imageSrc={imagePlaceholder} imageAlt={imageAlt} imageRight={true} bgColor="pastelBlue"/>
    </>
  );
}
