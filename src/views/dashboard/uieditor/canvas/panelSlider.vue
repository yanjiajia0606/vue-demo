<template>
  <div class="seatom-slider">
    <el-select
      v-model="selectValue"
      placeholder="请选择"
      size="mini"
      class="comp__input"
      popper-class="seatom-slider-select"
    >
      <el-option
        v-for="item in scaleSelect"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        class="comp__option"
      >
      </el-option>
    </el-select>
    <i
      class="seatom-icon datav-font icon-zoom-out slider-icon zoom-out el-icon-minus"
      @click.stop="handleZoomOut"
    ></i>
    <input
      type="range"
      min="0.1"
      max="1.9"
      :value="value"
      step="0.1"
      @change="handleChange"
      class="input-range"
    />
    <i
      class="seatom-icon datav-font icon-zoom-in slider-icon zoom-in el-icon-plus"
      @click.stop="handleZoomIn"
    ></i>
    <i
      class="seatom-icon slider-icon datav-font icon-viewport"
      @click.stop="handleThumbnail"
    ></i>
  </div>
</template>

<script>
// import canvasBus from '@/utils/canvasBus';
export default {
  name: "panelSlider",
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      scaleSelect: [
        {
          label: "50%",
          value: 0.5
        },
        {
          label: "100%",
          value: 1
        },
        {
          label: "150%",
          value: 1.5
        },
        {
          label: "190%",
          value: 1.9
        }
      ]
      // selectValue: 1
    };
  },

  props: ["value"],

  created() {},

  computed: {
    selectValue: {
      get() {
        return Math.floor(this.value.toPrecision(2) * 100) + "%";
      },
      set(val) {
        this.$emit("change", val);
      }
    }
  },

  methods: {
    handleChange(e) {
      this.$emit("change", Number(e.target.value));
    },
    handleZoomOut() {
      const val = Math.max(0.1, this.value - 0.1);
      this.$emit("change", val);
    },
    handleZoomIn() {
      const val = Math.min(1.9, this.value + 0.1);
      this.$emit("change", val);
    },
    handleThumbnail() {
      // canvasBus.emit('thumbnail-hide')
    }
  }
};
</script>

<style lang="scss" scoped>
.seatom-slider {
  position: absolute;
  right: 4px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon-disable {
    color: #bcc9d4;
  }
  .slider-icon {
    color: #bcc9d4;
    font-size: 10px;
    margin: 0 8px;
  }
  .zoom-out {
    cursor: zoom-out;
  }
  .zoom-in {
    cursor: zoom-in;
  }
  .input-range {
    cursor: pointer;
    height: 2px;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    display: inline-block;
  }
  .comp__input {
    width: 60px;
    ::v-deep.el-input__inner {
      padding-left: 8px;
      padding-right: 0;
      border: 1px solid #393b4a;
    }
    // ::v-deep.el-input__suffix {
    //   width: 20px;
    // }
    // ::v-deep.el-scrollbar__wrap {
    //   background: #1f2430;
    // }
  }
}
.comp__input {
  position: relative;
  width: 80px !important;
  ::v-deep.el-input__inner {
    padding-left: 8px;
    padding-right: 0;
    border: 1px solid #393b4a;
    background: #1f2430;
  }
}
</style>
<style lang="scss">
.seatom-slider-select {
  .comp__option.el-select-dropdown__item.hover,
  .comp__option.el-select-dropdown__item:hover {
    background-color: rgba(204, 219, 255, 0.06);
  }
  &.el-select-dropdown {
    background-color: rgb(28, 30, 35);
    border: 1px solid #393b4a;
    color: #bfbfbf;
  }
  &.el-popper[x-placement^="top"] .popper__arrow::after {
    // top: 1px;
    // margin-left: -6px;
    border-top-color: rgb(28, 30, 35);
  }
}

/* .el-select-dropdown {
  background-color: rgb(28, 30, 35);
  border: 1px solid #393b4a;
  color: #bfbfbf;
} */
</style>
