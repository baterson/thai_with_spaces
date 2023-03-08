export const FONT_SIZES = ['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'] as const
export const FONT_STYLES = ['font-bold', 'font-light', 'italic'] as const

export const initialScreenTheme: ScreenTheme = {
  fontSize: FONT_SIZES[0],
  fontStyle: '',
}

export const getScreenThemeStyles = (screenTheme: ScreenTheme) => {
  return Object.values(screenTheme).join(' ')
}

export type ScreenTheme = {
  fontSize: typeof FONT_SIZES[number]
  fontStyle: typeof FONT_STYLES[number] | ''
}
export type ScreenThemeKeys = keyof ScreenTheme
export type ScreenThemeValues = typeof FONT_SIZES[number] | typeof FONT_STYLES[number] | ''
