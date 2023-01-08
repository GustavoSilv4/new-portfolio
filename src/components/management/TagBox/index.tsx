import { PlusCircle } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react'

import { TagCard } from './components/TagCard'
import * as S from './styles'

interface TagBoxProps {
  setTechnologyListFunction: Dispatch<SetStateAction<string[]>>
  technologyList: string[]
}

export function TagBox({
  setTechnologyListFunction,
  technologyList,
}: TagBoxProps) {
  const [inputTech, setInputTech] = useState<string>('')

  function handleCreateNewTech() {
    if (inputTech !== '') {
      setTechnologyListFunction((state) => [...state, inputTech])
      setInputTech('')
    }
  }

  function handleDeleteTech(name: string) {
    setTechnologyListFunction((state) => {
      return state.filter((tech) => tech !== name)
    })
  }

  return (
    <S.Container>
      <h5>Tecnologias</h5>
      <S.Box>
        {technologyList.map((tech, i) => {
          return (
            <TagCard key={i} text={tech} deleteFunction={handleDeleteTech} />
          )
        })}
      </S.Box>
      <S.Label>
        <input
          type="text"
          placeholder="Adicione uma nova tecnologia"
          onChange={(e) => setInputTech(e.target.value)}
          value={inputTech}
        />
        <button type="button" onClick={handleCreateNewTech}>
          <PlusCircle size={26} weight="light" />
        </button>
      </S.Label>
    </S.Container>
  )
}
