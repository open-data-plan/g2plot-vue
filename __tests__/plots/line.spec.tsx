import { LineOptions, Plot } from '@antv/g2plot'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import LineChart from '../../src/plots/line'

describe('LineChart', () => {
  test('render without crashed', () => {
    const chartRef = ref(null)
    const onReady = (plot: Plot<LineOptions>) => {
      expect(plot).toBeDefined()
    }
    mount(<LineChart data={[]} chartRef={chartRef} onReady={onReady} />)

    expect(chartRef.value).toBeDefined()
  })

  test('test update config and data', async () => {
    const handleLineClick1 = () => {
      console.log(1)
    }
    const handleLineClick2 = () => {
      console.log(2)
    }
    const wrapper = mount(<LineChart data={[]} />)

    await wrapper.setProps({
      autoFit: true,
      data: [],
      xField: 'x',
      yField: 'y',
    })
    await wrapper.setProps({
      autoFit: true,
      data: null,
      xField: 'x',
      yField: 'y',
    })

    await wrapper.setProps({
      autoFit: true,
      data: [{ x: 1 }],
      xField: 'x',
      yField: 'y',
    })

    await wrapper.setProps({
      autoFit: true,
      data: [{ x: 2 }],
      xField: 'x',
      yField: 'y',
    })

    await wrapper.setProps({
      autoFit: true,
      xField: 'x',
      yField: 'y',
    })

    await wrapper.setProps({
      data: [],
      autoFit: true,
      xAxis: {
        nice: true,
      },
      xField: 'x',
      yField: 'y',
      events: {
        onLineClick: handleLineClick1,
      },
    })

    await wrapper.setProps({
      data: [],
      autoFit: true,
      xAxis: {
        nice: true,
      },
      xField: 'x',
      yField: 'y',
      events: {
        onLineClick: handleLineClick2,
      },
    })

    await wrapper.setProps({
      data: [],
      autoFit: true,
      xAxis: {
        nice: true,
      },
      xField: 'x',
      yField: 'y',
      events: {
        onLineClick: handleLineClick2,
      },
    })

    wrapper.unmount()
  })
})
