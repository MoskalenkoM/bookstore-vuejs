<template lang="pug">
  ._wrap_input
    label.label(
      :for="bind"
      :class="isValidField || value === '' ? '' : 'error_color'"
    ) {{ label }}
    input.input(
      :id="bind"
      :name="bind"
      :maxlength="setMaxLength"
      :type="type"
      v-model="value"
      :placeholder="label"
      :class="isValidField  || value === '' ? '' : 'error_color error_border'"
      @input="input"
      :required="required"
      :readonly="readonly ? true : false"
    )
    .show_count(v-if="maxLength")
      span.min_length(
        v-if="isSeparator && maxLength"
        :class="validMaxLength  || value === '' ? '' : 'error_color'"
      ) {{ currentLength }}
      span.separator(v-if="isSeparator && maxLength") {{ separator }}
      span.max_length(v-if="maxLength") {{ maxLength }}
</template>

<script>
export default {
  props: {
    bind: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    outsideValue: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    maxLength: {
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
      this.simpleSecurity();
      if (this.pattern) {
        this.validPattern = this.setPattern.test(this.value);
        return this.sendData(e);
      }
      return this.sendData(e);
    },
    simpleSecurity() {
      const pt = /[<>]{1,}/gi;
      this.value = this.value.replace(pt, "%");
    },
    sendData(e) {
      this.$emit("input", {
        name: e.target.name,
        value: this.value,
        valid: this.isValidField
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
    validMaxLength() {
      if (!this.maxLength) {
        return true;
      }
      return +this.value.length <= +this.maxLength;
    },
    currentLength() {
      const len = this.value === "" ? 0 : this.value.length;
      return len;
    },
    setMaxLength() {
      if (!this.maxLength) {
        return false;
      }
      return +this.maxLength + 1;
    },
    isSeparator() {
      return this.minLength || this.maxLength;
    },
    setPattern() {
      if (this.pattern) {
        return new RegExp(this.pattern);
      }
      return false;
    },
    isValidField() {
      if (this.pattern) {
        return this.validPattern && this.validMaxLength;
      }
      return this.validMaxLength;
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
