import { defineComponent } from 'vue'
import { Calendar, CalendarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type CalendarChartProps = Omit<BaseChartProps<CalendarConfig>, 'chart'> &
  CalendarConfig

const CalendarChart = defineComponent<CalendarChartProps>((_, ctx) => {
  return <BaseChart chart={Calendar} {...ctx.attrs} />
})

export default CalendarChart
