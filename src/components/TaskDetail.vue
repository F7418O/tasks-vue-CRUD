<template>
  <div class="col-md-4 offset-md-4">
    <form class="card card-body" @submit.prevent="handleUpdate()">
      <h1 class="text-center">Task Detail</h1>
      <input
        type="text"
        v-model="task.title"
        class="form-control mb-3"
        autofocus
      />
      <textarea
        id=""
        cols="30"
        v-model="task.descriptions"
        class="form-control mb-3"
      ></textarea>
      <button class="btn btn-primary mb-3">Update</button>
      <button class="btn btn-danger" @click="handleDelete()">Delete</button>
    </form>
  </div>
</template>

<script lang="ts">
import services from "@/services/TaskService";
import { defineComponent } from "vue";
import { Task } from "../interfaces/Task";
export default defineComponent({
  name: "TaskDetail",
  props: {},
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
  methods: {
    async loadTask(id: string) {
      const res = await services.getTask(id);
      console.log(res.data)
      this.task = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        await services.updateTask(this.$route.params.id, this.task);
        this.$router.push('/')

      }
    },

    async handleDelete() {
      if (typeof this.$route.params.id === "string")
        await services.deleteTask(this.$route.params.id);
        this.$router.push('/')
    },
  },
  data() {
    return {
      task: {} as Task,
    };
  },
});
</script>

<style scoped>
</style>