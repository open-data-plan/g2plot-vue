import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/histogram'

describe('Chart', () => {
  test('should render without crashed', () => {
    const config = {
      data: [],
      binField: 'value',
      binWidth: 2,
    }
    mount(<Chart {...config} />)
  })
})
