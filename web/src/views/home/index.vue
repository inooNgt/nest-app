<template>
  <div>
    <n-button @click="createPost">create post</n-button>
    <n-button @click="createExercise">create exercise</n-button>
    <ExerciseForm />
    <ExerciseList />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { request } from "@/service";
import { useMessage } from 'naive-ui'
import ExerciseList from "./exercise-list.vue";
import ExerciseForm from "./exercise-form.vue";
window.Message = useMessage()
const state = reactive({
  users: [],
});
const getDataList = async () => {
  const res = await request(`/api/users`);
  state.users = res;
  console.log("res: ", res);
};
// getDataList();

const createPost = async () => {
  const res = await request("/api/posts", {
    method: "post",
    body: JSON.stringify({
      title: "title-1",
      author: "ngt",
      content: "this is post content",
    }),
  });
};
const createExercise = async () => {
  const res = await request("/api/exercise", {
    method: "post",
    body: JSON.stringify({
      type: 1,
      author: "ngt",
      answer: 'A',
      analysis: '...',
      options: 'A@B@C@D',
      content: "this is exercise content1",
    }),
  });
};


</script>
