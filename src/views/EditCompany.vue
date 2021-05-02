<template>
  <div>
    <h1>This is the Edit page</h1>
    {{companyToEdit.name}}
  </div>
</template>

<script>

export default {
  name: 'EditCompany',
  props: ['companyToEdit'],
};
</script>
