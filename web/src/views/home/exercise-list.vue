<template>
    <n-data-table :columns="columns" :data="exerciseList" :pagination="pagination" :bordered="false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { request } from "@/service";

type Exercise = {
    type: number
    title: string
    content: string
    options: string[]
    anwser: string
}

const exerciseList = ref([])

// const message = useMessage()
const createColumns = (): DataTableColumns<Exercise> => {
    return [
        {
            title: '序号',
            key: 'index'
        },
        {
            title: 'answer',
            key: 'answer'
        },
        {
            title: 'options',
            key: 'options'
        },
        {
            title: '题目内容',
            key: 'content'
        },
        {
            title: 'author',
            key: 'author'
        },
        {
            title: 'remarks',
            key: 'remarks'
        },
    ]
}



const columns = createColumns()
let pagination = false


const getExerciseList = async () => {
    const res = await request(`/api/exercise`);
    if (res.data?.length) {

        exerciseList.value = res.data.map((v: any, index: number) => ({
            ...v,
            index
        }));
    }
    console.log("res: ", res);
};
getExerciseList();


</script>