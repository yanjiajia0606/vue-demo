<script>
import bindAll from 'lodash/bindAll';

export default {
  name: 'SeatomDrag',

  props: {
    handleClass: String,
    direction: {
      type: String,
      default: 'vh',
      validator (val) {
        return ['v', 'h', 'vh'].indexOf(val) > -1;
      }
    },
    leftMin: {
      type: Number,
      default: -Infinity
    },
    leftMax: {
      type: Number,
      deafult: Infinity
    },
    topMin: {
      type: Number,
      deafult: -Infinity
    },
    topMax: {
      type: Number,
      default: Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  render () {
    const slot = this.$slots.default;
    return slot && slot[0];
  },

  created () {
    bindAll(this, ['onMouseDown', 'onMouseMove', 'onMouseUp']);
  },

  mounted () {
    this.$nextTick(() => {
      this.init();
    });
  },

  methods: {
    init () {
      this.dx = 0;
      this.dy = 0;
      this.left = null;
      this.top = null;
      this.handleEles = [...this.$el.querySelectorAll(this.handleClass)];
      if (!this.handleEles.length) {
        this.handleEles = [this.$el];
      }
      this.handleEles.forEach(ele => {
        ele.addEventListener('mousedown', this.onMouseDown, false);
      })
    },
    onMouseDown (e) {
      if (this.disabled) { return }
      // if (e.target !== e.currentTarget) { return }
      this.dx = e.clientX - this.$el.offsetLeft
      this.dy = e.clientY - this.$el.offsetTop
      this.left = this.$el.offsetLeft
      this.top = this.$el.offsetTop
      document.documentElement.addEventListener(
        'mousemove',
        this.onMouseMove,
        false
      )
      document.documentElement.addEventListener(
        'mouseup',
        this.onMouseUp,
        false
      )
      this.$emit('dragStart', e)
      return false
    },
    onMouseMove (e) {
      const { leftMin, leftMax, topMin, topMax } = this
      let newLeft = e.clientX - this.dx
      let newTop = e.clientY - this.dy

      if (newLeft < leftMin) {
        newLeft = leftMin
      } else if (newLeft > leftMax) {
        newLeft = leftMax
      }
      if (newTop < topMin) {
        newTop = topMin
      } else if (newTop > topMax) {
        newTop = topMax
      }

      if (this.direction === 'h') { // 横向
        this.$el.style.left = newLeft + 'px'
        this.left = newLeft
      } else if (this.direction === 'v') { // 纵向
        this.$el.style.top = newTop + 'px'
        this.top = newTop
      } else { // 横向 and 纵向
        this.$el.style.left = newLeft + 'px'
        this.$el.style.top = newTop + 'px'
        this.left = newLeft
        this.top = newTop
      }

      this.$emit('dragging', { e, left: this.left, top: this.top })
      return false
    },
    onMouseUp (e) {
      document.documentElement.removeEventListener(
        'mousemove',
        this.onMouseMove,
        false
      )
      document.documentElement.removeEventListener(
        'mouseup',
        this.onMouseUp,
        false
      )
      this.$emit('dragEnd', e)
    }
  }
}
</script>
