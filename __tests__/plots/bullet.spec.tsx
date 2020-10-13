import { BulletOptions } from '@antv/g2plot'
import { mount } from '@vue/test-utils'
import BulletChart from '../../src/plots/bullet'

const props: BulletOptions = {
  data: [
    {
      title: '满意度',
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ],
  measureField: 'measures',
  rangeField: 'ranges',
  targetField: 'target',
  xField: 'title',
  style: {
    range: {
      color: '#5B8FF9',
    },
    measure: {
      color: '#5B8FF9',
    },
    target: {
      color: '#5B8FF9',
    },
  },
  xAxis: {
    line: null,
  },
  yAxis: false,
}

describe('BulletChart', () => {
  test('should render without crashed', () => {
    mount(() => <BulletChart {...(props as any)} />)
  })
})
