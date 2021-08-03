import 'jest-canvas-mock'

import { getTextWidth } from 'helpers/ui'

describe('getTextWIdth', () => {
  it('with canvas', () => {
    expect(getTextWidth('abcd iiiii', 'bold 16px arial')).toBeGreaterThan(0)
  })
  it('without canvas', () => {

    const mockCanvas = {
      getContext: () => null
    }
    jest.spyOn(document, "createElement").mockReturnValue(mockCanvas);
    const testText = 'abcde'
    expect(getTextWidth(testText)).toBe(testText.length)

    jest.clearAllMocks()
  })
})
