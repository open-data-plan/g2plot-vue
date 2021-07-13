import { mount } from '@vue/test-utils'
import CirclePackingChart, {
  CirclePackingChartProps,
} from '../../src/plots/circle-packing'
import data from './circle-packing-data.json'

const config: CirclePackingChartProps = {
  autoFit: true,
  data: data as Record<string, any>,
  label: false,
  legend: false,
  hierarchyConfig: {
    sort: (a, b) => b.depth - a.depth,
  },
}

describe('CirclePackingChart', () => {
  test('should render without crashed', () => {
    mount(() => <CirclePackingChart {...(config as any)} />)
  })
})
