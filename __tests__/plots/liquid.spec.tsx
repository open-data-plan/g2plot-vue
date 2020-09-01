import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/liquid'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {
        title: {
          visible: true,
          text: '水波图',
        },
        min: 0,
        max: 10000,
        value: 5639,
      },
    })
  })
})
