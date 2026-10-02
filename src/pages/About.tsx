import { useEffect } from 'react'
import AboutIntro from '@/components/home/AboutIntro'
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import { about } from '@/data/about'

const DEFAULT_TITLE = 'Alankarana | Celebration decor in Hyderabad'
const DEFAULT_DESCRIPTION = 'Alankarana — celebration decor in Hyderabad.'

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const previousTitle = document.title
    const previousDescription = meta?.getAttribute('content') ?? DEFAULT_DESCRIPTION
    document.title = title
    meta?.setAttribute('content', description)
    return () => {
      document.title = previousTitle
      meta?.setAttribute('content', previousDescription)
    }
  }, [title, description])
}

export default function About() {
  usePageMeta(`${about.label} | Alankarana`, about.text)

  return (
    <>
      <Container className="pt-8 md:pt-10">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
      </Container>
      <AboutIntro />
    </>
  )
}
