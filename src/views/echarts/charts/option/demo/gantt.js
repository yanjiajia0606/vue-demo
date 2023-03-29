const baseDate = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
option = {
  color: '#0A8BFF',
  backgroundColor: '#fff',
  title: {
    // text: '外链时间段',
    // subtext: '不同日期的当日工时统计',
  },
  tooltip: {
    enterable: true,
    //alwaysShowContent:true,
    hideDelay: 100,
    backgroundColor: 'rgba(255,255,255,1)',
    //背景颜色（此时为默认色）
    borderRadius: 5,
    //边框圆角
    padding: [5, 0, 5, 0],
    // [5, 10, 15, 20] 内边距
    textStyle: {
      color: '#000'
    },
    position: function (point, params, dom, rect, size) {
      dom.innerHTML =
        '<div style="font-size:14px;color:rgba(0,0,0,0.65)" class="tip"><h1 style="font-size:14px;color:rgba(0,0,0,0.85);height:25px;display:flex;align-items: center;padding:0 0 5px 8px;margin:0;border-bottom:1px solid rgba(0,0,0,0.06);font-weight:bold">' +
        params.name.split(',')[0] +
        '</h1> <p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">时段:' +
        params.value[1].split(' ')[1] +
        '~' +
        params.value[2].split(' ')[1] +
        '</<div>'
    }
  },
  legend: {
    //图例
    data: ['外联时间段'],
    left: '100px',
    top: '16%',
    itemWidth: 16,
    itemHeight: 16,
    selectedMode: false,
    // 图例设为不可点击
    textStyle: {
      color: 'rgba(0, 0, 0, 0.45)',
      fontSize: 14
    }
  },
  grid: {
    //绘图网格
    left: '0%',
    right: '3%',
    top: '13%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'time',
    position: 'bottom',
    interval: 3600 * 1000 * 4,
    //以一个小时递增
    max: `${baseDate} 24:00`,
    min: `${baseDate} 00:00`,
    //将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
    axisLabel: {
      formatter: function (value, index) {
        if (index == 6) {
          return '24:00'
        }
        var data = new Date(value)
        var hours = data.getHours()
        return hours.toString().padStart(2, 0) + ':00'
      },
      textStyle: {
        color: 'rgba(0,0,0,0.65)',
        //更改坐标轴文字颜色
        fontSize: 12
        //更改坐标轴文字大小
      }
    },
    axisLine: {
      lineStyle: {
        color: '#dadada'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#dadada'
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#dadada'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#dadada'
      }
    },
    data: ['2023-12-05', '2020-12-06', '2020-12-07', '2020-12-08', '2020-12-09', '2020-12-10'],
    axisLabel: {
      textStyle: {
        color: 'rgba(0, 0, 0, 0.65)',
        //刻度颜色
        fontSize: 12
        //刻度大小
      }
    }
  },
  series: [
    {
      type: 'custom',
      renderItem: function (params, api) {
        //开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
        var categoryIndex = api.value(0) //这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
        var start = api.coord([api.value(1), categoryIndex]) // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
        var end = api.coord([api.value(2), categoryIndex])
        // var height = api.size([0, 1])[1];
        var height = 20
        return {
          type: 'rect',
          // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
          shape: echarts.graphic.clipRectByRect(
            {
              // 矩形的位置和大小。
              x: start[0],
              y: start[1] - height / 2,
              width: end[0] - start[0],
              height: height
            },
            {
              // 当前坐标系的包围盒。
              x: params.coordSys.x,
              y: params.coordSys.y,
              width: params.coordSys.width,
              height: params.coordSys.height
            }
          ),
          style: api.style()
        }
      },
      encode: {
        x: [1, 2],
        // data 中『维度1』和『维度2』对应到 X 轴
        y: 0
        // data 中『维度0』对应到 Y 轴
      },
      itemStyle: {
        normal: {
          color: function (params) {
            if (params.data !== null && params.data['value'] && params.data['value'][3] == 'in') {
              return '#0A8BFF'
            } else {
              return 'red'
            }
          }
        }
      },
      data: [
        // 维度0 维度1 维度2
        {
          value: [5, `${baseDate} 00:00`, `${baseDate} 5:28`, 'out']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [0, `${baseDate} 00:00`, `${baseDate} 15:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [1, `${baseDate} 2:18`, `${baseDate} 4:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [1, `${baseDate} 6:15`, `${baseDate} 17:58`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [1, `${baseDate} 19:18`, `${baseDate} 20:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [1, `${baseDate} 21:15`, `${baseDate} 23:38`, 'out']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [2, `${baseDate} 19:18`, `${baseDate} 20:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [2, `${baseDate} 21:15`, `${baseDate} 23:38`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [3, `${baseDate} 1:28`, `${baseDate} 5:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [3, `${baseDate} 07:28`, `${baseDate} 15:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [4, `${baseDate} 01:28`, `${baseDate} 9:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [5, `${baseDate} 09:28`, `${baseDate} 10:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        },
        {
          value: [5, `${baseDate} 10:28`, `${baseDate} 11:28`, 'in']
          //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
        }
      ],
      markArea: {
        //设置具体区域的背景颜色，选择不同区间 设置图表对应的背景颜色
        silent: true,
        data: [
          [
            {
              xAxis: `${baseDate} 00:00`
            },
            {
              xAxis: `${baseDate} 04:00`
            }
          ]
        ],
        itemStyle: {
          color: 'rgba(247 ,161 ,13 ,.1)'
        }
      },
      markLine: {
        data: [
          {
            xAxis: `${baseDate} 00:00`
          },
          {
            xAxis: `${baseDate} 04:00`
          }
        ],
        silent: true,
        symbol: 'none',
        label: {
          show: true,
          formatter: function (params) {
            return params.value.split(' ')[1]
          }
        },
        //去掉箭头
        itemStyle: {
          normal: {
            lineStyle: {
              color: 'rgba(247,161,13 ,1)',
              width: 1,
              type: 'solid'
            }
          }
        }
      }
    }
  ]
}
