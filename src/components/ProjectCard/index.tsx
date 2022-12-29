import Image from 'next/image'
import { Container } from './styles'

export default function ProjectCard() {
  return (
    <Container>
      <div>
        <Image src={'https://i.imgur.com/9VL7aBW.jpeg'} alt="" width={300} height={130} />
      </div>

      <div>
        <h5>Titulo do projeto</h5>
        <span>Tecnologias: HTML,CSS e JS</span>
      </div>
    </Container>
  )
}
