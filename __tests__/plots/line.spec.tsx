import { mount } from '@vue/test-utils'
import LineChart from '../../src/plots/line'

describe('LineChart', () => {
  test('render without crashed', () => {
    mount(LineChart, {
      props: {
        data: [],
      },
    })
  })

  test('test update config and data', async () => {
    const handleLineClick1 = () => {
      console.log(1)
    }
    const handleLineClick2 = () => {
      console.log(2)
    }
    const wrapper = mount(LineChart, {
      props: {
        data: null,
      },
    })

    await wrapper.setProps({
      forceFit: true,
      data: [],
    })
    await wrapper.setProps({
      forceFit: true,
      data: null,
    })

    await wrapper.setProps({
      forceFit: true,
      data: [{ x: 1 }],
    })

    await wrapper.setProps({
      forceFit: true,
      data: [{ x: 2 }],
    })

    await wrapper.setProps({
      forceFit: true,
    })

    await wrapper.setProps({
      data: [],
      forceFit: true,
      xAxis: {
        visible: true,
      },
      events: {
        onLineClick: handleLineClick1,
      },
    })

    await wrapper.setProps({
      data: [],
      forceFit: true,
      xAxis: {
        visible: true,
      },
      events: {
        onLineClick: handleLineClick2,
      },
    })

    await wrapper.setProps({
      data: [],
      forceFit: true,
      xAxis: {
        visible: true,
      },
      events: {
        onLineClick: handleLineClick2,
      },
    })

    wrapper.unmount()
  })
})
