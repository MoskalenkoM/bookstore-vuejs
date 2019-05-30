<template lang="pug">
  ._wrap_textarea
    label.label(
      :for="bind"
      :class="[focused ? 'up' : 'in', validError ? 'error_color' : '']"
    ) {{ label }}
    textarea.textarea(
      :class="[validError ? 'error_border' : '', validError ? 'error_color' : '']"
      :id="bind"
      :name="bind"
      @input="input"
      @focus="focus"
      @blur="blur"
      v-model="value"
      :maxlength="maxlength + 1"
      :required="required"
    )
    .show_count(
      v-if="maxlength"
      :class="[focused ? 'up_count' : 'in_count', validError ? 'error_color' : '']"
    ) {{ value.length }} / {{ maxlength }}
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    bind: {
      type: String,
      required: true
    },
    maxlength: {
      type: Number,
      required: false,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      value: "",
      focused: false
    };
  },
  methods: {
    input(e) {
      return this.$emit("input", {
        name: e.target.name,
        value: this.value
      });
    },
    focus() {
      if (!this.focused) {
        this.focused = true;
      }
    },
    blur() {
      if (!this.value) {
        this.focused = false;
      }
    }
  },
  computed: {
    validError() {
      return this.value.length > this.maxlength;
    }
  }
};
</script>

<style lang="postcss" scoped>
._wrap_textarea {
  display: flex;
  position: relative;
  margin: 36px auto 0;
}

.textarea {
  height: 200px;
  width: 100%;
  font-size: 16px;
  padding: 10px 10px 5px 20px;
  border-radius: 5px;
  border: 1px solid var(--color_grey_middle);
  color: var(--color_grey_middle);
  background-color: white;
  font-family: var(--Roboto);
  resize: none;
  outline: none;
}

.label {
  position: absolute;
  line-height: 1;
  display: flex;
  align-items: center;
  transition: color 0.1s linear, top 0.1s linear, left 0.1s linear;
  font-size: 16px;
}

/* move label from IN to UP */
.in {
  font-family: var(--Roboto);
  color: var(--color_grey_middle);
  top: 20px;
  left: 20px;
}

.up {
  font-family: var(--RobotoBold);
  color: var(--color_grey_dark);
  top: -25px;
  left: 0;
}

.show_count {
  position: absolute;
  color: var(--color_grey_middle);
  font-size: 16px;
  font-family: var(--Roboto);
  line-height: 1;
  transition: color 0.1s linear, top 0.1s linear, right 0.1s linear;
}

.in_count {
  right: 20px;
  top: 20px;
}

.up_count {
  right: 0;
  top: -25px;
}

.error_color {
  color: var(--color_red);
}

.error_border {
  border-color: var(--color_red);
}
</style>