import * as Dialog from '@radix-ui/react-dialog'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { getProjects } from '../../@types/getProjects'

import ModalManagerProject from '../../components/management/ModalManagerProject'
import ModalNewProject from '../../components/management/ModalNewProject'
import { api } from '../../lib/axios'
import { Container } from '../../styles/pages/management'

interface ManagementProps extends getProjects {}

export default function Management({ projects }: ManagementProps) {
  return (
    <>
      <NextSeo title="Gerenciamento de Projetos - Gustavo Silva" noindex />

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
          <ModalManagerProject projects={projects} />
        </Dialog.Root>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('getprojects')

  const projects = response.data.projects

  return {
    props: {
      projects,
    },
  }
}
