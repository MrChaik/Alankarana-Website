import { useEffect } from 'react'
import PricingGuide from '@/components/home/PricingGuide'
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import { pricingCopy } from '@/data/pricing'

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

export default function Pricing() {
  usePageMeta(`${pricingCopy.heading} | Alankarana`, pricingCopy.text)

  return (
    <>
      <Container className="pt-8 md:pt-10">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Pricing Guide' }]} />
      </Container>
      <PricingGuide />
    </>
  )
}
