import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/dual-line'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
