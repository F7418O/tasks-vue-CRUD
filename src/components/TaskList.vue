<template>
  <ul class="list-group">
    <li v-for="(task, index) in tasks" :key="index" 
    @click="this.$router.push(`/tasks/${task._id}`)"
    class="list-group-item list-group-item-action"
    style="cursor: pointer">
     {{index + 1}}: {{task.title}}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import services from '../services/TaskService'
import { Task } from '../interfaces/Task';

export default defineComponent({
  name: 'TaskList',
  props: { },
  data(){
    return {
      tasks: [] as Task[]
      }
  },
  methods: {
    async loadTask(){
      const res = await services.getTasks()
      this.tasks = res.data
    }
  },
  mounted() {
    this.loadTask()
  }
});
</script>

<style scoped>

</style>