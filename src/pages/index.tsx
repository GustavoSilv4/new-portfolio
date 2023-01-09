import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { api } from '../lib/axios'

import Link from 'next/link'
import Image from 'next/image'

import AboutmeCircle from '../components/home/AboutmeCircle'
import ProjectCard from '../components/home/ProjectCard'
import SkillCard from '../components/home/SkillCard'
import Dropdown from '../components/home/Dropdown'

import * as S from '../styles/pages/home'

import logo from '../assets/primarylogo.svg'
import arrowUp from '../assets/arrowUp.svg'
import menu from '../assets/menuhamburguer.svg'
import { getProjects } from '../@types/getProjects'

interface HomeProps extends getProjects {}

export default function Home({ projects }: HomeProps) {
  const [buttonVisible, setButtonVisible] = useState(false)
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false)

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
      <NextSeo
        title="Portfólio - Gustavo Silva"
        description="Portifólio para demonstrar meu progresso, projetos e habilidades como desenvolvedor front-end."
      />

      <S.ContentContainer>
        <S.Header>
          <h1>Portfólio</h1>

          <S.Navbar>
            <button onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}>
              <Image src={menu} alt="" />
            </button>
            {isVisibleDropdown && <Dropdown />}

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
          </S.Navbar>
        </S.Header>

        <S.TopContainer>
          <div>
            <h2>
              Olá, me chamo <strong>Gustavo Silva &#128516;</strong>
            </h2>
            <span>Desenvolvedor Front-End</span>
            <div>
              <button>
                <a
                  href="https://github.com/GustavoSilv4"
                  target="_blank"
                  rel="noreferrer">
                  Github
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/gustavo-silva-3b7a15234/"
                  target="_blank"
                  rel="noreferrer">
                  Linkedin
                </a>
              </button>
            </div>
          </div>
          <Image src={logo} width={300} height={250} alt="" priority />
        </S.TopContainer>

        <S.AboutmeContainer id="aboutme">
          <h2>Sobre mim</h2>
          <span>
            Olá, me chamo Gustavo, estudo programação Front-end com foco em
            ReactJs há mais de 6 meses, atualmente continuo meus estudo pela
            plataforma Ignite da Rocketseat. Eu gosto de resolver desafios com
            cada ferramenta nova que aprendo todos os dias. Nesse tempo aprendi
            e absorvir muita coisa e espero poder colocar em pratica além dos
            projetos pessoais, mas para o mundo real.
          </span>

          <div>
            <AboutmeCircle type="me" />
            <AboutmeCircle type="email" />
            <AboutmeCircle type="insta" />
          </div>
        </S.AboutmeContainer>

        <S.SkillsContainer id="skills">
          <h2>Minhas skills</h2>

          <div>
            <SkillCard title="HTML5" />
            <SkillCard title="CSS3" />
            <SkillCard title="Typescript" />
            <SkillCard title="ReactJS" />
            <SkillCard title="NextJS" />
            <SkillCard title="Styled Components" />
          </div>
        </S.SkillsContainer>

        <S.ProjectContainer id="projects">
          <h2>Projetos</h2>

          <div>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                imageUrl={project.image_url}
                projectName={project.project_name}
                description={project.description}
                previewLink={project.preview_link}
                repository={project.repository}
                techs={project.Techs}
              />
            ))}
          </div>
        </S.ProjectContainer>

        <S.ButtonBackonTop
          onClick={scrollToTop}
          style={{ display: buttonVisible ? 'block' : 'none' }}>
          <Image src={arrowUp} alt="" />
        </S.ButtonBackonTop>
      </S.ContentContainer>

      <S.FooterContainer>
        <h2>
          &copy; 2023 - Feito por <strong>Gustavo Silva</strong>
        </h2>
      </S.FooterContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/getprojects')

  const projects = response.data.projects

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24 * 5, // 5 days
  }
}
