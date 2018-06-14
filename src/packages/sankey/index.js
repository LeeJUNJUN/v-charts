import echarts from '../../echarts-base'
import 'echarts/lib/chart/sankey'
import { sankey } from './main'
import numerify from 'numerify/lib/index.es'
import Core from './v-charts-core'
export default {
  name: 'VeSankey',
  mixins: [Core],
  created () {
    this.chartHandler = sankey
    this.echartsLib = echarts
  },
  _numerify: numerify
}
