export interface getProjects {
  projects: {
    id: string
    project_name: string
    image_url: string
    description: string
    repository: string
    preview_link: string
    Techs: {
      id: string
      name: string
    }[]
  }[]
}
