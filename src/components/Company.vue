<template>
  <div>
    <div class="card">
    <header class="card-header">
        <p class="card-header-title">
        {{companyProperties.name}}
        <br>
        {{companyProperties.id}}
        </p>
    </header>

    <div class="card-content">
      <button v-on:click="navigateToView">View</button>
        <button v-on:click="navigateToEdit">Edit</button>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Company',
  props: ['companyProperties'],
  methods: {
    navigateToEdit() {
      this.$router.push({ name: 'edit', params: { companyToEdit: this.companyProperties } });
    },
    navigateToView() {
      this.$router.push({ name: 'view', params: { companyToView: this.companyProperties } });
    },
  },
};
</script>

<style>

</style>
