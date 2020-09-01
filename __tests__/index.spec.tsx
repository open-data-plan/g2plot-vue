import * as components from '../src'

describe('index.tsx', () => {
  it('component exported', () => {
    expect(components).toBeTruthy()
    expect(components).toHaveProperty('LineChart')
  })
})
