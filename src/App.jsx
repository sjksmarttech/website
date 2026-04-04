import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Professional from './pages/Professional.jsx'
import Store from './pages/Store.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
