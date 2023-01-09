import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).end()
  }

  await NextCors(req, res, {
    // Options
    methods: ['DELETE'],
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const authorizationCode = req.headers.authorization

  if (authorizationCode !== process.env.AUTHORIZATION_REQ) {
    return res.status(401).json({ message: 'Código autorização incorreto!' })
  }

  const { projectId } = req.body

  if (!projectId) {
    return res
      .status(400)
      .json({ message: 'Necessário informar o id do projeto!' })
  }

  await prisma.techs.deleteMany({
    where: {
      projects_id: projectId,
    },
  })

  return res.status(200).end()
}
