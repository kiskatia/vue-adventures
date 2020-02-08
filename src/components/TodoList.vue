<template>
  <div class="todo-container">
    <h3 id="todo-header">Second, put together a task list for the adventure.</h3>
    <div id="todo">
      <form @submit.prevent="addItem">
        <input type="text" id="new-todo" v-model="newTodo" placeholder="Tasks for adventure?"/>
        <button type="submit">+</button>
      </form>
      <transition-group name="slide" tag="div" class="todos">
        <div v-for="(item, index) in todos" class="item" :class="{done: item.done}" :key="item.id">
          <label>
            <input type="checkbox" v-model="item.done"/>
            <span>{{item.text}}</span>
          </label>
          <button type="button" @click="removeItem(index)">&times;</button>
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
    removeItem(index) {
      this.todos.splice(index, 1);
    }
  }
}; 
</script>

<style scoped>

.todo-container { padding: 150px 0; margin: auto 200px; }

#todo {
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(#258e8e, #85e0e0);
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}

h1 { 
  font-size: 30px;
  color: white; 
  padding: 20px 0 0 20px;
  font-weight: 400;
  text-align: left;
}

h2 { 
  font-size: 20px; 
  font-weight: 400; 
  padding: 20px 0 20px 20px;
  font-weight: 400;
  text-align: left;
}

button {
  margin: 0;
  padding: 0;
  color: black;
  background: none;
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 40px;
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.25s ease;
}

form {
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

input[type="text"] {
  width: 90%;
  padding: 10px 20px;
  font-size: 20px;
  background: transparent;
  color: #cdffeb;
  background: #0f0a3c;
  outline: 0;
  border: 0;
  transition: all ease-out 0.3s;
}

input[type="text"]::placeholder { color: #cdffeb; }

input[type='checkbox'] { appearance: none; display: none; }

.item {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 14px;
  font-size: 28px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
}
.item:hover { background-color: rgba(255, 255, 255, 0.15); }

.item label {
  width: 100%;
  padding: 20px 40px;
  font-size: 20px;
  word-break: break-word;
  cursor: pointer;
}

.item.done span { color: #258e8e; position: relative; }

.item.done span::before {
  content: '';
  position: absolute;
  width: 100%;
  right: 0;
  top: 50%;
  border-bottom: 0.1rem solid #258e8e;
}

form button, .item button { width: 15%; }

.item button { line-height: 1.0; opacity: 0; }

.item:hover button { opacity: 1; background-color: transparent;}

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

@media only screen and (max-width: 850px) {
  .todo-container { padding: 40px 0; margin: auto 60px; }
}
@media only screen and (max-width: 650px) {
  .todo-container { margin: auto 20px; }
}
</style>