import { X } from 'phosphor-react'
import * as S from './styles'

interface TagCardProps {
  text: string
  deleteFunction: (name: string) => void
}

export function TagCard({ text, deleteFunction }: TagCardProps) {
  function deleteTag() {
    deleteFunction(text)
  }

  return (
    <S.TagContainer>
      <span>{text}</span>
      <button type="button" onClick={deleteTag}>
        <X />
      </button>
    </S.TagContainer>
  )
}
