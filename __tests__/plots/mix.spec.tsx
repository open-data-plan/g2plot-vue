import { mount } from '@vue/test-utils'
import MixChart from '../../src/plots/mix'

const config = {
  data: [],
  xField: 'a',
  yField: 'b',
}

describe('MixChart', () => {
  test('should render without crashed', () => {
    mount(() => <MixChart {...config} />)
  })
})
