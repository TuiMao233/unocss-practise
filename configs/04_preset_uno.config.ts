
import { Preset } from 'unocss'

export function presetVarColors(colors: Record<string, string>): Preset {
  const entries = Object.entries(colors)
  const vars = entries.map(([name, value]) => `--${name}-color: ${value};`)
  const themeColors = entries.map(([name, value]) => [name, `var(--${name}-color)`])
  
  function getCSS(){
    return `:root { ${vars} }`
  }

  return {
    name: 'presetVarColors',
    theme: {
      colors: Object.fromEntries(themeColors)
    },
    preflights: [
      { getCSS }
    ]
  }
}