import { mount } from '@vue/test-utils'
import SunburstChart from '../../src/plots/sunburst'
import data from './sunburst-data.json'

const config = {
  data: {
    name: 'root',
    children: data,
  },
  type: 'treemap',
  seriesField: 'value',
  reflect: 'y',
  colorField: 'brand',
  sunburstStyle: {
    lineWidth: 1,
    stroke: '#fff',
  },
  interactions: [{ type: 'element-active' }],
} as any

describe('SunburstChart', () => {
  test('should render without crashed', () => {
    mount(() => <SunburstChart {...config} />)
  })
})
