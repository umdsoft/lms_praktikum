<script setup>
import { ref } from 'vue'
import { api } from '@/api'
import { message } from 'ant-design-vue';
const candidate = ref([])
const student = ref(null)
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
  social_status_id: null,
  student_uid: null,
})
const checkStudent = async (id) => {
  try {
    const response = await api.get(`student/by-code/${id}`);
    if (response.data.msg == 'u-n') {
      return message.error('Foydalanuvchi topilmadi');
    }
    student.value = response.data.data
  } catch (error) {
    console.log(error)
  }
}
const addGroupStudent = async () => {
  try {
    data._value.student_id = student.value.id
    // await api.post('/group/create-group-student', data._value)
    // router.push(`/groups/${data.group_id}`)
    console.log(data._value)

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
        <h1>O'quvchini guruhga qo'shish</h1>
        <button @click="$emit('close')">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>

      <div class="relative w-full">
        <input class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" type="text"
          placeholder="ID raqamni kiriting" v-model="data.student_uid">
        <Icon @click="checkStudent(data.student_uid)" class="absolute top-1/2  right-3 -translate-y-1/2 "
          icon="mingcute:search-line" width="26" height="26" />
      </div>
      <div v-if="student != null">
        <div class="my-5">
          <div class="flex justify-between border-b py-3 ">
            <h1 class="font-semibold">F.I.O</h1>
            <p class="text-gray-500">{{ student.full_name }}</p>
          </div>
          <div class="flex justify-between border-b py-3 ">
            <h1 class="font-semibold">Telefon raqami</h1>
            <p class="text-gray-500">{{ student.phone }}</p>
          </div>
          <div class="flex justify-between border-b py-3 ">
            <h1 class="font-semibold">ID raqami</h1>
            <p class="text-gray-500">{{ student.code }}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <p class="font-semibold">Ijtimoiy status</p>
            <select class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name=""
              v-model="data.project_id">
              <option v-for="item, index in candidate[0]" :key="index" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div>
            <p class="font-semibold">Loyiha nomi</p>
            <select class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name=""
              v-model="data.social_status_id">
              <option v-for="item, index in candidate[1]" :key="index" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div class="col-span-2">
            <input class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" type="text"
              v-model="data.amount" placeholder="Summani kiriting">
          </div>
        </div>


        <div class="">
          <button @click="addGroupStudent" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
            Guruhga qo‘shish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>