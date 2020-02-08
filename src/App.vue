<template>
  <div id="app">
    <Header />
    <img class="character" src="./assets/character.png">
    <p>This is an interactive single page app built using Vue.js. It's designed to take you through multiple steps and tasks to prepare for an adventure. Continue scrolling to complete the components as they go and enjoy! <i>(in production with more to be added soon)</i></p>
    <button v-scroll-to="'#calendar-header'">
      Go to step one.
    </button>
    <Calendar />
    <button v-scroll-to="'#todo-header'">
      Go to step two.
    </button>
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

h3 { 
  font-size: 32px; 
  text-align: center; 
  padding: 20px;
}

button {
  border: none;
  border-radius: 5px;
  background-color: #0f0a3c;
  color: #cdffeb;
  padding: 30px;
  font-size: 14px;
  transition: all 0.5s ease;
  outline: none;
}

button:hover {
  background-color: #009f9d;
  transition: all 0.5s ease;
}
.character {
  padding: 100px 0 20px;
  width: 100px;
  height: 100px;
}

p { text-align: center; padding: 20px 200px }

@media only screen and (max-width: 850px) {
  p { padding: 0 60px; }
}

@media only screen and (max-width: 650px) {
  p { padding: 0 20px; }
  .character { 
    padding: 60px 0 20px; 
    width: 80px; 
    height: 80px; 
  }
}

</style>
