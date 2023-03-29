let iconfontVersion = ['2227704_hy1esztthg'] //at.alicdn.com/t/c/font_2227704_hy1esztthg.css
let iconfontUrl = `//at.alicdn.com/t/c/font_$key.css`
// 定义动态插入方法
const loadStyle = (url) => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

// 动态插入
iconfontVersion.forEach((ele) => {
  loadStyle(iconfontUrl.replace('$key', ele))
})
