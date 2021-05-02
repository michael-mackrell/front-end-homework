<template>
  <div>
    <h1>This is the home page</h1>
    <company-list></company-list>
  </div>
</template>

<script>
import CompanyList from '../components/CompanyList.vue';

export default {
  name: 'home',
  components: {
    CompanyList,
  },
};
</script>
