<template>
  <div>
    <h1>View Company</h1>
    <ViewCompanyCard v-bind:company="companyToView"></ViewCompanyCard>
  </div>
</template>

<script>
import ViewCompanyCard from '../components/ViewCompanyCard.vue';

export default {
  name: 'ViewCompany',
  props: ['companyToView'],
  components: {
    ViewCompanyCard,
  },
};
</script>

<style>

</style>
