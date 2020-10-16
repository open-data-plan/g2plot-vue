import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/waterfall'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(() => <Chart data={[]} xField="x" yField="y" />)
  })
})
