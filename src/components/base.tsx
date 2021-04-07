import { defineComponent, Ref } from 'vue-demi'
import { Plot as BasePlot } from '@antv/g2plot'
import isEqual from 'lodash/isEqual'
import { HTMLAttributes } from '@vue/runtime-dom'

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
  data: any[]
  chartRef?: Ref<BasePlot<C> | null>
}

interface ComputedOptions<C extends Options> {
  attrConfig: BaseChartRawBindings<C> & BaseChartProps<C>
  chartData: any[]
  chartConfig: C
}

export interface BaseChartRawBindings<C extends Options> {
  plot: BasePlot<C>
}

const BaseChart = defineComponent<
  BaseChartProps<any>,
  BaseChartRawBindings<any>,
  ComputedOptions<any>
>({
  inheritAttrs: false,
  name: 'BaseChart',
  computed: {
    attrConfig() {
      return this.$attrs
    },
    chartData() {
      const { data } = this.attrConfig
      return data || []
    },
    chartConfig() {
      const { chart, chartRef, data, ...config } = this.attrConfig
      return config
    },
  },
  mounted() {
    const { chart: Chart, chartRef } = this.attrConfig
    this.plot = new Chart(this.$el as HTMLElement, {
      data: this.chartData,
      ...this.chartConfig,
    })
    this.plot.render()
    if (chartRef) {
      chartRef.value = this.plot
    }
  },
  beforeUnmount() {
    /* istanbul ignore else */
    if (this.plot) {
      this.plot.destroy()
    }
  },
  watch: {
    chartData(data, oldData) {
      /* istanbul ignore else */
      if (this.plot) {
        if (!oldData.length) {
          this.plot.update({
            data: data,
            ...this.chartConfig,
          })
          this.plot.render()
        } else {
          this.plot.changeData(data)
        }
      }
    },
    chartConfig(config, oldConfig) {
      /* istanbul ignore else */
      if (this.plot) {
        if (!isEqual(config, oldConfig)) {
          this.plot.update({
            data: this.chartData,
            ...config,
          })
        }
      }
    },
  },
  render() {
    return <div />
  },
})

export default BaseChart
