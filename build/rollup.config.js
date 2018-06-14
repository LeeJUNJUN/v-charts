const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const minify = require('uglify-es').minify
const componentInfo = require('../src/component-list')
const uglify = require('rollup-plugin-uglify').uglify
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const alias = require('rollup-plugin-alias')
const path = require('path')

let pkg = []
const pkgTypeList = [
  { type: 'cjs', min: false, suffix: '.common.js' },
  { type: 'cjs', min: true, suffix: '.common.min.js' },
  { type: 'umd', min: false, suffix: '.js' },
  { type: 'umd', min: true, suffix: '.min.js' }
]

pkgTypeList.forEach(({ type, min, suffix }) => {
  Object.keys(componentInfo).forEach(name => {
    const { src, dist } = componentInfo[name]
    pkg.push({
      min,
      type,
      suffix,
      globalName: name,
      src,
      dist
    })
  })
})

const addons = [
  {
    min: false,
    type: 'es',
    suffix: '.esm.js',
    globalName: '',
    src: 'src/index.es.js',
    dist: 'lib/index'
  },
  {
    min: false,
    type: 'cjs',
    suffix: '.js',
    globalName: '',
    src: 'src/core.js',
    dist: 'lib/v-charts-core'
  }
]
pkg = pkg.concat(addons)

pkg.forEach(item => { rollupFn(item) })

function rollupFn (item) {
  const vueSettings = item.min
    ? { css: 'lib/style.min.css', postcss: [autoprefixer, cssnano] }
    : { css: 'lib/style.css', postcss: [autoprefixer] }

  const plugins = [
    eslint({
      throwError: true,
      exclude: 'node_modules/**'
    }),
    vue(vueSettings),
    resolve({
      extensions: ['.js', '.vue']
    }),
    alias({
      resolve: ['js'],
      './v-charts-core': path.resolve(__dirname, '../src/core')
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ]
  if (item.min) plugins.push(uglify({}, minify))

  let external = id => /^(echarts)/.test(id)
  if (item.type === 'cjs') {
    external = id => /(^(echarts|numerify)|\/v-charts-core$)/.test(id)
  }

  rollup.rollup({
    input: item.src,
    external,
    plugins
  }).then(function (bundle) {
    return bundle.write({
      format: item.type,
      name: item.globalName,
      globals: {
        'echarts/lib/echarts': 'echarts'
      },
      file: item.dist + item.suffix
    })
  }).catch((e) => {
    console.log(e)
    process.exit(1)
  })
}
