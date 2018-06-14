import echarts from '../../echarts-base'
import 'echarts-amap'
import { amap } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeAmap',
  mixins: [Core],
  created () {
    this.chartHandler = amap
    this.echartsLib = echarts
  },
  _numerify: numerify
}
