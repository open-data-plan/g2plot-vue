import { mount } from '@vue/test-utils'
import BubbleChart from '../../src/plots/bubble'

describe('BubbleChart', () => {
  test('should render without crashed', () => {
    mount(BubbleChart, {
      props: {
        data: [],
        xField: 'a',
        yField: 'b',
      },
    })
  })
})
