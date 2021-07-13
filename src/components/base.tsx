import { defineComponent, Ref } from 'vue-demi'
import { Plot as BasePlot } from '@antv/g2plot'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import { HTMLAttributes } from '@vue/runtime-dom'

interface Options {
  [x: string]: any
}

export interface Plot<C extends Options> extends BasePlot<C> {
  new (container: HTMLElement, config: C): BasePlot<C>
}

type PickedAttrs = 'class' | 'style'

type Data = Record<string, any>[] | Record<string, any>

export interface BaseChartProps<C extends Options>
  extends Pick<HTMLAttributes, PickedAttrs> {
  chart: any
  data: Data
  chartRef?: Ref<BasePlot<C> | null>
}

interface ComputedOptions<C extends Options> {
  attrConfig: BaseChartProps<C>
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
      const {
        chart,
        chartRef,
        data,
        class: className,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style,
        ...config
      } = this.attrConfig
      return config
    },
  },
  mounted() {
    const chartRef = this.$attrs.chartRef as Ref<BasePlot<any> | null>
    const { chart: Chart } = this.attrConfig
    const plot = new Chart(this.$el as HTMLElement, {
      data: this.chartData,
      ...this.chartConfig,
    })
    plot.render()
    if (chartRef) {
      chartRef.value = plot
    }
    this.plot = plot
  },
  beforeUnmount() {
    /* istanbul ignore else */
    if (this.plot) {
      this.plot.destroy()
    }
  },
  watch: {
    chartData(data: Data, oldData: Data) {
      /* istanbul ignore else */
      if (this.plot) {
        if (isEmpty(oldData)) {
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
    chartConfig(config: any, oldConfig: any) {
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
    return <div class={this.attrConfig.class} style={this.attrConfig.style} />
  },
})

export default BaseChart
