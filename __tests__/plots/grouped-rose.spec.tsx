import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/grouped-rose'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
