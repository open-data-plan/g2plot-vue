import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/pie'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
