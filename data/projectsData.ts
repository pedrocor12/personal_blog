interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
    {
    title: 'Efficient Vision Transformers',
    description: `The project aimed to explore and optimize lightweight Vision Transformer (ViT) models specifically
tailored for resource-constrained environments. The primary focus was on enhancing the efficiency
and performance of these models in playing the Atari game Pong. The research involved developing and comparing three baseline ViT models against a primary
, smaller ViT model. Key aspects of this comparison include model performance, memory footprint, and inference times.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/Efficient-Vision-Transformers',
  },
]

export default projectsData
