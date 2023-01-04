import Image from 'next/image'

import { Container } from './styles'

import htmlIcon from '../../../assets/skillIcons/html5.svg'
import css3Icon from '../../../assets/skillIcons/css3.svg'
import typescriptcon from '../../../assets/skillIcons/typescript.svg'
import styledcomponentsIcon from '../../../assets/skillIcons/styledcomponents.svg'
import reactjsIcon from '../../../assets/skillIcons/reactjs.svg'
import nextjsIcon from '../../../assets/skillIcons/nextjs.svg'

interface CardProps {
  title: string
}

export default function SkillCard({ title }: CardProps) {
  return (
    <Container title={title}>
      {title === 'HTML5' && <Image src={htmlIcon} alt="" />}
      {title === 'CSS3' && <Image src={css3Icon} alt="" />}
      {title === 'Typescript' && <Image src={typescriptcon} alt="" />}
      {title === 'Styled Components' && (
        <Image src={styledcomponentsIcon} alt="" />
      )}
      {title === 'ReactJS' && <Image src={reactjsIcon} alt="" />}
      {title === 'NextJS' && <Image src={nextjsIcon} alt="" />}
    </Container>
  )
}
