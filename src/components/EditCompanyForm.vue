<template>

<div class="card">
    <header class="card-header">
        <p class="card-header-title">
        Edit {{company.name}}
        </p>
    </header>

    <div class="card-content">
      <div class="field">
        <label class="label">Name: {{company.name}}</label>
        <div class="control">
            <input class="input" type="text" placeholder="New Name" v-model="name">
        </div>
      </div>

      <div class="field">
        <label class="label">Domain: {{company.domain}}</label>
        <div class="control">
            <input class="input" v-model="domain" placeholder="New Domain" type="text" >
        </div>
      </div>

      <div class="field">
        <label class="label">Number Of Employees: {{company.numberOfEmployees}}</label>
        <div class="control">
            <input class="input" v-model="num" placeholder="New number of Employees" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">
            Subscriptions Per Employee: {{company.subscriptionsPerEmployee}}
        </label>
        <div class="control">
            <input class="input"
            placeholder="New number of Subscriptions" v-model="subs" type="text">
        </div>
      </div>

        <div class="field is-grouped">
            <div class="control">
                <button v-on:click="submitForm" class="button is-link">Submit</button>
            </div>
        </div>
    </div>

    <footer class="card-footer">

    </footer>

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
      num: 0,
      subs: 0,
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
      this.editCompany(editedCompany);
      // navigate back to main page
      alert('Company Edited ', editedCompany);
      this.$router.push({ name: 'home' });
    },
  },
};

</script>

<style>

</style>
