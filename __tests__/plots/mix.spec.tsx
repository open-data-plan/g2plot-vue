import { mount } from '@vue/test-utils'
import MixChart from '../../src/plots/mix'

const config = {
  plots: [],
}

describe('MixChart', () => {
  test('should render without crashed', () => {
    mount(() => <MixChart {...config} />)
  })
})
