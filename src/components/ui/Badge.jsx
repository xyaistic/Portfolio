import React from 'react'
import BlurText from './BlurText'

export default function Badge({children}) {
  return (
   <>

    <BlurText

      text={children}
      delay={200}
      animateBy="words"
      direction="top"
      onAnimationComplete={() => { }}
      className=" w-fit bg-[#b5f23d] text-black text-xs font-semibold px-3 py-1 rounded-full"
    />
  </>
  )
}
