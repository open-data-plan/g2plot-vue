import { mount } from '@vue/test-utils'
import FacetChart, { FacetChartProps } from '../../src/plots/facet'

const config: FacetChartProps = {
  padding: [0, 10, 10],
  appendPadding: [0, 0, 30, 20],
  type: 'rect',
  fields: ['cut'],
  cols: 3, // 超过3个换行
  data: [],
  axes: {},
  meta: {
    carat: {
      sync: true,
    },
    price: {
      sync: true,
    },
    clarity: {
      sync: true,
    },
  },
  eachView: (view, f) => {
    return {
      type: 'scatter',
      options: {
        data: f.data,
        xField: 'carat',
        yField: 'price',
        colorField: 'clarity',
        shape: 'circle',
        pointStyle: { fillOpacity: 0.3, stroke: null },
      },
    }
  },
}

describe('FacetChart', () => {
  test('should render without crashed', () => {
    mount(() => <FacetChart {...config} />)
  })
})
