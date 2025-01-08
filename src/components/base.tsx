import { Plot as BasePlot } from '@antv/g2plot'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import { computed, defineComponent, HTMLAttributes, onBeforeUnmount, onMounted, ref, Ref, useAttrs, watch } from 'vue'

interface Options {
  [x: string]: any
}

export interface Plot<C extends Options> extends BasePlot<C> {
  new (container: HTMLElement, config: C): BasePlot<C>
}

type PickedAttrs = 'class' | 'style'

type Data = Record<string, any>[] | Record<string, any>

export interface BaseChartProps<C extends Options> extends Pick<HTMLAttributes, PickedAttrs> {
  chart: any
  data: Data
  chartRef?: Ref<BasePlot<C> | null>
  onReady?: (plot: BasePlot<C>) => void
}

export interface BaseChartRawBindings<C extends Options> {
  plot: BasePlot<C>
}

const BaseChart = defineComponent<BaseChartProps<any>>({
  inheritAttrs: false,
  name: 'BaseChart',
  setup(props, ctx) {
    const plotRef = ref<BasePlot<any> | null>(null)
    const containerRef = ref<HTMLElement | null>(null)
    const attrs = useAttrs()
    const attrConfig = computed(() => ({
      ...attrs,
      ...props,
    }))
    const chartData = computed(() => {
      return attrConfig.value.data || []
    })

    const chartConfig = computed(() => {
      const {
        chart,
        chartRef,
        data,
        class: className,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style,
        onReady,
        ...config
      } = attrConfig.value
      return config
    })

    onMounted(() => {
      /* istanbul ignore else */
      if (containerRef.value) {
        const { chart: Chart, onReady, chartRef } = attrConfig.value
        const plot = new Chart(containerRef.value, {
          data: chartData.value,
          ...chartConfig.value,
        })
        plot.render()
        if (chartRef) {
          chartRef.value = plot
        }
        plotRef.value = plot
        onReady?.(plot)
      }
    })
    onBeforeUnmount(() => {
      /* istanbul ignore else */
      if (plotRef.value) {
        plotRef.value.destroy()
      }
    })

    watch(chartData, (data, oldData) => {
      /* istanbul ignore else */
      if (plotRef.value) {
        if (isEmpty(oldData)) {
          plotRef.value.update({
            data,
            ...chartConfig.value,
          })
          plotRef.value.render()
        } else {
          plotRef.value.changeData(data)
        }
      }
    })

    watch(chartConfig, (config, oldConfig) => {
      /* istanbul ignore else */
      if (plotRef.value) {
        if (!isEqual(config, oldConfig)) {
          plotRef.value.update({
            data: chartData.value,
            ...config,
          })
        }
      }
    })
    return () => {
      return <div ref={containerRef} class={props.class} style={props.style} />
    }
  },
})

export default BaseChart
