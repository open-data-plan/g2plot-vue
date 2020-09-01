import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/funnel'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
