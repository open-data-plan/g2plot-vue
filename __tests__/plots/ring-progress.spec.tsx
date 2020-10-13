import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/ring-progress'

const config = {}

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(() => <Chart {...config} />)
  })
})
