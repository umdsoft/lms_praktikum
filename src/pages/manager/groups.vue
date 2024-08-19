<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';
import Pagination from '@/components/Pagination.vue';
import { api } from '@/api'
import { useRouter } from 'vue-router'
import { useDebouncedRef } from '@/composables/debouncedRef.js'
import dateformat from "dateformat";


const open = ref(false);
const afterOpenChange = bool => {
  console.log('open', bool);
};
const showDrawer = () => {
  open.value = true;
};


const users = ref([])

const search = useDebouncedRef('', 1000)
const totalUsers = ref()
const currentPage = ref(1)
const totalPages = ref(1)
const getData = ref([])

function dateFormat(date) {
  let date1 = dateformat(date, "dd.mm.yyyy");
  return date1;
}
const fetchData = async () => {
  try {
    const datas = await api.get(`group/get-data`);
    getData.value = datas.data
    const response = await api.get(`group/get-all${search.value ? `search?search=${search.value}&` : '?'}limit=15&skip=${currentPage.value * 15 - 15} `);
    users.value = response.data.data
    console.log(users.value)
    totalUsers.value = response.data.total
    totalPages.value = Math.ceil(response.data.total / response.data.limit)
    currentPage.value
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const formData = ref({
  direction_id: null,
  day: null,
  room_id: null,
  time: null,
  start_date: null,
  duration: null
})
const createGroup = async () => {
  try {
    await api.post('/group/create', formData._value)
    // window.location.reload();
    router.push('/groups')
  } catch (e) {
    console.log(e)
  }
}
fetchData()
const router = useRouter()


watch(currentPage, () => {
  fetchData()
})
watch(search, () => {
  fetchData()
})


const goToPage = (page) => {
  currentPage.value = page;
}
const openGroup = (id) => {
  router.push({ name: 'main-group', params: { id: id } })
}


</script>

<template>
  <div>
    <div class="">
      <div>
        <div class="overflow-x-auto bg-white sm:rounded-lg">
          <div class="p-6 flex items-center justify-between mb-10">
            <h1 class="text-xl text-[#29A0E3] font-medium">Guruhlar ro'yxati</h1>
            <div class="flex items-center gap-2">
              <button class="flex  items-center text-[#29A0E3]">
                Eksport excel
                <Icon class="text-3xl" icon="material-symbols:download" />
              </button>
              <div class="relative">
                <input v-model="search" placeholder="Guruh kodi bo'yicha izlash"
                  class="focus:outline-none w-72 pr-12 border px-4 py-2 rounded" type="text">
                <Icon class="text-[#666] text-2xl absolute top-1/2 right-5 -translate-y-1/2" icon="gg:search" />
              </div>
              <!-- Create Group -->
              <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name"
                 title="Guruh yaratish" placement="right"
                @after-open-change="afterOpenChange">
                            <form @submit="createGroup" action="">
                  <div class="flex flex-col gap-5">
                    <select required class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded"
                      v-model="formData.direction_id">
                      <option v-for="item, index in getData.direction" :key="index" :value="item.id">{{ item.name }}
                      </option>
                    </select>
                    <select required class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded"
                      v-model="formData.day">
                      <option v-for="item, index in getData.day" :key="index" :value="item.id">{{ item.name }}</option>
                    </select>
                    <select required class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded"
                      v-model="formData.time">
                      <option v-for="item, index in getData.time" :key="index" :value="item.id">{{ item.name }}</option>
                    </select>
                    <select required class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded"
                      v-model="formData.room_id">
                      <option v-for="item, index in getData.room" :key="index" :value="item.id">{{ item.name }}</option>
                    </select>
                  </div>
                  <div class="mt-5">
                    <p class="text-gray-400">Kurs davomiyligi(oy)</p>
                    <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text"
                      v-model="formData.duration">
                  </div>
                  <div class="mt-5">
                    <p class="text-gray-400">Kurs boshlanish sanasi</p>
                    <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="date"
                      v-model="formData.start_date">
                  </div>

                  <button class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
                    Yaratish
                  </button>
                </form>
              </a-drawer>
                 <!-- End Create Group -->
              <button
                class="bg-[#29A0E31A]  py-2.5 px-8 rounded flex  items-center text-[#29A0E3] hover:bg-[#114E7B] hover:text-white">
                Filter
              </button>
              <button @click="showDrawer"
                class="bg-[#166199] rounded py-2.5 px-5 flex gap-1 items-center text-white">
                <Icon class="text-lg" icon="ep:plus" />
                Qo'shish
            </button>
            </div>
          </div>
          <table class="w-full text-left rtl:text-right text-gray-500 ">
            <thead class="text-base text-gray-700  text-center ">
              <tr>
                <th class="px-6 py-3 ">
                  Guruh kodi
                </th>
                <th class="px-6 py-3 ">Yo‘nalish</th>
                <th class="px-6 py-3 ">Dars kunlari</th>
                <th class="px-6 py-3 ">Dars vaqti</th>
                <th class="px-6 py-3 ">O‘quvchilar soni</th>
                <th class="px-6 py-3 ">Dars boshlangan sana</th>
                <th class="px-6 py-3 ">Status</th>
              </tr>
            </thead>
            <tbody class="text-gray-900 text-center font-medium" v-if="users.length > 0">

              <tr v-for="item, index in users" :key="index" @click="openGroup(item.id)"
                class=" border-b  hover:bg-gray-50 ">
                <td class="px-6 py-4">
                  <router-link class="text-[#29A0E3]" :to="{ name: 'main-group', params: { id: item.id } }">
                    {{ item.code }}
                  </router-link>
                </td>
                <td class="px-6 py-4">
                  {{ item.direction_name }}
                </td>
                <td class="px-6 py-4">
                  {{ item.day }}
                </td>
                <td class="px-6 py-4">
                  {{ item.time }}
                </td>
                <td class="px-6 py-4">
                  {{ item.student_count }}
                </td>
                <td class="px-6 py-4">
                  {{ dateFormat(item.start_date) }}
                </td>
                <td class="px-6 py-4">
                  <span v-if="item.status == 0" class="text-gray-700 font-medium">Yangi guruh</span>
                  <span v-if="item.status == 1" class="text-green-700 font-medium">O'quv jarayonida</span>
                  <span v-if="item.status == 2" class="text-sky-500 font-medium">Tugallagan</span>
                  <span v-if="item.status == 3" class="text-red-600 font-medium">O'chirilgan</span>
                </td>
              </tr>

            </tbody>
          </table>
          <div v-if="users.length == 0" class="my-5">
            <h1 class="text-center text-xl text-gray-500">Ma'lumot topilmadi!</h1>
          </div>
        </div>

        <div v-if="users.length > 0" class="my-10">
          <Pagination :currentPage="currentPage" :totalItems="totalUsers" :totalPages="totalPages" :visiblePages="10"
            @change="goToPage" @next-page="currentPage++" @previous-page="currentPage--" />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>



<style lang="scss" scoped></style>