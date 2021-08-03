// eslint-disable-next-line import/no-webpack-loader-syntax
import fontVariables from '!!sass-variable-loader!../assets/styles/font.scss'

export const getTextWidth = (
  text: string,
  font: string = `bold 16px ${fontVariables.font_family}`
): number => { 
  const canvas = document.createElement("canvas")
  const context = canvas.getContext('2d')
  if (context) {
    context.font = font
    const metrics = context.measureText(text)
    return metrics.width
  } else {
    // if canvas is not supported,
    // return the text width as a number of characters
    return text.length
  }
}
