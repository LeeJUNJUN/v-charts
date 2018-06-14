import echarts from '../../echarts-base'
import 'echarts/lib/chart/scatter'
import { scatter } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeScatter',
  mixins: [Core],
  created () {
    this.chartHandler = scatter
    this.echartsLib = echarts
  },
  _numerify: numerify
}
