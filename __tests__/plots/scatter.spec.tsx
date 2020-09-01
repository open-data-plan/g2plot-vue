import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/scatter'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {
        data: [],
        xField: 'Revenue (Millions)',
        yField: 'Rating',
        xAxis: {
          visible: true,
          min: -5,
        },
      },
    })
  })
})
