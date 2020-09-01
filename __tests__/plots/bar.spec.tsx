import { mount } from '@vue/test-utils'
import BarChart from '../../src/plots/bar'

describe('BarChart', () => {
  test('should render without crashed', () => {
    mount(BarChart, {
      props: {
        data: [],
        xField: 'a',
        yField: 'b',
      },
    })
  })
})
