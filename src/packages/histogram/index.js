import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import { histogram } from '../bar/main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeHistogram',
  mixins: [Core],
  created () {
    this.chartHandler = histogram
    this.echartsLib = echarts
  },
  _numerify: numerify
}
