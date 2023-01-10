import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { prisma } from '../../lib/prisma'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    projectId: string
    technologyList: string[]
  }
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
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

  const { projectId, technologyList } = req.body

  const authorizationCode = req.headers.authorization

  if (authorizationCode !== process.env.AUTHORIZATION_REQ) {
    return res.status(401).json({ message: 'Código autorização incorreto!' })
  }

  await prisma.techs.createMany({
    data: technologyList.map((tech) => {
      return {
        name: tech,
        projects_id: projectId,
      }
    }),
  })

  // await Promise.all(
  //   technologyList.map((tech) => {
  //     return prisma.techs.create({
  //       data: {
  //         name: tech,
  //         projects_id: projectId,
  //       },
  //     })
  //   })
  // )

  return res.status(201).end()
}
