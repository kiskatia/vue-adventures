<template>
  <div class="calendar">
    <h3>First, select a date range for your adventure.</h3>
    <v-date-picker
      mode="range"
      :value="null"
      color="teal"
      is-dark
      is-inline
      is-expanded
      />
  </div>
</template>

<script>

</script>

<style scoped>
  .calendar {
    width: 50%;
    margin: auto;
  }
</style>