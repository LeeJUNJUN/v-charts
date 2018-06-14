import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import { bar } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'

export default {
  name: 'VeBar',
  mixins: [Core],
  created () {
    this.chartHandler = bar
    this.echartsLib = echarts
  },
  _numerify: numerify
}
