<script setup>
import { ref } from 'vue'
import { api } from '@/api'

const candidate = ref([])
const props = defineProps(['group_id'])
const fetchData = async () => {
  try {
    const response = await api.get(`group/service`);
    candidate.value = response.data.data
    console.log(candidate.value)
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const data = ref({
  student_id: null,
  group_id: props.group_id,
  project_id: null,
  amount: null,
  social_status_id: null
})
const checkStudent = async (student) => {
  try {
    const response = await api.get(`group/check-student/${student}`);
    console.log(response.data.data)
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
const addGroupStudent = async () => {
  try {
    await api.post('/group/create-group-student', data._value)
    router.push(`/groups/${data.group_id}`)

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
        <h1>O'qituvchini guruhga biriktirish</h1>
        <button @click="$emit('close')">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>

      
        <div class="flex justify-between border-b py-3 ">
          <h1 class="font-semibold">Asosiy o'qituvchi</h1>
          <select class="w-[60%] px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name=""
            v-model="data.project_id">
            <option v-for="item, index in candidate[0]" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        
        <div class="flex justify-between border-b py-3 ">
          <h1 class="font-semibold">Amaliyot o'qituvchi</h1>
          <select class="w-[60%] px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name=""
            v-model="data.project_id">
            <option v-for="item, index in candidate[0]" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
      

      <div class="">
        <button @click="addGroupStudent" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
          Guruhga qo‘shish
        </button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>