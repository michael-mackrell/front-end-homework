<template>
  <div>
      <h1>Edit</h1>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" v-model="name">
        </div>
      </div>

      <div class="field">
        <label class="label">Domain</label>
        <div class="control">
            <input class="input" v-model="domain" type="text" >
        </div>
      </div>

      <div class="field">
        <label class="label">Number Of Employees</label>
        <div class="control">
            <input class="input" v-model="num" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Subscriptions Per Employee</label>
        <div class="control">
            <input class="input" v-model="subs" type="text">
        </div>
      </div>

        <div class="field is-grouped">
            <div class="control">
                <button v-on:click="submitForm" class="button is-link">Submit</button>
            </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditCompanyForm',
  computed: {
    ...mapGetters(['getAllCompanies']),
  },
  props: ['company'],
  data() {
    return {
      name: '',
      domain: '',
      num: '',
      subs: '',
    };
  },
  methods: {
    ...mapActions(['editCompany']),
    submitForm() {
      const editedCompany = {
        name: this.name,
        id: this.company.id,
        domain: this.domain,
        numberOfEmployees: this.num,
        subscriptionsPerEmployee: this.subs,
      };
      console.log(this.getAllCompanies);
      this.editCompany(editedCompany);
      // navigate back to main page

      this.$router.push({ name: 'home' });
    },
  },
};

</script>

<style>

</style>
