export enum DEV_MODE {
  PROD = 'production',
  DEV = 'development'
}

export const constants = {
  DEV_ENV: process.env.NODE_ENV ?? DEV_MODE.DEV,
  CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL!,
  CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!
}
