<template lang="pug">
  ._wrap_input
    label.label(
      :for="bind"
      :class="isValidField || value === '' ? '' : 'error_color'"
    ) {{ label }}
    input.input(
      :id="bind"
      :name="bind"
      type="number"
      :min="minNumb ? minNumb : false"
      :max="maxNumb ? setMaxNumb : false"
      v-model="value"
      :placeholder="label"
      :class="isValidField || value === '' ? '' : 'error_color error_border'"
      @input="input"
      :required="required"
      :readonly="readonly ? true : false"
    )
    .show_count(v-if="maxNumb")
      span.min_numb(
        v-if="minNumb && isSeparator"
        :class="validMinNumb || value === '' ? '' : 'error_color'"
      ) {{ currentValue }}
      span.separator(v-if="minNumb && isSeparator") {{ separator }}
      span.max_numb(:class="validMaxNumb ? '' : 'error_color'") {{ maxNumb }}
</template>

<script>
export default {
  props: {
    bind: {
      type: String,
      required: true
    },
    outsideValue: {
      type: [Number, String],
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    minNumb: {
      type: [Number, String],
      required: false,
      default: ""
    },
    maxNumb: {
      type: [Number, String],
      required: false,
      default: ""
    },
    separator: {
      type: String,
      required: false,
      default: "/"
    },
    pattern: {
      type: String,
      required: false,
      default: ""
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      value: "",
      validPattern: false
    };
  },
  methods: {
    input(e) {
      this.firstZeroValid();
      this.simpleValid();
      if (this.pattern) {
        this.validPattern = this.setPattern.test(this.value);
        if (this.isValidField) {
          return this.sendData(e);
        }
        return false;
      }
      return this.sendData(e);
    },
    simpleValid() {
      const pt = /[-e]{1,}/gi;
      this.value = +String(this.value).replace(pt, "");
    },
    firstZeroValid() {
      this.value = parseInt(this.value, 10);
    },
    sendData(e) {
      this.$emit("input", {
        name: e.target.name,
        value: parseInt(this.value, 10),
        valid: this.validMinNumb && this.validMaxNumb
      });
    },
    setValue() {
      if (!this.outsideValue) {
        return;
      }
      this.value = this.outsideValue;
    }
  },
  computed: {
    validMinNumb() {
      if (!this.minNumb) {
        return true;
      }
      return +this.value >= +this.minNumb;
    },
    validMaxNumb() {
      if (!this.maxNumb) {
        return true;
      }
      return +this.value <= +this.maxNumb;
    },
    setMaxNumb() {
      if (!this.maxNumb) {
        return false;
      }
      return +this.maxNumb + 1;
    },
    currentValue() {
      const val = !this.value ? 0 : this.value;
      return val;
    },
    isSeparator() {
      return this.minNumb && this.maxNumb;
    },
    setPattern() {
      if (this.pattern) {
        return new RegExp(this.pattern);
      }
      return false;
    },
    isValidPattern() {
      if (!this.pattern) {
        return true;
      }
      return this.validPattern;
    },
    isValidField() {
      if (this.pattern) {
        return this.isValidPattern && this.validMinNumb && this.validMaxNumb;
      }
      return this.validMinNumb && this.validMaxNumb;
    }
  },
  beforeMount() {
    this.setValue();
    if (this.value) {
      this.input({
        target: {
          name: this.bind
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
._wrap_input {
  display: flex;
  flex-direction: column;
  position: relative;
}

.input {
  text-indent: 20px;
  line-height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color_grey_middle);
  color: var(--color_grey_dark);
  background-color: white;
  font-size: 16px;
  font-family: var(--Roboto);
  outline: none;
  &::placeholder {
    color: var(--color_grey_middle);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    appearance: textfield;
  }
  &:read-only {
    background-color: var(--color_grey_light);
  }
}

.label {
  line-height: 1;
  margin: 0 auto 15px 0;
  font-size: 16px;
  font-family: var(--RobotoBold);
  color: var(--color_grey_dark);
}

.show_count {
  display: flex;
  position: absolute;
  color: var(--color_grey_middle);
  font-size: 16px;
  font-family: var(--Roboto);
  line-height: 1;
  right: 0;
  top: 0;
}

.separator {
  margin: auto 2px;
}

/* error color */
.error_color {
  color: var(--color_red);
}

.error_border {
  border-color: var(--color_red);
}
</style>
