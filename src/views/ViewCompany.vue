<template>
  <div>
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
