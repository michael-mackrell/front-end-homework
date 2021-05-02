<template>
  <div>
        <h1><strong>Edit Number of Employees</strong></h1>
        <div class="field">
            <p>Current Number of Employees: {{numberOfEmployees}}</p>

            <div class="control">
                <input class="input" placeholder="New Number of Employees"
                type="text" v-model="num">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button v-on:click="submitNewNumber" class="button is-link">Submit</button>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'AlterNumEmployees',
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    submitNewNumber() {
      this.$emit('newValueEmployees', this.num);
    },
  },
  props: ['numberOfEmployees'],
};
</script>

<style>

</style>
