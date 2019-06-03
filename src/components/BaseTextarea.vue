<template lang="pug">
  ._wrap_textarea
    label.label(
      :for="bind"
      :class="validMaxLength ? '' : 'error_color'"
    ) {{ label }}
    textarea.textarea(
      :id="bind"
      :name="bind"
      :maxlength="setMaxLength"
      v-model="value"
      :placeholder="label"
      :class="validMaxLength ? '' : 'error_color error_border'"
      @input="input"
      :required="required"
      :readonly="readonly ? true : false"
    )
    .show_count(v-if="maxLength")
      span.min_length(v-if="separator" :class="validMaxLength ? '' : 'error_color'") {{ currentLength }}
      span.separator(v-if="separator") {{ separator }}
      span.max_length {{ maxLength }}
</template>

<script>
export default {
  props: {
    bind: {
      type: String,
      required: true
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
    separator: {
      type: String,
      required: false,
      default: "/"
    },
    maxLength: {
      type: [Number, String],
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
      value: ""
    };
  },
  methods: {
    input(e) {
      this.simpleSecurity();
      if (this.validMaxLength) {
        this.sendData(e);
      } else {
        this.sendData(e);
      }
    },
    simpleSecurity() {
      const pt = /[<>]{1,}/gi;
      this.value = this.value.replace(pt, "%");
    },
    sendData(e) {
      this.$emit("input", {
        name: e.target.name,
        value: this.value,
        valid: this.validMaxLength
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
    validMaxLength() {
      if (!this.maxLength) {
        return true;
      }
      return +this.value.length <= +this.maxLength;
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
._wrap_textarea {
  display: flex;
  flex-direction: column;
  position: relative;
}

.textarea {
  height: 200px;
  width: 100%;
  font-size: 16px;
  padding: 10px 10px 5px 20px;
  border-radius: 5px;
  border: 1px solid var(--color_grey_middle);
  color: var(--color_grey_dark);
  background-color: white;
  font-family: var(--Roboto);
  resize: none;
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