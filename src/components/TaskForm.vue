<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card card-body">
    <h1 class="text-center">Create Task</h1>
      <input
        type="text"
        placeholder="Title"
        v-model="task.title"
        class="form-control mb-3"
        autofocus
      />

      <textarea
        class="form-control mb-3"
        cols="30"
        placeholder="Description"
        v-model="task.descriptions"
      ></textarea>

      <button class="btn btn-success">Upload!</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "../interfaces/Task";
import services from "../services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const task = await services.createTask(this.task);
      console.log(task);
      this.$router.push('/');
    },
  },
});
</script>
