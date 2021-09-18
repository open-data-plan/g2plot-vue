import { mount } from '@vue/test-utils'
import VennChart from '../../src/plots/venn'

const config = {
  data: [
    { sets: ['A'], size: 12, label: 'A' },
    { sets: ['B'], size: 12, label: 'B' },
    { sets: ['C'], size: 12, label: 'C' },
    { sets: ['A', 'B'], size: 2, label: 'A&B' },
    { sets: ['A', 'C'], size: 2, label: 'A&C' },
    { sets: ['B', 'C'], size: 2, label: 'B&C' },
    { sets: ['A', 'B', 'C'], size: 1 },
  ],
  setsField: 'sets',
  sizeField: 'size',
  pointStyle: { fillOpacity: 0.85 },
}

describe('VennChart', () => {
  test('should render without crashed', () => {
    mount(() => <VennChart {...config} />)
  })
})
