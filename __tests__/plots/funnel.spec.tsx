import { mount } from '@vue/test-utils'
import FunnelChart from '../../src/plots/funnel'

describe('FunnelChart', () => {
  test('should render without crashed', () => {
    mount(() => <FunnelChart data={[{ x: 'a', y: 1 }]} xField="x" yField="y" />)
  })
})
