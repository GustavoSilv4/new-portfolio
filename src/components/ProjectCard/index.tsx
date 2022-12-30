import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import Modal from '../Modal'

import { Container } from './styles'

export default function ProjectCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container>
          <div>
            <Image src="https://i.imgur.com/9VL7aBW.jpeg" alt="" width={300} height={130} />
          </div>

          <div>
            <h5>Titulo do projeto</h5>
            <span>Ver Mais...</span>
          </div>
        </Container>
      </Dialog.Trigger>
      <Modal />
    </Dialog.Root>
  )
}
