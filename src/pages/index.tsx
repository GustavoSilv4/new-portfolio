import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import AboutmeCircle from '../components/AboutmeCircle'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

import {
  AboutmeContainer,
  ButtonBackonTop,
  ContentContainer,
  FooterContainer,
  Header,
  Navbar,
  ProjectContainer,
  SkillsContainer,
  TopContainer,
} from '../styles/pages/home'

import logo from '../assets/primarylogo.svg'
import arrowUp from '../assets/arrowUp.svg'

export default function Home() {
  const [buttonVisible, setButtonVisible] = useState(false)

  function toogleVisible() {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setButtonVisible(true)
    } else if (scrolled <= 300) {
      setButtonVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toogleVisible)
  }, [])

  return (
    <>
      <ContentContainer>
        <Header>
          <h1>Portfólio</h1>
          <Navbar>
            <ul>
              <li>
                <Link href="#aboutme">Sobre mim</Link>
              </li>
              <li>
                <Link href="#skills">Minhas skills</Link>
              </li>
              <li>
                <Link href="#projects">Projetos</Link>
              </li>
            </ul>
          </Navbar>
        </Header>

        <TopContainer>
          <div>
            <h2>Olá, me chamo </h2>
            <h2>Gustavo Silva &#128516;</h2>
            <span>Desenvolvedor Front-End</span>
            <div>
              <button>Github</button>
              <button>LinkedIn</button>
            </div>
          </div>
          <Image src={logo} width={300} height={250} alt="" />
        </TopContainer>

        <AboutmeContainer id="aboutme">
          <h2>Sobre mim</h2>
          <span>
            Olá, me chamo Gustavo, estudo programação Front-end com foco em ReactJs há mais de 6 meses, atualmente
            continuo meus estudo pela plataforma Ignite da Rocketseat. Eu gosto de resolver desafios com cada ferramenta
            nova que aprendo todos os dias. Nesse tempo aprendi e absorvir muita coisa e espero poder colocar em pratica
            além dos projetos pessoais, mas para o mundo real.
          </span>

          <div>
            <AboutmeCircle type="me" />
            <AboutmeCircle type="email" />
            <AboutmeCircle type="insta" />
          </div>
        </AboutmeContainer>

        <SkillsContainer id="skills">
          <h2>Minhas skills</h2>

          <div>
            <SkillCard title="HTML5" />
            <SkillCard title="CSS3" />
            <SkillCard title="Typescript" />
            <SkillCard title="ReactJS" />
            <SkillCard title="NextJS" />
            <SkillCard title="Styled Components" />
          </div>
        </SkillsContainer>

        <ProjectContainer id="projects">
          <h2>Projetos</h2>

          <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </ProjectContainer>

        <ButtonBackonTop onClick={scrollToTop} style={{ display: buttonVisible ? 'block' : 'none' }}>
          <Image src={arrowUp} alt="" />
        </ButtonBackonTop>
      </ContentContainer>

      <FooterContainer>
        <h2>
          &copy; 2023 - <strong>Gustavo Silva</strong>
        </h2>
      </FooterContainer>
    </>
  )
}
