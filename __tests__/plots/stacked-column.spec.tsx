import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/stacked-column'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
