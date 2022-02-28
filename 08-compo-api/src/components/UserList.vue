<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <h1>hola mundo</h1>
    </li> -->
    <slot v-for="user in users" :key="user.id" :user="user">  <!--expone mediante scopeSlots el objeto user para ser desestructurado allá en Users-->
    </slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
