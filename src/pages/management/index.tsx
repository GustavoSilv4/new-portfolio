import * as Dialog from '@radix-ui/react-dialog'

import ModalManagerProject from '../../components/management/ModalManagerProject'
import ModalNewProject from '../../components/management/ModalNewProject'
import { Container } from '../../styles/pages/management'

export default function Management() {
  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Cria novo projeto</button>
        </Dialog.Trigger>
        <ModalNewProject />
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Gerenciar projetos</button>
        </Dialog.Trigger>
        <ModalManagerProject />
      </Dialog.Root>
    </Container>
  )
}
