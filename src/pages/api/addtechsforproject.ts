import type { NextApiRequest, NextApiResponse } from 'next'
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
  const { projectId, technologyList } = req.body

  const authorizationCode = req.headers.authorization

  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  if (authorizationCode !== process.env.AUTHORIZATION_REQ) {
    return res.status(401).json({ message: 'Código autorização incorreto!' })
  }

  //   const projects = await prisma.techs.createMany({  // Não consigo utilizar este comando poís a database que estou utilizando SQLite o prisma não me permite, mas quando for alterado para MYSql será possível
  //     data: {

  //     },
  //   })

  await Promise.all(
    technologyList.map((tech) => {
      return prisma.techs.create({
        data: {
          name: tech,
          projects_id: projectId,
        },
      })
    })
  )

  return res.status(201).end()
}
