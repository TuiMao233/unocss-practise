// uno.config.ts
import { defineConfig, presetUno, Preset } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import FileSystemSvgoLoader from 'iconify-svgo-loader'

const icons = presetIcons({
  collections: { custom: FileSystemSvgoLoader('./src/assets') }
}) 

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    icons as Preset,
  ]
})
