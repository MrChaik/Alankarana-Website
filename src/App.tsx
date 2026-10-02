import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import About from '@/pages/About'
import Catalogue from '@/pages/Catalogue'
import DesignDetail from '@/pages/DesignDetail'
import Home from '@/pages/Home'
import OccasionDetail from '@/pages/OccasionDetail'
import Pricing from '@/pages/Pricing'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="occasions/:slug" element={<OccasionDetail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue/:id" element={<DesignDetail />} />
        {/* Add page routes here as each page is built. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
