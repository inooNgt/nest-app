<template>
    <n-radio-group v-model:value="size" name="left-size" style="margin-bottom: 12px">
        <n-radio-button value="small">
            小
        </n-radio-button>
        <n-radio-button value="medium">
            中
        </n-radio-button>
        <n-radio-button value="large">
            大
        </n-radio-button>
    </n-radio-group>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" :size="size">
        <n-form-item label="题目类型" path="content">
            <n-radio-group v-model:value="formValue.type" name="left-size" style="margin-bottom: 12px">
                <n-radio-button v-for="item in exTypeList" :value="item.value" :key="item.value">
                    {{ item.name }}
                </n-radio-button>
            </n-radio-group>
        </n-form-item>
        <n-form-item label="题目内容" path="content">
            <n-input v-model:value="formValue.content" type="textarea" />
        </n-form-item>
        <n-form-item label="题目选项" path="options">
            <n-input v-model:value="formValue.options" type="textarea" />
        </n-form-item>
        <n-form-item label="答案" path="answer">
            <n-radio-group v-model:value="formValue.answer" name="left-size" style="margin-bottom: 12px">
                <n-radio-button v-for="value in answerList" :value="value" :key="value">
                    {{ value }}
                </n-radio-button>
            </n-radio-group>
        </n-form-item>
        <n-form-item label="解析" path="analysis">
            <n-input v-model:value="formValue.analysis" type="textarea" />
        </n-form-item>
        <n-form-item>
            <n-button attr-type="button" @click="submit">
                提交
            </n-button>
        </n-form-item>
    </n-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FormInst, useMessage } from 'naive-ui'
import { request } from "@/service";

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = ref<'small' | 'medium' | 'large'>('medium')
const exTypeList = [{
    value: 1,
    name: '言语理解',

}, {
    value: 2,
    name: '数量关系'
},
{
    value: 3,
    name: '推理判断'
}]
const answerList = ['A', 'B', 'C', 'D']
const formValue = ref({
    content: '',
    options: `A.
B.
C.
D.`,
    answer: '',
    type: 1,
    analysis: '',
    author: '',
})

const createExercise = async () => {
    const res = await request("/api/exercise", {
        method: "post",
        body: JSON.stringify({ ...formValue.value }),
    });
    console.log('created', res)
};

const rules = {
    content: {
        required: true,
        message: '请输入内容',
        trigger: 'blur'
    },
    type: {
        required: true,
        message: '请输入题目类型',
        trigger: 'blur'
    },
    options: {
        required: true,
        message: '请输入题目选项',
        trigger: ['input', 'blur']
    },
    answer: {
        required: true,
        message: '请输入答案',
        trigger: ['blur']
    },
    analysis: {
        required: true,
        message: '请输入题目解析',
        trigger: ['blur']
    }
}

function submit(e: MouseEvent) {
    e.preventDefault()
    formRef.value?.validate((errors) => {
        if (!errors) {
            createExercise()
            message.success('Valid')
        } else {
            console.log(errors)
            message.error('Invalid')
        }
    })
}

</script>