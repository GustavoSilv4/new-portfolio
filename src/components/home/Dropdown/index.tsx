import Link from 'next/link'
import * as S from './styles'

export default function Dropdown() {
  return (
    <S.Content>
      <S.Item>
        <Link href="#aboutme">Sobre mim</Link>
      </S.Item>
      <S.Item>
        <Link href="#skills">Minhas skills</Link>
      </S.Item>
      <S.Item>
        <Link href="#projects">Projetos</Link>
      </S.Item>
    </S.Content>
  )
}
