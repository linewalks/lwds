export const rgba2hex = (color: string): string => {
  const rgbaRegex = /^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i
  const colorRemoveSpace = color.replace(/\s/g, '')

  if (!colorRemoveSpace.match(rgbaRegex)) {
    return color
  }

  const rgb = color.replace(/\s/g, '').match(rgbaRegex)
  const alpha = ((rgb && rgb[4]) || '').trim()
  const hex = rgb
    ? (Number(rgb[1]) | (1 << 8)).toString(16).slice(1) +
      (Number(rgb[2]) | (1 << 8)).toString(16).slice(1) +
      (Number(rgb[3]) | (1 << 8)).toString(16).slice(1)
    : color

  let alp = alpha === '' ? 1 : alpha
  alp = ((Number(alp) * 255) | (1 << 8)).toString(16).slice(1)

  return '#' + hex + alp
}

export const hexBrightness = (color: string): number => {
  const hasOpacity = color.length == 9
  const splitStr = color.substr(1).match(/(\S{2})/g)

  const r = parseInt(splitStr[0], 16)
  const g = parseInt(splitStr[1], 16)
  const b = parseInt(splitStr[2], 16)
  const a = hasOpacity ? parseInt(splitStr[3], 16) : 1

  // brightness 계산 참고 (http://alienryderflex.com/hsp.html)
  return Math.sqrt(((r * r * 299 + g * g * 587 + b * b * 114) * a) / 1000)
}
