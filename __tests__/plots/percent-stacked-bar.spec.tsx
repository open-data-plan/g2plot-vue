import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/percent-stacked-bar'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
