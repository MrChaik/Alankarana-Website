import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import Button from '@/components/ui/Button'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { hero } from '@/data/home'
import { fadeIn, fadeUp, stagger } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="pb-20 pt-10 md:pb-24 md:pt-14 lg:pb-32 lg:pt-16">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* The one page-load moment: text stages in, then the image fades in. */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="lg:col-span-5">
          <motion.h1 variants={fadeUp} className="type-display text-burgundy lg:text-[4.25rem]">{hero.heading}</motion.h1>
          <motion.p variants={fadeUp} className="type-body mt-6 max-w-md text-muted">{hero.text}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button to="/designs" size="lg">Explore Designs</Button>
            <WhatsAppButton size="lg" variant="secondary" />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="relative lg:col-span-7">
          <Media
            src={hero.image}
            alt={hero.imageAlt}
            tone="rose"
            label="Hero photo goes here"
            eager
            className="aspect-[4/5] rounded-lg sm:aspect-[4/3] lg:aspect-[5/4]"
          />
          {/* Small detail image, desktop only, gives the hero an editorial offset */}
          <div className="absolute -bottom-10 -left-10 hidden w-[34%] rounded-lg border-[6px] border-cream lg:block">
            <Media src={hero.imageSecondary} alt={hero.imageSecondaryAlt} tone="gold" label="Detail photo" className="aspect-square rounded" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
