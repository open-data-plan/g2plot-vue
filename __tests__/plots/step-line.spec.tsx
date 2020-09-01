import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/step-line'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})
