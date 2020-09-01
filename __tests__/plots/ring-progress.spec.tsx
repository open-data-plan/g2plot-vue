import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/ring-progress'

const config = {
  width: 50,
  height: 50,
  percent: 50,
  color: (v) => {
    if (v < 0.3) {
      return ['#30BF78', '#E8EDF3']
    } else if (v >= 0.3 && v < 0.7) {
      return ['#FAAD14', '#E8EDF3']
    }
    return ['#F4664A', '#E8EDF3']
  },
}

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(() => <Chart {...config} />)
  })
})
