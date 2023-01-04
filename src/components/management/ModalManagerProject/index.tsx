import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

export default function ModalManagerProject() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Manager</Dialog.Title>
        <form></form>
      </S.Content>
    </Dialog.Portal>
  )
}
