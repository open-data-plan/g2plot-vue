import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/gauge'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
