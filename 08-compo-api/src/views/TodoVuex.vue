<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>Pendientes: {{ pending.length }}</h4>
  <hr />
  <!-- <h4>Todos: {{ all.length }}</h4>
  <h4>Completados: {{ completed.length }}</h4> -->
  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Todos
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pendientes
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completados
  </button>
  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>
  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h1>Nueva tarea</h1>
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTodo(text); isOpen=false">
        <input type="text" placeholder="Ingrese un todo" v-model="text" />
        <br />
        <br />
        <button type="submit">Guardar todo</button>
      </form>
    </template>
  </modal>
</template>

<script>
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal";
export default {
  components: { Modal },
  setup() {
    const {
      getTodosByTab,
      toggleTodo,
      currentTab,
      pending,
      createTodo,
      isOpen,
      openModal,
      closeModal,
      text,
    } = useTodos();
    return {
      closeModal,
      createTodo,
      currentTab,
      getTodosByTab,
      isOpen,
      openModal,
      pending,
      text,
      toggleTodo,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed {
  text-decoration: line-through;
}
</style>
