import { mount } from '@vue/test-utils'
import BidirectionalBarChart from '../../src/plots/bidirectional-bar'

const config = {
  data: [
    {
      a: 'a',
      b: 1,
      c: 2,
    },
  ],
  xField: 'a',
  yField: ['b', 'c'] as [string, string],
}

describe('BidirectionalBarChart', () => {
  test('should render without crashed', () => {
    mount(() => <BidirectionalBarChart {...config} />)
  })
})
