<template lang="pug">
  ._wrap_input
    label.label(
      :for="bind"
      :class="invalidMin || invalidMax ? 'error_color' : ''"
    ) {{ label }}
    input.input(
      :id="bind"
      :name="bind"
      type="number"
      :min="minYear"
      :max="maxYear"
      v-model="value"
      :placeholder="label"
      :class="invalidMin || invalidMax ? 'error_color error_border' : ''"
      @input="input"
      :required="required"
    )
    .show_years(v-if="minYear || maxYear")
      span.min_year(v-if="minYear" :class="invalidMin ? 'error_color' : ''") {{ minYear }}
      span.separator(v-if="minYear || maxYear") {{ separator }}
      span.max_year(v-if="maxYear" :class="invalidMax ? 'error_color' : ''") {{ maxYear }}
</template>

<script>
export default {
  props: {
    bind: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    minYear: {
      type: [String, Number],
      required: true
    },
    maxYear: {
      type: [String, Number],
      required: true
    },
    separator: {
      type: String,
      required: false,
      default: "/"
    },
    required: {
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
      if (e.data === "e" || e.data === "E" || e.data === "-") {
        e.target.value = this.value;
        return;
      }
      if (!this.invalidMin && !this.invalidMax && this.validLength) {
        this.setData(e, this.value);
      } else {
        this.setData(e, "");
      }
    },
    setData(e, val) {
      this.$emit("input", {
        name: e.target.name,
        value: val,
        valid: !this.invalidMin && !this.invalidMax && this.validLength
      });
    }
  },
  computed: {
    invalidMin() {
      return +this.value < +this.minYear && this.value !== "";
    },
    invalidMax() {
      return +this.value > +this.maxYear && this.value !== "";
    },
    validLength() {
      return +this.value.length === 4;
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
}

.label {
  line-height: 1;
  margin: 0 auto 15px 0;
  font-size: 16px;
  font-family: var(--RobotoBold);
  color: var(--color_grey_dark);
}

.show_years {
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
