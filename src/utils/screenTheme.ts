export const FONT_SIZES = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl'] as const
export const FONT_STYLES = ['not-italic', 'italic'] as const
export const FONT_WEIGHTS = ['font-light', 'font-medium', 'font-bold'] as const
export const THAI_FONTS = ['font-notoSansThai', 'font-notoSerifThai'] as const

export const initialScreenTheme: ScreenTheme = {
  fontSize: FONT_SIZES[1],
  fontStyle: FONT_STYLES[0],
  fontWeight: FONT_WEIGHTS[0],
  thaiFont: THAI_FONTS[0],
}

export const getScreenThemeStyles = (screenTheme: ScreenTheme) => {
  return Object.values(screenTheme).join(' ')
}

export type ScreenTheme = {
  fontSize: typeof FONT_SIZES[number]
  fontStyle: typeof FONT_STYLES[number]
  fontWeight: typeof FONT_WEIGHTS[number]
  thaiFont: typeof THAI_FONTS[number]
}
export type ScreenThemeKeys = keyof ScreenTheme
export type ScreenThemeValues =
  | typeof FONT_SIZES[number]
  | typeof FONT_STYLES[number]
  | typeof FONT_WEIGHTS[number]
  | typeof THAI_FONTS[number]
