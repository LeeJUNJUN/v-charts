import echarts from '../../echarts-base'
import 'echarts/lib/chart/line'
import { line } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeLine',
  mixins: [Core],
  created () {
    this.chartHandler = line
    this.echartsLib = echarts
  },
  _numerify: numerify
}
