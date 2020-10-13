import { mount } from '@vue/test-utils'
import LiquidChart from '../../src/plots/liquid'

describe('LiquidChart', () => {
  test('should render without crashed', () => {
    mount(LiquidChart, {
      props: {},
    })
  })
})
