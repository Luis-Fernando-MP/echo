'use client'

import { constants } from '@/shared/constants'
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ReactNode } from 'react'

const convex = new ConvexReactClient(constants.CONVEX_URL)

interface IConvexClientProvider {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

export function ConvexClientProvider({ children }: Readonly<IConvexClientProvider>) {
  return (
    <ClerkProvider publishableKey={constants.CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
