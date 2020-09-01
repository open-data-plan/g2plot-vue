import { mount } from '@vue/test-utils'
import AreaChart from '../../src/plots/area'

describe('AreaChart', () => {
  test('should render without crashed', () => {
    mount(AreaChart, {
      props: {
        data: [],
        xField: 'a',
        yField: 'b',
      },
    })
  })
})
