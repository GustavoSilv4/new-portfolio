import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
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

  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  await NextCors(req, res, {
    // Options
    methods: ['POST'],
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const authorizationCode = req.headers.authorization

  if (authorizationCode !== process.env.AUTHORIZATION_REQ) {
    return res.status(401).json({ message: 'Código autorização incorreto!' })
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

  return res.status(201).json({ projects })
}
