import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'

import close from '../../assets/close.svg'

import { ButtonContainer, Container, Content, HeaderModal, Overlay, Title } from './styles'

export default function Modal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <HeaderModal>
          <Title>Github-Blog</Title>
          <Dialog.Close>
            <Image src={close} alt="" />
          </Dialog.Close>
        </HeaderModal>
        <Container>
          <p>
            Esse projeto consistiu em site para delivery de uma cafeteria, projeto proposto no segundo módulo do curso
            ignite da Rocketseat, para colocarmos em prática tudo que nós aprendemos neste módulo.
          </p>

          <span>Tecnologias: ReactJS, Typescript, Context API, Styled-Components</span>

          <ButtonContainer>
            <button>
              <Link href="https://coffee-delivery.gustavosilv4.com.br" target="_blank" rel="noreferrer">
                Visualizar
              </Link>
            </button>
            <button>
              <Link href="https://coffee-delivery.gustavosilv4.com.br" target="_blank" rel="noreferrer">
                Repositório
              </Link>
            </button>
          </ButtonContainer>
        </Container>
      </Content>
    </Dialog.Portal>
  )
}
