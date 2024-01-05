import { mount } from '@vue/test-utils'
import StockChart from '../../src/plots/stock'

const data = [
  { x: 'Oceania', low: 1, q1: 9, median: 16, q3: 22, high: 24 },
  { x: 'East Europe', low: 1, q1: 5, median: 8, q3: 12, high: 16 },
  { x: 'Australia', low: 1, q1: 8, median: 12, q3: 19, high: 26 },
  { x: 'South America', low: 2, q1: 8, median: 12, q3: 21, high: 28 },
  { x: 'North Africa', low: 1, q1: 8, median: 14, q3: 18, high: 24 },
  { x: 'North America', low: 3, q1: 10, median: 17, q3: 28, high: 30 },
  { x: 'West Europe', low: 1, q1: 7, median: 10, q3: 17, high: 22 },
  { x: 'West Africa', low: 1, q1: 6, median: 8, q3: 13, high: 16 },
]

const config = {
  width: 400,
  height: 500,
  data,
  xField: 'x',
  yField: ['low', 'q1', 'median', 'q3', 'high'],
  boxStyle: {
    stroke: '#545454',
    fill: '#1890FF',
    fillOpacity: 0.3,
  },
  animation: false,
} as any

describe('StockChart', () => {
  test('should render without crashed', () => {
    mount(() => <StockChart {...config} />)
  })
})
