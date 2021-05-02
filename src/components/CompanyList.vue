<template>
  <div>
      <h2>Company List</h2>
      <Company v-for="comp in getAllCompanies"
       v-bind:companyProperties="comp"
        v-bind:key="comp.id" ></Company>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Company from './Company.vue';

export default {
  name: 'CompanyList',
  components: {
    Company,
  },
  // data() {
  //   return {
  //     companies: [],
  //   };
  // },
  computed: {
    ...mapGetters(['getAllCompanies']),
  },
  methods: {
    ...mapActions(['setCompanies']),
  },
  created() {
    this.setCompanies();
  },
};
</script>

<style>

</style>
