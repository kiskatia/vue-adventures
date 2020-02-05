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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
  h3 {
    font-size: 32px;
  }
</style>
