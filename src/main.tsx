import { createRoot } from 'react-dom/client'
import { Emblacarousel } from './components/Emblacarousel'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<Emblacarousel />)