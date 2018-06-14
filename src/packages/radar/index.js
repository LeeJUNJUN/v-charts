import echarts from '../../echarts-base'
import 'echarts/lib/chart/radar'
import { radar } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeRadar',
  mixins: [Core],
  created () {
    this.chartHandler = radar
    this.echartsLib = echarts
  },
  _numerify: numerify
}
