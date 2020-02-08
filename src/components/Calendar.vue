<template>
  <div class="calendar-container">
  <h3 id="calendar-header">First, select a date range for your adventure.</h3>
  <form @submit.prevent>
    <label class="calendar-label" for="date">Select Date Range</label>
      <div>
        <v-date-picker
          mode="range"
          v-model="date"
          class="flex-grow"
          color="teal" is-dark is-expanded>
          <!--Custom Input Slot-->
          <input
            id="date"
            slot-scope="{ inputProps, inputEvents }"
            v-bind="inputProps"
            v-on="inputEvents">
        </v-date-picker>
        <!--Clear Button-->
        <button
          id="calendar-btn"
          type="button"
          @click="date = null">
          Clear
        </button>
      </div>
      <p class="false" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <p class="true" v-else>
        You're ready to go!
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  computed: {
    errorMessage() {
      if (!this.date) return 'Date is required!';
      return '';
    },
  },
};
</script>

<style scoped>
.calendar-container { padding: 100px 0 40px; margin: auto 200px; }

.calendar-input {
  padding: 100px;
  width: 40%;
}

.calendar-label { font-size: 18px; }

#calendar-btn {
  padding: 20px;
  background-color: #009f9d;
  color: #cdffeb;
}

#calendar-btn:hover { background-color: #0f0a3c; }

input {
  padding: 20px;
  margin: 10px;
  width: 40%;
  font-size: 14px;
}

.false { color: #f64b3c; }

.true { color: #29c7ac; }

p { padding: 0; }

form { padding: 30px; }

.calendar {
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
  padding: 20px;
  width: 500px;
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