import Image from 'next/image'

import smile from '../../../assets/smile.svg'
import mail from '../../../assets/mail.svg'
import instagram from '../../../assets/instagram.svg'

import { Container } from './styles'

interface AboutMeProps {
  type: 'me' | 'email' | 'insta'
}

export default function AboutmeCircle({ type }: AboutMeProps) {
  return (
    <Container>
      <div>
        {type === 'me' && <Image src={smile} alt="" />}
        {type === 'email' && <Image src={mail} alt="" />}
        {type === 'insta' && <Image src={instagram} alt="" />}
      </div>

      {type === 'me' && (
        <div>
          <h3>Meu nome</h3>
          <span>Gustavo Silva</span>
        </div>
      )}

      {type === 'email' && (
        <div>
          <h3>E-mail</h3>
          <span>contato@gustavosil4.com.br</span>
        </div>
      )}

      {type === 'insta' && (
        <div>
          <h3>Instagram</h3>
          <span>gustavo_silva48</span>
        </div>
      )}
    </Container>
  )
}
