import { mount } from '@vue/test-utils'
import RadialBarChart from '../../src/plots/radial-bar'

const config = {
  data: [],
  xField: 'a',
  yField: 'b',
}

describe('RadialBarChart', () => {
  test('should render without crashed', () => {
    mount(() => <RadialBarChart {...config} />)
  })
})
