<template>
  <div>
    <n-button @click="createPost">create post</n-button>
    <ul>
      {{
        state.users
      }}
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { request } from "@/service";
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
</script>
