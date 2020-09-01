import { mount } from '@vue/test-utils'
import BulletChart from '../../src/plots/bullet'

describe('BulletChart', () => {
  test('should render without crashed', () => {
    mount(BulletChart, {
      props: {},
    })
  })
})
