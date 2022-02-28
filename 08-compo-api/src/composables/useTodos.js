import { ref, computed } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();

  const currentTab = ref("all");
  const isOpen = ref(false);
  const text = ref("");
  return {
    currentTab,
    text,
    pending: computed(() => store.getters["pendingTodos"]),
    // all: computed(() => store.getters["allTodos"]),
    // completed: computed(() => store.getters["completedTodos"]),
    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    createTodo: (text) => store.commit("createTodo", text),
    isOpen,
    //methods
    toggleTodo: (id) => store.commit("toggleTodo", id),
    openModal: () => (isOpen.value = true),
    closeModal: () => (isOpen.value = false),
  };
};

export default useTodos;
