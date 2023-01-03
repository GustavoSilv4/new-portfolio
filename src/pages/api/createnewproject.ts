import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    project_name: projectName,
    image_url: imageURL,
    description,
    repository,
    preview,
  } = req.body
  const authorizationCode = req.headers.authorization

  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  if (authorizationCode !== process.env.AUTHORIZATION_REQ) {
    res.status(401).json({ message: 'Código autorização incorreto!' })
  }

  const projects = await prisma.projects.create({
    data: {
      project_name: projectName,
      image_url: imageURL,
      description,
      repository,
      preview_link: preview,
    },
  })

  res.status(201).json({ projects })
}
