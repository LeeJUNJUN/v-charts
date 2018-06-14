import echarts from '../../echarts-base'
import 'echarts/extension/bmap/bmap'
import { bmap } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeBmap',
  mixins: [Core],
  created () {
    this.chartHandler = bmap
    this.echartsLib = echarts
  },
  _numerify: numerify
}
