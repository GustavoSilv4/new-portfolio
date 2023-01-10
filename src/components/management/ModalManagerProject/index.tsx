import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as S from './styles'
import { useState } from 'react'
import { api } from '../../../lib/axios'
import { AxiosError } from 'axios'
import { getProjects } from '../../../@types/getProjects'
import { RadioGroup } from '../../RadioGroup'
import { TagBox } from '../TagBox'
import { toast } from 'react-toastify'

const createNewProjectFormSchema = z.object({
  projectList: z.string().min(1, {
    message: 'Selecione um projeto a lista de projeto!',
  }),
  typeSelect: z
    .undefined()
    .or(z.enum(['editproject', 'deleteproject', 'addtechs', 'deletetechs'])),
  projectName: z.string(),
  imagePreview: z.string(),
  description: z.string(),
  repository: z.string(),
  preview: z.string(),
  authorization: z.string().min(1, {
    message: 'Necessário o código de autorização para criação do projeto!',
  }),
})

type CreateNewProjectFormData = z.infer<typeof createNewProjectFormSchema>

interface ModalProps extends getProjects {}

export default function ModalManagementProject({ projects }: ModalProps) {
  const [errorFetch, setErrorFetch] = useState<string | null>(null)
  const [technologyList, setTechnologyList] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateNewProjectFormData>({
    resolver: zodResolver(createNewProjectFormSchema),
    defaultValues: {
      projectList: undefined,
      typeSelect: undefined,
      imagePreview: 'https://imgur.com',
    },
  })

  const typeSelect = watch('typeSelect')

  const editModeIsActive = typeSelect === 'editproject'

  async function handleManageProject(data: CreateNewProjectFormData) {
    const { typeSelect: typeSelected, projectList: projectId } = data

    const config = {
      headers: {
        Authorization: data.authorization,
      },
    }

    const editProjectData = {
      projectId,
      projectName: data.projectName,
      imageUrl:
        data.imagePreview === 'https://imgur.com' ? '' : data.imagePreview,
      description: data.description,
      repository: data.repository,
      preview: data.preview,
    }

    const addTechs = {
      projectId,
      technologyList,
    }

    const toastPending = toast(`Aguarde um instante...`, {
      position: 'top-right',
      autoClose: false,
      theme: 'dark',
    })

    try {
      if (typeSelected === 'editproject') {
        await api.put('/editaproject', editProjectData, config)

        toast.update(toastPending, {
          render: `Projeto editado com sucesso`,
          type: toast.TYPE.SUCCESS,
          position: 'top-right',
          autoClose: 3000,
        })

        setErrorFetch(null)
        return
      }

      if (typeSelected === 'deleteproject') {
        await api.delete('/deleteaproject', {
          headers: {
            Authorization: data.authorization,
          },
          data: {
            projectId,
          },
        })

        toast.update(toastPending, {
          render: `Projeto deletado com sucesso`,
          type: toast.TYPE.SUCCESS,
          position: 'top-right',
          autoClose: 3000,
        })

        setErrorFetch(null)
      }

      if (typeSelected === 'addtechs') {
        if (technologyList.length <= 0) {
          return setErrorFetch(
            'Precisa de pelo menos 1 tecnologia para ser adicionada!'
          )
        }
        await api.post('/addtechsforproject', addTechs, config)

        toast.update(toastPending, {
          render: `Tecnologias adicionada com sucesso`,
          type: toast.TYPE.SUCCESS,
          position: 'top-right',
          autoClose: 3000,
        })

        setTechnologyList([])
        setErrorFetch(null)
      }

      if (typeSelected === 'deletetechs') {
        await api.delete('/deletetechsaproject', {
          headers: {
            Authorization: data.authorization,
          },
          data: {
            projectId,
          },
        })

        toast.update(toastPending, {
          render: `Tecnologias deletadas com sucesso`,
          type: toast.TYPE.SUCCESS,
          position: 'top-right',
          autoClose: 3000,
        })

        setErrorFetch(null)
      }
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
    } finally {
      reset({
        description: '',
        imagePreview: '',
        preview: '',
        projectName: '',
        repository: '',
        typeSelect: typeSelected,
      })
    }
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Gerenciar Projeto</Dialog.Title>

        <form onSubmit={handleSubmit(handleManageProject)}>
          <S.CheckboxesContainer>
            <Controller
              name="typeSelect"
              control={control}
              render={({ field }) => {
                return (
                  <RadioGroup
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  />
                )
              }}
            />
          </S.CheckboxesContainer>

          {typeSelect !== undefined && (
            <S.Label htmlFor="projects-list">
              Selecione um Projeto
              <select id="projects-list" {...register('projectList')}>
                <option value={undefined} defaultChecked></option>
                {projects.map((project) => {
                  return (
                    <option key={project.id} value={project.id}>
                      {project.project_name}
                    </option>
                  )
                })}
              </select>
              <S.FormError>{errors.projectList?.message}</S.FormError>
            </S.Label>
          )}

          <S.EditProjectContainer isActive={editModeIsActive}>
            <S.Label htmlFor="name-project">
              Nome do Projeto
              <input
                type="text"
                id="name-project"
                {...register('projectName')}
              />
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
              Link do Repositório (Github)
              <input type="text" id="repository" {...register('repository')} />
              <S.FormError>{errors.repository?.message}</S.FormError>
            </S.Label>

            <S.Label htmlFor="preview">
              Link para o Projeto
              <input type="text" id="preview" {...register('preview')} />
              <S.FormError>{errors.preview?.message}</S.FormError>
            </S.Label>
          </S.EditProjectContainer>

          {typeSelect === 'addtechs' && (
            <S.TagContainer>
              <TagBox
                setTechnologyListFunction={setTechnologyList}
                technologyList={technologyList}
              />
            </S.TagContainer>
          )}

          {typeSelect !== undefined && (
            <>
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

              <button disabled={isSubmitting}>Executar</button>
            </>
          )}
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
