let getActualWidthOfChars = (text) => {
  const size = 16
  const family = 'Microsoft YaHei'
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.font = `${size}px ${family}`
  const metrics = ctx.measureText(text)
  return Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight)
}

/* 数字转换 */
let bigNumberTransform = (value) => {
  if (!value) {
    value = '0'
  }
  const newValue = ['', '', '']
  let fr = 1000
  let num = 3
  let text1 = ''
  let fm = 1
  while (value / fr >= 1) {
    fr *= 10
    num += 1
    // console.log('数字', value / fr, 'num:', num)
  }
  if (num <= 4) {
    // 千
    newValue[0] = parseInt(value / 1000) + ''
    newValue[1] = '千'
  } else if (num <= 8) {
    // 万
    text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万'
    // tslint:disable-next-line:no-shadowed-variable
    fm = text1 === '万' ? 10000 : 10000000
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + ''
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(1) + ''
    }
    newValue[1] = text1
  } else if (num <= 16) {
    // 亿
    text1 = (num - 8) / 3 > 1 ? '千亿' : '亿'
    text1 = (num - 8) / 4 > 1 ? '万亿' : text1
    text1 = (num - 8) / 7 > 1 ? '千万亿' : text1
    // tslint:disable-next-line:no-shadowed-variable
    fm = 1
    if (text1 === '亿') {
      fm = 100000000
    } else if (text1 === '千亿') {
      fm = 100000000000
    } else if (text1 === '万亿') {
      fm = 1000000000000
    } else if (text1 === '千万亿') {
      fm = 1000000000000000
    }
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + ''
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(1) + ''
    }
    newValue[1] = text1
  }
  if (value < 1000) {
    newValue[0] = value + ''
    newValue[1] = ''
  }
  return newValue.join('')
}
let formatNumber = (num) => {
  let reg = /(?=(\B)(\d{3})+$)/g
  return num.toString().replace(reg, ',')
}

let data = [
  { value: 55, name: '高危' },
  { value: 650, name: '中危' },
  { value: 1000000, name: '低危' }
]
const title = '脆弱性'
const total = data.reduce((pre, cur) => Number(pre) + Number(cur.value), 0)
option = {
  backgroundColor: '#0a172a',
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  color: ['#F15B5B', '#F1B75B', '#88E088'],
  title: [
    {
      left: '30%',
      top: '45%',
      textAlign: 'center',
      text: '{a|' + bigNumberTransform(total) + '}',
      textStyle: {
        rich: {
          a: {
            fontSize: 30,
            fontWeight: 900,
            color: '#fff'
          },
          c: {
            fontSize: 10,
            color: '#535353'
          }
        }
      },
      subtext: title,
      subtextStyle: {
        fontSize: 20,
        fontWeight: 350,
        color: ['#fff']
      }
    }
  ],
  legend: {
    icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
    orient: 'vertical',
    left: '60%',
    top: 'center',
    align: 'left',
    itemGap: 5,
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 40,
    selectedMode: false,
    formatter: function (name) {
      const { value } = data.find((item) => item.name === name)
      const percent = ((value / total) * 100).toFixed(2)
      return '{a|' + name + '：}{b|' + formatNumber(value) + '}{c|' + percent + '%}'
    },
    textStyle: {
      rich: {
        a: {
          align: 'left',
          fontSize: 12,
          color: 'rgba(255,255,255,1)',
          width: 40
        },
        b: {
          align: 'left',
          fontSize: 12,
          color: 'rgba(255,255,255,1)',
          width: getActualWidthOfChars(total),
          padding: [0, 0, 0, 5]
        },
        c: {
          align: 'right',
          fontSize: 12,
          color: 'rgba(255,255,255,1)',
          padding: [0, 0, 0, 5]
        }
      }
    }
    // data:data.map(item=>item.name)
  },
  series: [
    // 外圈
    {
      type: 'pie',
      radius: ['45%', '55%'],
      center: ['30%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: data
    },
    {
      type: 'pie',
      radius: ['60%', '62%'],
      center: ['30%', '50%'],
      scaleSize: 10,
      label: {
        show: false
      },
      itemStyle: {
        opacity: 0.2,
        empyOpacity: 0.6, // 高亮状态下的透明度
        color: '#6BC5F8'
      },
      emphasis: {
        // 设置高亮时不显示标签
        disabled: true,
        label: {
          show: false
        },
        scale: false
      },
      tooltip: {
        show: false
      },
      data: [0]
      // data: [
      //    { value: 550, name: '轻油总销售量' },
      //    { value: 650, name: '液化气总销售量' },
      //    { value: 1000, name: '混烃总销售量' }
      // ]
    },
    // 内圈
    {
      type: 'pie',
      radius: ['34%', '44%'],
      center: ['30%', '50%'],
      itemStyle: {
        opacity: 0.3,
        empyOpacity: 0.6 // 高亮状态下的透明度
      },
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      emphasis: {
        // 设置高亮时不显示标签
        disabled: true,
        label: {
          show: false
        },
        scale: false
      },
      tooltip: {
        show: false
      },
      data: data
    }
  ]
}
