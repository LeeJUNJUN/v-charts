import echarts from '../../echarts-base'
import 'echarts/lib/chart/map'
import { map } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeMap',
  mixins: [Core],
  created () {
    this.chartHandler = map
    this.echartsLib = echarts
  },
  _numerify: numerify
}
