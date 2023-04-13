// uno.config.ts
import { defineConfig, presetUno, Preset } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify() as Preset,
  ]
})
