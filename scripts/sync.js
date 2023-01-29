/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const { ESLint } = require('eslint')
const { kebabCase, camelCase, upperFirst } = require('lodash')
const eslintConfig = require('../.eslintrc')

const mkdir = promisify(fs.mkdir)
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const eslint = new ESLint({
  extensions: ['.tsx'],
  baseConfig: eslintConfig,
  fix: true,
})

const g2PlotDir = path.resolve(
  process.cwd(),
  'node_modules/@antv/g2plot/src/plots'
)
const plotDir = path.resolve(process.cwd(), 'src/plots')
const testDir = path.resolve(process.cwd(), '__tests__/plots')
const exportPath = path.resolve(process.cwd(), 'src/index.ts')

const plotNames = fs
  .readdirSync(g2PlotDir)
  .filter((dir) => !dir.startsWith('_'))
  .map((dir) => upperFirst(camelCase(dir)))

const newCharts = []

plotNames.forEach((chartName) => {
  try {
    if (
      !fs.existsSync(path.resolve(plotDir, `${kebabCase(chartName)}/index.tsx`))
    ) {
      newCharts.push(chartName)
    }
  } catch (error) {}
})

const lintAndFixFileContent = async (fileContent, filePath) => {
  const lintResult = await eslint.lintText(fileContent, {
    filePath,
  })

  const { output } = lintResult[0]

  return output || fileContent
}

const getChartConfig = (chart) => {
  return {
    cmpName: `${chart}Chart`,
    cmpPath: kebabCase(chart),
  }
}

const createComponents = async () => {
  const promises = newCharts.map(async (chart) => {
    const cmp = `
import { App, defineComponent } from 'vue-demi'
import { ${chart}, ${chart}Options } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type ${chart}ChartProps = Writeable<Omit<BaseChartProps<${chart}Options>, 'chart' | 'data'> &
  ${chart}Options>

const ${chart}Chart = defineComponent<${chart}ChartProps>({
  name: '${chart}Chart',
  setup(props, ctx) {
    return () => <BaseChart chart={${chart}} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
${chart}Chart.install = (app: App) => {
  app.component(${chart}Chart.name, ${chart}Chart)
}

export default ${chart}Chart
`

    const { cmpPath } = getChartConfig(chart)
    const dir = path.resolve(plotDir, cmpPath)
    await mkdir(dir)
    const filePath = path.resolve(dir, `index.tsx`)
    const fixedContent = await lintAndFixFileContent(cmp, filePath)

    await writeFile(filePath, fixedContent, {
      encoding: 'utf8',
    })
  })

  await Promise.all(promises)
}

const addExport = async () => {
  let exportFileContent = await readFile(exportPath, {
    encoding: 'utf8',
  })

  newCharts.forEach((chart) => {
    const chartName = chart + 'Chart'
    const { cmpPath } = getChartConfig(chart)
    const importPath = `./plots/${cmpPath}`

    const content = `
    \nimport { ${chartName}Props as _${chartName}Props } from '${importPath}'
      export { default as ${chartName} } from '${importPath}'
      export type ${chartName}Props = _${chartName}Props
    `

    exportFileContent += content
  })

  const fixedContent = await lintAndFixFileContent(
    exportFileContent,
    exportPath
  )

  writeFile(exportPath, fixedContent, {
    encoding: 'utf8',
  })
}

const createTestCases = async () => {
  const promises = newCharts.map(async (chart) => {
    const { cmpPath } = getChartConfig(chart)
    const cmp = `
import { mount } from '@vue/test-utils'
import ${chart}Chart from '../../src/plots/${cmpPath}'

const config = {
  data: [],
  xField: 'a',
  yField: 'b',
}

describe('${chart}Chart', () => {
  test('should render without crashed', () => {
    mount(() => <${chart}Chart {...config} />)
  })
})
`

    const filePath = path.resolve(testDir, `${cmpPath}.spec.tsx`)
    const fixedContent = await lintAndFixFileContent(cmp, filePath)

    await writeFile(filePath, fixedContent, {
      encoding: 'utf8',
    })
  })

  await Promise.all(promises)
}

const start = async () => {
  await Promise.all([createComponents(), addExport(), createTestCases()])
}

start()
