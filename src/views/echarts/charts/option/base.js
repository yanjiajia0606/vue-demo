let option = {
  backgroundColor: 'rgba(0,0,0,0)',
  color: [
    '#ff7f50',
    '#87cefa',
    '#da70d6',
    '#32cd32',
    '#6495ed',
    '#ff69b4',
    '#ba55d3',
    '#cd5c5c',
    '#ffa500',
    '#40e0d0',
    '#1e90ff',
    '#ff6347',
    '#7b68ee',
    '#00fa9a',
    '#ffd700',
    '#6699FF',
    '#ff6666',
    '#3cb371',
    '#b8860b',
    '#30e0e0'
  ],
  title: {
    x: 'left', // 水平安放位置，默认为左对齐，可选为：
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc', // 标题边框颜色
    borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
    padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
    textStyle: {
      fontSize: 18,
      fontWeight: 'bolder',
      color: '#333' // 主标题文字颜色
    },
    subtextStyle: {
      color: '#aaa' // 副标题文字颜色
    }
  },
  grid: {
    x: 80,
    y: 60,
    x2: 80,
    y2: 60,
    // width: {totalWidth} - x - x2,
    // height: {totalHeight} - y - y2,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  legend: {
    orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
    // 'horizontal' ¦ 'vertical'
    x: 'center', // 水平安放位置，默认为全图居中，可选为：
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc', // 图例边框颜色
    borderWidth: 0, // 图例边框线宽，单位px，默认为0（无边框）
    padding: 5, // 图例内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
    // 横向布局时为水平间隔，纵向布局时为纵向间隔
    itemWidth: 20, // 图例图形宽度
    itemHeight: 14, // 图例图形高度
    textStyle: {
      color: '#333' // 图例文字颜色
    }
  },
  dataRange: {
    orient: 'vertical', // 布局方式，默认为垂直布局，可选为：
    // 'horizontal' ¦ 'vertical'
    x: 'left', // 水平安放位置，默认为全图左对齐，可选为：
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    y: 'bottom', // 垂直安放位置，默认为全图底部，可选为：
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc', // 值域边框颜色
    borderWidth: 0, // 值域边框线宽，单位px，默认为0（无边框）
    padding: 5, // 值域内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
    // 横向布局时为水平间隔，纵向布局时为纵向间隔
    itemWidth: 20, // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
    itemHeight: 14, // 值域图形高度，线性渐变垂直布局高度为该值 * 10
    splitNumber: 5, // 分割段数，默认为5，为0时为线性渐变
    color: ['#1e90ff', '#f0ffff'], //颜色
    //text:['高','低'],              // 文本，默认为数值文本
    textStyle: {
      color: '#333' // 值域文字颜色
    }
  },

  toolbox: {
    orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
    // 'horizontal' ¦ 'vertical'
    x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
    backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
    borderColor: '#ccc', // 工具箱边框颜色
    borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
    padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
    // 横向布局时为水平间隔，纵向布局时为纵向间隔
    itemSize: 16, // 工具箱图形宽度
    featureImageIcon: {}, // 自定义图片icon
    featureTitle: {
      mark: '辅助线开关',
      markUndo: '删除辅助线',
      markClear: '清空辅助线',
      dataZoom: '区域缩放',
      dataZoomReset: '区域缩放后退',
      dataView: '数据视图',
      lineChart: '折线图切换',
      barChart: '柱形图切换',
      restore: '还原',
      saveAsImage: '保存为图片'
    }
  },
  xAxis: {
    show: true, // 是否显示x轴
    position: 'top', // x轴的位置（top/bottom）
    type: 'category', // 坐标轴类型，值category/value，与y轴呼应，若x轴配置category则y轴配置value
    nameRotate: 10, // 坐标轴名字旋转，角度值
    inverse: false, // 是否是反向坐标轴
    boundaryGap: ['20%', '20%'], // 坐标轴两边留白策略，也可以使用布尔值，true居中
    splitNumber: 5, // 坐标轴的分割段数（预估值）
    axisLine: {
      show: true, // 是否显示坐标轴轴线
      symbol: ['none', 'arrow'], // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
      symbolSize: [10, 15], // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
      lineStyle: {
        color: '#333', // 坐标轴线线的颜色
        width: '5', // 坐标轴线线宽
        type: 'solid' // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
      }
    },
    axisTick: {
      show: true, // 是否显示坐标轴刻度
      inside: true, // 坐标轴刻度是否朝内，默认朝外
      length: 5, // 坐标轴刻度的长度
      lineStyle: {
        color: '#FFF', // 刻度线的颜色
        width: 10, // 坐标轴刻度线宽
        type: 'solid' // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
      }
    },
    axisLabel: {
      show: true, // 是否显示刻度标签
      interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
      inside: true, // 刻度标签是否朝内，默认朝外
      rotate: 90, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
      margin: 10, // 刻度标签与轴线之间的距离
      // formatter 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
      color: '#FFF', // 刻度标签文字的颜色
      fontStyle: 'normal', // 字体的风格（normal无样式；italic斜体；oblique倾斜字体）
      // 字体的粗细（normal无样式；bold加粗；bolder加粗再加粗；lighter变细；数字定义粗细也可以取值范围100至700）
      fontWeight: 'normal',
      fontSize: '20', // 文字字体大小
      align: 'left', // 文字水平对齐方式，默认自动（left/center/right）
      verticalAlign: 'left', // 文字垂直对齐方式，默认自动（top/middle/bottom)
      lineHeight: '50', // 行高
      backgroundColor: 'red' // 文字块背景色，例：#123234, red, rgba(0,23,11,0.3)
    },
    splitLine: {
      show: true, // 是否显示分隔线。默认数值轴显示，类目轴不显示
      interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
      // color分隔线颜色，可设置单个颜色，也可设置颜色数组，分隔线会按数组中颜色顺序依次循环设置颜色
      color: ['#ccc'],
      width: 3, // 分隔线线宽
      type: 'solid' // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
    },
    splitArea: {
      show: true, // 是否显示分隔区域
      interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
      areaStyle: {
        // color分隔区域颜色。分隔区会按数组中颜色顺序依次循环设置颜色。默认是一个深浅的间隔色
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        opacity: 1 // 图形透明度。支持从0到1的数字，为0时不绘制该图形
      }
    },
    data: {
      textStyle: {
        color: '#FFF', // 文字的颜色
        fontStyle: 'normal', // 文字字体的风格（normal无样式；italic斜体；oblique倾斜字体）
        // 字体的粗细（normal无样式；bold加粗；bolder加粗再加粗；lighter变细；数字定义粗细也可以取值范围100至700）
        fontWeight: 'normal',
        fontSize: '20', // 文字字体大小
        align: 'left', // 文字水平对齐方式，默认自动（left/center/right）
        verticalAlign: 'left', // 文字垂直对齐方式，默认自动（top/middle/bottom）
        lineHeight: '50', // 行高
        backgroundColor: 'red' // 文字块背景色，例：#123234, red, rgba(0,23,11,0.3)
      }
    }
  },
  yAxis: {
    show: true, //是否显示 y 轴
    position: 'bottom', //y轴的位置        (可选位置top  bottom)
    offset: 0, //y轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用
    type: 'category', //坐标轴类型        (可选value   category   time   log)
    name: '单位/个', //坐标轴名称
    nameLocation: 'end', //坐标轴名称显示位置      (可选start   center   end)
    nameTextStyle: {
      //坐标轴名称的文字样式
      color: 'black', //坐标轴名称的颜色
      fontSize: 30, //坐标轴名称的大小         (用数字表示)
      fontWeight: 'bold', //坐标轴文字加粗程度        (可选bold   bolder  lighter  normal)
      fontstyle: 'normal', //坐标轴文字样式      (可选normal  italic   oblique)
      fontFamily: '华文行楷', //坐标轴文字风格        (可选楷体  宋体  华文行楷等等)
      padding: [5, 0, 2, -5] //坐标轴文字边距        (上右下左)
    },
    nameGap: 25, //坐标轴名称与轴线之间的距离        (用数字表示)
    nameRotate: 0, //坐标轴名字旋转的角度值
    inverse: false, //是否为反向坐标轴
    axisLine: {
      //坐标轴轴线设置
      show: true, //是否显示坐标轴轴线
      symbol: ['none', 'arrow'], //坐标轴箭头        (可选'none'   'arrow'   ['none','arrow'])
      symbolSize: [8, 8], //箭头大小        ([宽度,高度])
      symbolOffset: [0, 7], //箭头偏移
      lineStyle: {
        //坐标轴的线
        color: 'green', //线的颜色
        width: 3, //线的粗细程度    (用数字表示)
        type: 'solid', //线的类型        (可选solid  dotted  dashed)
        opacity: 1 //线的透明度        (用0~1的小数表示)
      }
    },
    axisTick: {
      //坐标轴刻度设置
      show: true, //是否显示坐标轴刻度
      inside: true, //坐标轴刻度指向        (true表示向上   false表示向下)
      alignWithLabel: true, //刻度线是否和标签对齐
      length: 5, //坐标轴刻度长度
      lineStyle: {
        //坐标轴刻度的样式
        color: 'black', //坐标轴刻度的颜色
        width: 2, //坐标轴刻度的粗细程度    (用数字表示)
        type: 'solid' //坐标轴刻度的类型        (可选solid  dotted  dashed)
      }
    },
    axisLabel: {
      //坐标轴刻度文字的设置
      show: true, //是否显示
      inside: false, //坐标轴刻度文字指向        (true表示向上   false表示向下)
      rotate: 0, //坐标轴刻度文字的旋转角度
      margin: 10, //坐标轴刻度文字与轴线之间的距离
      color: 'red', //坐标轴刻度文字的颜色
      fontSize: 17, //坐标轴刻度文字的大小         (用数字表示)
      fontWeight: 'lighter', //坐标轴刻度文字的加粗程度    (可选bold   bolder  lighter  normal)
      fontstyle: 'normal', //坐标轴刻度文字的样式          (可选normal  italic   oblique)
      fontFamily: '宋体', //坐标轴刻度文字的风格        (可选楷体  宋体  华文行楷等等)
      padding: [5, 0, 2, -5] //坐标轴刻度文字的边距        (上右下左)
    },
    splitLine: {
      //网格线
      show: true, //是否显示
      lineStyle: {
        //网格线样式
        color: '#0735a2', //网格线颜色
        width: 1, //网格线的加粗程度
        type: 'dashed' //网格线类型
      }
    },
    splitArea: {
      //网格区域
      show: true //是否显示
    },
    data: [
      '100',
      '500',
      '1000',
      '1500',
      '2000',
      '2500',
      '3000',
      '4000',
      '5000',
      '6000',
      '7000',
      '8000'
    ] //坐标轴刻度文字数据
  }
}
