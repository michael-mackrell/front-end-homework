<template>
  <div>
    <EditCompanyForm v-bind:company="companyToEdit"></EditCompanyForm>
  </div>
</template>

<script>
import EditCompanyForm from '../components/EditCompanyForm.vue';

export default {
  name: 'EditCompany',
  props: ['companyToEdit'],
  components: {
    EditCompanyForm,
  },
};
</script>
