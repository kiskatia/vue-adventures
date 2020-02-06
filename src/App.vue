<template>
  <div id="app">
    <Header />
    <Calendar />
    <TodoList />
  </div>
</template>

<script>
import Header from './components/Header';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    Header,
    Calendar,
    TodoList
  },
};
</script>

<style>
body { margin: 0; width: 100%; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

h3 { font-size: 32px; text-align: center; }

</style>
