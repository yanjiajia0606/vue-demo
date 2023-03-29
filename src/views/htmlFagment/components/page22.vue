<template>
  <div style="width: 200px; height: 300px; background: red; display: inline-block">
    <div style="width: 300px; height: 100px; background: pink"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oriData: {
        name: 'yjj',
        age: '18'
      }
    }
  },
  computed: {
    curData() {
      const { name, age } = this.oriData
      return { cName: name, cAge: age }
    }
  },
  methods: {
    init() {
      console.log(this.isValidArrayIndex([1, 2]), 'val')
    },
    makeMap(str, expectsLowerCase) {
      var map = Object.create(null)
      var list = str.split(',')
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true
      }
      return expectsLowerCase
        ? function (val) {
            return map[val.toLowerCase()]
          }
        : function (val) {
            return map[val]
          }
    },
    isValidArrayIndex(val) {
      var n = parseFloat(String(val))
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }
  },
  created() {
    this.init()
    const a = { name: 'aa' }
    const { name } = a
    const b = { name }
    window._t = this
  }
}
</script>

<style></style>
