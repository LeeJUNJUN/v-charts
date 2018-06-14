import echarts from '../../echarts-base'
import 'echarts/lib/chart/tree'
import { tree } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeTree',
  mixins: [Core],
  created () {
    this.chartHandler = tree
    this.echartsLib = echarts
  },
  _numerify: numerify
}
