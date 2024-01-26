import { createRoot } from 'react-dom/client'
import { EmblaOptionsType } from 'embla-carousel'
import { EmblaCarousel } from './components/Emblacarousel'

import { data } from './const/mock'

const container = document.getElementById('root')
const root = createRoot(container!)

const OPTIONS: EmblaOptionsType = {}

root.render(<EmblaCarousel slides={data} options={OPTIONS} />)
