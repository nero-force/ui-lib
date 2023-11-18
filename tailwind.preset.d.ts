import type { Config } from 'tailwindcss'

declare module 'nero-dev/tailwind.preset' {
  const config: Config
  export default config
}
