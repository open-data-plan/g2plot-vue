import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/density-heatmap'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
