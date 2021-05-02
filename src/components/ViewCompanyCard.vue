<template>
  <div class="card">
    <header class="card-header">
        <p class="card-header-title">
        {{company.name}}
        </p>
    </header>

    <div class="card-content">
      <ul>
          <li><span>id: {{company.id}}</span></li>
          <li><span>domain: {{company.domain}}</span></li>
          <li><span>Number of Employees: {{company.numberOfEmployees}}</span></li>
          <li>
              <span>Subscriptions per Employee: {{company.subscriptionsPerEmployee}}</span>
          </li>
          <li>
              <span>Total Subscriptions: {{totalSubs}}</span>
          </li>
      </ul>
    </div>

    <div class="card-content">
        <alter-num-employees v-on:newValueEmployees="updateNumberOfEmployees"
            v-bind:numberOfEmployees="company.numberOfEmployees">
        </alter-num-employees>
    </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import AlterNumEmployees from './AlterNumEmployees.vue';

export default {
  name: 'ViewCompanyCard',
  props: ['company'],
  components: {
    AlterNumEmployees,
  },
  computed: {
    totalSubs() {
      return this.company.numberOfEmployees * this.company.subscriptionsPerEmployee;
    },
  },
  methods: {
    ...mapActions(['editEmployeeCount']),

    updateNumberOfEmployees(newEmployeeCount) {
      const idAndNewCount = {
        id: this.company.id,
        numberOfEmployees: newEmployeeCount,
      };
      this.editEmployeeCount(idAndNewCount);
    },
  },
};
</script>

<style>

</style>
