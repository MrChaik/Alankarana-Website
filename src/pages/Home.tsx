import Hero from '@/components/home/Hero'
import OccasionsSection from '@/components/home/OccasionsSection'
import CampaignSection from '@/components/home/CampaignSection'
import FeaturedDesigns from '@/components/home/FeaturedDesigns'
import OurWork from '@/components/home/OurWork'
import Testimonials from '@/components/home/Testimonials'
import BrowseBy from '@/components/home/BrowseBy'
import HowItWorks from '@/components/home/HowItWorks'
import WhyAlankarana from '@/components/home/WhyAlankarana'
import FinalCta from '@/components/home/FinalCta'

// Header and Footer come from <Layout />. Section order follows the homepage brief.
export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <OccasionsSection />
      <CampaignSection />
      <FeaturedDesigns />
      <OurWork />
      <Testimonials />
      <BrowseBy />
      <HowItWorks />
      <WhyAlankarana />
      <FinalCta />
    </div>
  )
}
