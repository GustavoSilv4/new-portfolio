import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import Modal from '../Modal'

import { Container } from './styles'

export interface TechProps {
  id: string
  name: string
}

interface CardProps {
  imageUrl: string
  projectName: string
  description: string
  previewLink: string
  repository: string

  techs: TechProps[]
}

export default function ProjectCard({
  imageUrl,
  projectName,
  description,
  previewLink,
  repository,
  techs,
}: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container>
          <div>
            <Image src={imageUrl} alt="" width={300} height={130} />
          </div>

          <div>
            <h5>{projectName}</h5>
            <span>Ver Mais...</span>
          </div>
        </Container>
      </Dialog.Trigger>
      <Modal
        projectName={projectName}
        description={description}
        previewLink={previewLink}
        repository={repository}
        techs={techs}
      />
    </Dialog.Root>
  )
}
