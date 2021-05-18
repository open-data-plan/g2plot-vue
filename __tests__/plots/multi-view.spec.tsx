import { mount } from '@vue/test-utils'
import MultiViewChart from '../../src/plots/multi-view'

const config = {
  plots: [],
}

describe('MultiViewChart', () => {
  test('should render without crashed', () => {
    mount(() => <MultiViewChart {...config} />)
  })
})
