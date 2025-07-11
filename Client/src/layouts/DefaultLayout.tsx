import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from '@/components/Footer'

const DefaultLayout = () => {
  return (
    <main className='font-display'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default DefaultLayout