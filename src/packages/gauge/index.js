import echarts from '../../echarts-base'
import 'echarts/lib/chart/gauge'
import { gauge } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'

export default {
  name: 'VeGauge',
  mixins: [Core],
  created () {
    this.chartHandler = gauge
    this.echartsLib = echarts
  },
  _numerify: numerify
}
