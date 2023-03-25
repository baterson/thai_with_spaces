export const isTopScroll = (el: HTMLElement) => el.scrollTop === 0
export const isBottomScroll = (el: HTMLElement) =>
  Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1
