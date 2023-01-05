import { Check } from 'phosphor-react'
import * as S from './styles'

interface CheckboxProps {
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
  checked?: boolean
  label?: string
}

export function Checkbox({ onCheckedChange, checked, label }: CheckboxProps) {
  return (
    <>
      <S.Root onCheckedChange={onCheckedChange} checked={checked} id={label}>
        <S.Indicator>
          <Check />
        </S.Indicator>
      </S.Root>
      <label htmlFor={label}>{label}</label>
    </>
  )
}
