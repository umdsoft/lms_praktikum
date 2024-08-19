<script setup>
import { ref } from 'vue'
import { api } from '@/api'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue';
const route = useRoute()
const data = ref({
    name: null,
    lesson_id: route.params.id

})
const addGroupStudent = async () => {
    try {
        await api.post('/lesson/module/create', data._value)
        message.success('Modul yaratildi');
        window.location.reload();
    } catch (e) {
        console.log(e)
    }
}

</script>

<template>
    <div>
        <div class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
        <div class="fixed top-1/2 w-1/4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white z-50 p-5">
            <div class="mb-10 flex justify-between items-center">
                <h1>Modulni qo'shish</h1>
                <button @click="$emit('close')">
                    <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
                </button>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div class="col-span-2">
                    <input class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" type="text"
                        v-model="data.name" placeholder="Modul nomini kiriting" required>
                </div>
            </div>

            <div class="">
                <button @click="addGroupStudent" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
                    Modul yaratish
                </button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>