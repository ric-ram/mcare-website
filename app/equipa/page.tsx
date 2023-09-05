'use client';

import ContainerWithImage from '@/components/containerImage';

export default function Team() {
  const expContainer = {
    title: 'Experiência',
    loreumText: [
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    ],
    imagePlaceholder:
      'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'feature image',
  };

  const teamContainer = {
    title: 'Equipa de Fisioterapeutas',
    loreumText: [
      'Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum.',
      'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.',
    ],
    imagePlaceholder:
      'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'feature image',
  };

  return (
    <>
      <ContainerWithImage
        title={expContainer.title}
        texts={expContainer.loreumText}
        imageSrc={expContainer.imagePlaceholder}
        imageAlt={expContainer.imageAlt}
        as={'h1'}
        variant='header1'
      />
      <ContainerWithImage
        title={teamContainer.title}
        texts={teamContainer.loreumText}
        imageSrc={teamContainer.imagePlaceholder}
        imageAlt={teamContainer.imageAlt}
        imageRight={true}
        bgColor='pastelBlue'
        as={'h2'}
        variant='header2'
        last={true}
      />
    </>
  );
}
