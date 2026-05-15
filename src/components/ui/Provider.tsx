'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { MotionConfig } from 'framer-motion'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </MotionConfig>
  )
}