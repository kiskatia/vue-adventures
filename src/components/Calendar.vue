<template>
  <div class="calendar-container">
    <h3 id="calendar-header">First, select a date range for your adventure.</h3>
    <v-date-picker
      class="calendar"
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
.calendar-container { padding: 100px 0 70px; margin: auto 200px; }

.calendar {
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}
@media only screen and (max-width: 850px) {
  .calendar-container {
    padding: 40px 0;
    margin: auto 60px; 
  }
}
@media only screen and (max-width: 650px) {
  .calendar-container {
    margin: auto 20px; 
  }
}
</style>