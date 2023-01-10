import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as S from './styles'
import { useState } from 'react'
import { api } from '../../../lib/axios'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const createNewProjectFormSchema = z.object({
  projectName: z
    .string()
    .min(1, { message: 'Necessário dá um nome para o projeto!' }),
  imagePreview: z
    .string()
    .min(1, {
      message: 'Necessário uma imagem para o projeto!',
    })
    .startsWith('https://imgur.com/', {
      message: 'Image necessariamente precisa está hospedada no imgur',
    }),
  description: z.string().min(1, {
    message: 'Necessário uma descrição para o projeto!',
  }),
  repository: z.string().min(1, {
    message: 'Necessário o repositório do projeto!',
  }),
  preview: z.string().min(1, {
    message: 'Necessário o link para acesso do projeto!',
  }),
  authorization: z.string().min(1, {
    message: 'Necessário o código de autorização para criação do projeto!',
  }),
})

type CreateNewProjectFormData = z.infer<typeof createNewProjectFormSchema>

export default function ModalNewProject() {
  const [errorFetch, setErrorFetch] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateNewProjectFormData>({
    resolver: zodResolver(createNewProjectFormSchema),
    defaultValues: {
      imagePreview: 'https://imgur.com/',
    },
  })

  async function handleCreateNewProject(data: CreateNewProjectFormData) {
    const config = {
      headers: {
        Authorization: data.authorization,
      },
    }

    const newProject = {
      project_name: data.projectName,
      image_url: data.imagePreview,
      description: data.description,
      repository: data.repository,
      preview: data.preview,
    }

    const toastPending = toast(`Aguarde um instante...`, {
      position: 'top-right',
      autoClose: false,
      theme: 'dark',
    })

    try {
      await api.post('/createnewproject', newProject, config)

      toast.update(toastPending, {
        render: `Projeto criado com sucesso`,
        type: toast.TYPE.SUCCESS,
        position: 'top-right',
        autoClose: 3000,
      })

      setErrorFetch(null)
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.message) {
        toast.update(toastPending, {
          render: `Ocorreu um error!`,
          type: toast.TYPE.ERROR,
          position: 'top-right',
          autoClose: 3000,
        })
        setErrorFetch(err.response.data.message)
      }
    }
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Criar novo Projeto</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewProject)}>
          <S.Label htmlFor="name-project">
            Nome do Projeto
            <input type="text" id="name-project" {...register('projectName')} />
            <S.FormError>{errors.projectName?.message}</S.FormError>
          </S.Label>

          <S.Label htmlFor="image-preview">
            Url da Imagem de Preview (Imgur)
            <input
              type="text"
              id="image-preview"
              placeholder="https://imgur.com/"
              {...register('imagePreview')}
            />
            <S.FormError>{errors.imagePreview?.message}</S.FormError>
          </S.Label>

          <S.Label htmlFor="description">
            Descrição
            <textarea id="description" {...register('description')} />
            <S.FormError>{errors.description?.message}</S.FormError>
          </S.Label>

          <S.Label htmlFor="repository">
            Link do Repositório
            <input type="text" id="repository" {...register('repository')} />
            <S.FormError>{errors.repository?.message}</S.FormError>
          </S.Label>

          <S.Label htmlFor="preview">
            Link para o Projeto
            <input type="text" id="preview" {...register('preview')} />
            <S.FormError>{errors.preview?.message}</S.FormError>
          </S.Label>

          <S.Label htmlFor="authorization">
            Código de Autorização
            <input
              type="password"
              id="authorization"
              {...register('authorization')}
            />
            <S.FormError>{errors.authorization?.message}</S.FormError>
          </S.Label>

          {errorFetch !== null && <S.FormError>{errorFetch}</S.FormError>}

          <button disabled={isSubmitting} type="submit">
            Criar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
