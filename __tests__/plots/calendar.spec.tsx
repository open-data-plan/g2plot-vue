import { mount } from '@vue/test-utils'
import CalendarChart from '../../src/plots/calendar'

describe('CalendarChart', () => {
  test('should render without crashed', () => {
    mount((props, ctx) => <CalendarChart {...props} {...ctx.attrs} />, {
      props: {
        data: [],
        dateField: 'date',
        valueField: 'commits',
        dateRange: ['2017-05-01', '2017-10-31'],
        colors: '#BAE7FF-#1890FF-#0050B3',
      },
    })
  })
})
