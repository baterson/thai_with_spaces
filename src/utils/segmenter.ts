const segmenter = new Intl.Segmenter('th', { granularity: 'word' })

export const segmentText = (text: string): string => {
  const it = segmenter.segment(text)[Symbol.iterator]()
  return [...it].map((value) => value.segment).join('  ')
}
