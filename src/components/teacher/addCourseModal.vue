<script setup>
import { ref } from 'vue'
import { api } from '@/api'

import { message } from 'ant-design-vue';

const direction = ref([])
const teacher = ref([])
const fetchData = async () => {
    try {
        const response = await api.get(`group/get-data`);
        direction.value = response.data.direction
        teacher.value = response.data.teacher
        console.log(response.data)
    } catch (error) {
        console.error('Error occurred:', error);
    }
};
const data = ref({
    name: null,
    mentor_id: null,
    direction_id: null,

})
const addGroupStudent = async () => {
    try {
        await api.post('/lesson/create', data._value)
        message.success('Kurs yaratildi');
        window.location.reload();
    } catch (e) {
        console.log(e)
    }
}
fetchData()

</script>

<template>
    <div>
        <div class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
        <div class="fixed top-1/2 w-1/4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white z-50 p-5">
            <div class="mb-10 flex justify-between items-center">
                <h1>O'quv kursni qo'shish</h1>
                <button @click="$emit('close')">
                    <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
                </button>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div class="col-span-2">
                    <input class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" type="text"
                        v-model="data.name" placeholder="Kurs nomini kiriting" required>
                </div>
            </div>

            <div class="flex justify-between border-b py-3 ">
                <h1 class="font-semibold  pt-4">Yo'nalish</h1>
                <select class="w-[70%] px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name="" required
                    v-model="data.direction_id">
                    <option v-for="item, index in direction" :key="index" :value="item.id">{{ item.name }}</option>
                </select>
            </div>

            <div class="flex justify-between border-b py-3 ">
                <h1 class="font-semibold  pt-4">Kurs mentori</h1>
                <select class="w-[70%] px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name="" required
                    v-model="data.mentor_id">
                    <option v-for="item, index in teacher" :key="index" :value="item.id">{{ item.name }}</option>
                </select>
            </div>


            <div class="">
                <button @click="addGroupStudent" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
                    Kursni yaratish
                </button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>