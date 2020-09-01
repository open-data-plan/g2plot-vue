import { defineComponent, HTMLAttributes, Ref } from 'vue'
import { Base as BasePlot, PlotConfig, ViewLayer } from '@antv/g2plot'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

interface Plot<C extends PlotConfig> {
  new (container: HTMLElement, config: C): BasePlot<C, ViewLayer<C>>
}

type PickedAttrs = 'class' | 'style'

export interface BaseChartProps<C extends PlotConfig>
  extends Pick<HTMLAttributes, PickedAttrs> {
  chart: Plot<C>
  chartRef?: Ref<BasePlot<C, ViewLayer<C>> | null>
}

interface ChartOptions {
  data: any[]
  config: any
}

export interface BaseChartRawBindings<C extends PlotConfig> {
  plot: BasePlot<C, ViewLayer<C>>
  config: C
  data: any[]
  getChartConfig: () => ChartOptions
}

export default defineComponent<BaseChartProps<any>, BaseChartRawBindings<any>>({
  name: 'BaseChart',
  mounted() {
    const { chart: Chart } = this.$attrs as Record<string, any>
    const { data, config } = this.getChartConfig()
    this.config = cloneDeep(config)
    const normalizedData = data || []
    this.data = normalizedData
    const chart = new Chart(this.$el, {
      data: normalizedData,
      ...config,
    })
    this.plot = chart
    this.plot.render()
  },
  beforeUpdate() {
    const { data, config } = this.getChartConfig()
    const normalizedData = data || []
    if (this.plot) {
      if (!isEqual(config, this.config) || !this.data.length) {
        this.config = cloneDeep(config)
        this.plot.updateConfig({
          data,
          ...config,
        })
        this.plot.render()
      } else {
        this.plot.changeData(normalizedData)
      }
    }
  },
  beforeUnmount() {
    if (this.plot) {
      this.plot.destroy()
    }
  },
  methods: {
    getChartConfig(): ChartOptions {
      const { chart: Chart, chartRef, ...restProps } = this.$attrs as Record<
        string,
        any
      >
      const { data, ...config } = restProps
      return {
        data,
        config,
      }
    },
  },
  render() {
    return <div />
  },
})
