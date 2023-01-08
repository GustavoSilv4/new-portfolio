import * as S from './styles'

interface RadioGroupProps {
  onValueChange?: (value: string) => void
  value?: string | undefined
}

export function RadioGroup({ onValueChange, value }: RadioGroupProps) {
  return (
    <S.Root onValueChange={onValueChange} value={value}>
      <div>
        <S.Item value="editproject" id="editproject">
          <S.Indicator />
        </S.Item>
        <label htmlFor="editproject">Editar Projeto</label>
      </div>

      <div>
        <S.Item value="deleteproject" id="deleteproject">
          <S.Indicator />
        </S.Item>
        <label htmlFor="deleteproject">Deletar Projeto</label>
      </div>

      <div>
        <S.Item value="addtechs" id="addtechs">
          <S.Indicator />
        </S.Item>
        <label htmlFor="addtechs">Add Tecnologia</label>
      </div>

      <div>
        <S.Item value="deletetechs" id="deletetechs">
          <S.Indicator />
        </S.Item>
        <label htmlFor="deletetechs">Deletar Tecnologias</label>
      </div>
    </S.Root>
  )
}
