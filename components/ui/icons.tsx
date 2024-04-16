'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
      <path d="M244,132a52.10391,52.10391,0,0,0-31.99951-48.01416L212,72a43.99041,43.99041,0,0,0-84-18.2959A43.99041,43.99041,0,0,0,44,72l-.00049,11.98584A52.00675,52.00675,0,0,0,44,179.99463V184a43.99041,43.99041,0,0,0,84,18.2959A43.99041,43.99041,0,0,0,212,184v-4.00537A52.07716,52.07716,0,0,0,244,132ZM88,220a36.04061,36.04061,0,0,1-36-36v-1.41309A51.91966,51.91966,0,0,0,64,184h8a4,4,0,0,0,0-8H64A44.00806,44.00806,0,0,1,49.33252,90.50293a4,4,0,0,0,2.6665-3.77148L52,72a36,36,0,0,1,72,0v86.74841A43.96994,43.96994,0,0,0,88,140a4,4,0,0,0,0,8,36,36,0,0,1,0,72Zm104-44h-8a4,4,0,0,0,0,8h8a51.91966,51.91966,0,0,0,12-1.41309V184a36,36,0,1,1-36-36,4,4,0,0,0,0-8,43.96994,43.96994,0,0,0-36,18.74841V72a36,36,0,0,1,72,0l.001,14.73145a4,4,0,0,0,2.6665,3.77148A44.00806,44.00806,0,0,1,192,176ZM92,92a32.036,32.036,0,0,1-32,32,4,4,0,0,1,0-8A24.02718,24.02718,0,0,0,84,92V84a4,4,0,0,1,8,0Zm108,28a4.0002,4.0002,0,0,1-4,4,32.036,32.036,0,0,1-32-32V84a4,4,0,0,1,8,0v8a24.02718,24.02718,0,0,0,24,24A4.0002,4.0002,0,0,1,200,120Z" />
    </svg>
  )
}

export { IconLogo }
