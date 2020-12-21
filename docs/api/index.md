---
title: API
nav:
  title: API
---

## Configurations

All configurations defined in `G2Plot` can be used as `props`, and use `chartRef` can access chart instance

For example

```js
import React from 'react'
import { LineChart } from '@opd/g2plot-react'

export default () => {
  const ref = useRef()
  const chartRef = useRef()
  return (
    <LineChart xField="x" height={400} ref={ref} chartRef={chartRef} forceFit />
  )
}
```

view `G2Plot` [docs](https://g2plot.antv.vision/en/docs/manual/introduction)
