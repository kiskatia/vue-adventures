<template>
  <div class="todo-container">
    <h3>Second, put together a task list for the adventure.</h3>
    <div id="todo">
      <h1>Adventure Todo List</h1>
      <form @submit.prevent="addItem">
        <input type="text" id="new-todo" v-model="newTodo" placeholder="Tasks for adventure?" autocomplete="off"/>
        <button type="submit">+</button>
      </form>
      <transition-group name="slide" tag="div" class="todos">
        <div v-for="(item, idx) in todos" class="item" :class="{done: item.done}" :key="item.id">
          <label>
            <input type="checkbox" v-model="item.done"/>
            <span>{{item.text}}</span>
          </label>
          <button type="button" @click="removeItem(idx)">&times;</button>
        </div>
      </transition-group>  
      <h2 v-if="todos.length === 0">Make sure to have a couple tasks for your adventure!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 0, text: "Pick date range for adventure",  done: true },
        { id: 1, text: "Think about task list", done: true }
      ],
      nextId: 2
    }
  },
  methods: {
    addItem() {
      let txt = this.newTodo.trim();
      if (txt) {
        this.todos.push({ 
          id: this.nextId++,
          text: txt,
          done: false
        });
        this.newTodo = '';
      }
    },
    removeItem(idx) {
      this.todos.splice(idx, 1);
    }
  }
};
</script>

<style scoped>

.todo-container {
  margin: 200px 0;
  padding: 0;
  width: 100%;
  /*min-height: 100vh;*/
  font-family: "Bree Serif", Arial, sans-serif;
}

h1, h2 {
  /*margin: 0 0 10px 0;*/
  padding: 20px 0 0 0;
  font-weight: 400;
  text-align: center;
  white-space: pre-wrap;
  user-select: none;
}
h1 { font-size: 30px; color: white; }
h2 { font-size: 20px; font-weight: 400; }

button {
  margin: 0;
  padding: 0;
  color: black;
  background: none;
  border: 0;
  outline: 0;
  border-radius: 0.1rem;
  font-size: 4rem;
  line-height: 1.6;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s ease;
}

form {
  display: flex;
  width: 100%;
  margin-bottom: 10px; 
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

input[type="text"] {
  width: 90%;
  padding: 1rem 2rem;
  font-size: 20px;
  background: transparent;
  color: black;
  background: #258e8e;
  outline: 0;
  border: 0;
  
  transition: all ease-out 0.3s;
}
input[type="text"]:focus { 
  color: black; 
}
input[type="text"]::placeholder { color: white; }
input[type='checkbox']{
  appearance: none;
  display: none;
}

#todo {
  width: 40rem;
  max-width: 90vw;
  margin: 0 auto;
  background-image: linear-gradient(#258e8e, #85e0e0);
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}

.item {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin-bottom: 1.4rem;
  
  font-size: 1.6rem;
  border-radius: 2px;
  /*box-shadow: 0 0.5rem 0 rgba(0, 0, 0, 0.05);*/
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
  user-select: none;
}
.item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
.item label {
  width: 85%;
  padding: 1rem 2rem;
  font-size: 20px;
  line-height: 2;
  word-break: break-word;
  cursor: pointer;
}
.item.done span {
  color: #258e8e;
  position: relative;
}
.item.done span::before {
  content: '';
  position: absolute;
  width: 100%;
  right: 0;
  top: 50%;
  border-bottom: 0.1rem solid #258e8e;
}

form button, .item button {
  width: 15%;
}
.item button {
  line-height: 1.0;
  opacity: 0;
}
.item:hover button { opacity: 1; }

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter, .slide-leave-to { opacity: 0; }
.slide-enter-active { animation: slide-in 0.5s ease-out; }
.slide-leave-active { animation: slide-out 0.5s ease-out forwards; }

@keyframes slide-in {
  from { transform: translateX(32px); }
  to   { transform: translateX(0); }
}
@keyframes slide-out {
  from { transform: translateX(0); }
  to   { transform: translateX(32px); }
}

</style>