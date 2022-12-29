import Image from 'next/image'
import { Container } from './styles'

export default function ProjectCard() {
  return (
    <Container>
      <div>
        <Image src="" alt="" />
      </div>

      <div>
        <h5>Titulo do projeto</h5>
        <span>Tecnologias: HTML,CSS e JS</span>
      </div>
    </Container>
  )
}
