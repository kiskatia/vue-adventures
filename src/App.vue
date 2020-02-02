<template>
  <div id="app">
    <Header />
    <Calendar />
  </div>
</template>

<script>
import Header from './components/Header';
import Calendar from './components/Calendar';

export default {
  name: 'app',
  components: {
    Header,
    Calendar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
