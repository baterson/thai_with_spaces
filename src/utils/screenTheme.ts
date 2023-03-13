export const FONT_SIZES = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl'] as const
export const FONT_STYLES = ['not-italic', 'italic'] as const
export const FONT_WEIGHTS = ['font-light', 'font-medium', 'font-bold'] as const
export const THAI_FONTS = ['font-notoSansThai', 'font-notoSerifThai'] as const

export const initialScreenTheme: ScreenTheme = {
  fontSizes: FONT_SIZES[0],
  fontStyles: FONT_STYLES[0],
  fontWeights: FONT_WEIGHTS[0],
  thaiFonts: THAI_FONTS[0],
}

export const getScreenThemeStyles = (screenTheme: ScreenTheme) => {
  return Object.values(screenTheme).join(' ')
}

export type ScreenTheme = {
  fontSizes: typeof FONT_SIZES[number]
  fontStyles: typeof FONT_STYLES[number]
  fontWeights: typeof FONT_WEIGHTS[number]
  thaiFonts: typeof THAI_FONTS[number]
}
export type ScreenThemeKeys = keyof ScreenTheme
export type ScreenThemeValues =
  | typeof FONT_SIZES[number]
  | typeof FONT_STYLES[number]
  | typeof FONT_WEIGHTS[number]
  | typeof THAI_FONTS[number]
