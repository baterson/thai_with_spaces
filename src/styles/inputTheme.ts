export const FONT_SIZES = [
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
] as const
export const FONT_WEIGHTS = [
  'font-thin',
  'font-extralight',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
  'font-extrabold',
  'font-black',
] as const
export const THAI_FONTS = [
  'font-kanit',
  'font-sarabun',
  'font-chakraPetch',
  'font-taviraj',
  'font-niramit',
  'font-anthiti',
] as const

export const initialInputTheme: InputTheme = {
  fontSize: FONT_SIZES[1],
  fontWeight: FONT_WEIGHTS[3],
  font: THAI_FONTS[1],
}

export const getInputThemeStyles = (inputTheme: InputTheme) => {
  return Object.values(inputTheme).join(' ')
}

export type InputTheme = {
  fontSize: typeof FONT_SIZES[number]
  fontWeight: typeof FONT_WEIGHTS[number]
  font: typeof THAI_FONTS[number]
}
export type InputThemeValues =
  | typeof FONT_SIZES[number]
  | typeof FONT_WEIGHTS[number]
  | typeof THAI_FONTS[number]
