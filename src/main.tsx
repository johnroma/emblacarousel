import { createRoot } from 'react-dom/client'
import { EmblaOptionsType } from 'embla-carousel'

import { data } from './const/mock'
import { EmblaCarousel } from './components'

const container = document.getElementById('root')
const root = createRoot(container!)

const OPTIONS: EmblaOptionsType = {}

root.render(<EmblaCarousel slides={data} options={OPTIONS} />)
