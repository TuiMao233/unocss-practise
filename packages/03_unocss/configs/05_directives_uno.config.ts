// uno.config.ts
import { defineConfig, presetUno, Preset } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    transformerDirectives() as Preset,
  ]
})
