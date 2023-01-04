import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'

import close from '../../../assets/close.svg'
import { TechProps } from '../ProjectCard'

import {
  ButtonContainer,
  Container,
  Content,
  HeaderModal,
  Overlay,
  Title,
} from './styles'

interface ModalProps {
  projectName: string
  description: string
  previewLink: string
  repository: string

  techs: TechProps[]
}

export default function Modal({
  projectName,
  description,
  previewLink,
  repository,
  techs,
}: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <HeaderModal>
          <Title>{projectName}</Title>
          <Dialog.Close>
            <Image src={close} alt="" />
          </Dialog.Close>
        </HeaderModal>
        <Container>
          <p>{description}</p>

          <span>
            Tecnologias:
            {techs.map((tech, index) =>
              index === techs.length - 1 ? ` ${tech.name}.` : ` ${tech.name}, `
            )}
          </span>

          <ButtonContainer>
            <button>
              <Link href={previewLink} target="_blank">
                Visualizar
              </Link>
            </button>
            <button>
              <Link href={repository} target="_blank">
                Repositório
              </Link>
            </button>
          </ButtonContainer>
        </Container>
      </Content>
    </Dialog.Portal>
  )
}
