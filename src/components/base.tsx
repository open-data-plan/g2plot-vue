import { defineComponent, HTMLAttributes, Ref } from 'vue'
import { Plot as BasePlot } from '@antv/g2plot'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

interface Options {
  [x: string]: any
}

export interface Plot<C extends Options> extends BasePlot<C> {
  new (container: HTMLElement, config: C): BasePlot<C>
}

type PickedAttrs = 'class' | 'style'

export interface BaseChartProps<C extends Options>
  extends Pick<HTMLAttributes, PickedAttrs> {
  chart: any
  chartRef?: Ref<BasePlot<C> | null>
}

interface ChartOptions {
  data: any[]
  config: any
}

export interface BaseChartRawBindings<C extends Options> {
  plot: BasePlot<C>
  config: C
  data: any[]
  getChartConfig: () => ChartOptions
}

const BaseChart = defineComponent<
  BaseChartProps<any>,
  BaseChartRawBindings<any>
>({
  inheritAttrs: false,
  name: 'BaseChart',
  mounted() {
    const { chart: Chart } = this.$attrs as {
      chart: Plot<Options>
    }
    const { data, config } = this.getChartConfig()
    this.config = cloneDeep(config)
    const normalizedData = data || []
    this.data = normalizedData
    this.plot = new Chart(this.$el, {
      data: normalizedData,
      ...config,
    })
    this.plot.render()
  },
  beforeUpdate() {
    const { data, config } = this.getChartConfig()
    const normalizedData = data || []
    /* istanbul ignore else */
    if (this.plot) {
      if (!isEqual(config, this.config) || !this.data.length) {
        this.config = cloneDeep(config)
        this.plot.update({
          data: normalizedData,
          ...config,
        })
        this.plot.render()
      } else {
        this.plot.changeData(normalizedData)
      }
      this.data = normalizedData
    }
  },
  beforeUnmount() {
    /* istanbul ignore else */
    if (this.plot) {
      this.plot.destroy()
    }
  },
  methods: {
    getChartConfig(): ChartOptions {
      const { chartRef, ...restProps } = this.$attrs as Record<string, any>
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

export default BaseChart
