<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';
import Pagination from '@/components/Pagination.vue';
import { api } from '@/api'
import { useRouter } from 'vue-router'
import { useDebouncedRef } from '@/composables/debouncedRef.js'
import dateformat from "dateformat";
import addCourseModal from '../../../components/teacher/addCourseModal.vue';
const users = ref([])

const search = useDebouncedRef('', 1000)
const totalUsers = ref()
const currentPage = ref(1)
const totalPages = ref(1)
const router = useRouter()
const isAddModal = ref(false)

function dateFormat(date) {
  let date1 = dateformat(date, "dd.mm.yyyy");
  return date1;
}
const fetchData = async () => {
  try {
    const response = await api.get(`lesson/get-all${search.value ? `?search=${search.value}&` : '?'}limit=15&skip=${currentPage.value * 15 - 15} `);
    users.value = response.data.data
    totalUsers.value = response.data.total
    totalPages.value = Math.ceil(response.data.total / 15)
    currentPage.value
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const openModule = async (id) => {
  router.push({ name: 'lesson-module', params: { id: id } })
}

fetchData()


watch(currentPage, () => {
  fetchData()
})
watch(search, () => {
  fetchData()
})


const goToPage = (page) => {
  currentPage.value = page;
}
</script>

<template>
  <div>
    <div class="">
      <div>
        <div class="overflow-x-auto bg-white sm:rounded-lg">
          <div class="p-6 flex items-center justify-between mb-10">
            <h1 class="text-xl text-[#29A0E3] font-medium">Kurslar ro‘yhati</h1>
            <div class="flex items-center gap-2">
              <addCourseModal v-if="isAddModal" @close="isAddModal = false" />
              <button
                class="bg-[#29A0E31A]  py-2.5 px-8 rounded flex  items-center text-[#29A0E3] hover:bg-[#114E7B] hover:text-white">
                Filter
              </button>
              <button @click="isAddModal = true"
                class="bg-[#166199] rounded py-2.5 px-5 flex gap-1 items-center text-white">
                <Icon class="text-lg" icon="ep:plus" />
                Qo'shish
              </button>
            </div>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-base text-gray-700  text-center">
              <tr>
                <th class="px-6 py-3  ">#</th>
                <th class="px-6 py-3 ">Yo'nalish</th>
                <th class="px-6 py-3 ">Kurs nomi</th>
                <th class="px-6 py-3 ">Modullar soni</th>
                <th class="px-6 py-3">Kurs turi</th>
                <th class="px-6 py-3">Status</th>
                <th class="px-6 py-3">Vaqti</th>
              </tr>
            </thead>

            <tbody v-if="users.length > 0" class="text-center">
              <tr v-for="item, index in users" :key="index" @click="openModule(item.id)"
                class=" border-b text-gray-900 font-medium hover:bg-gray-50 " style="cursor: pointer;">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {{ (currentPage - 1) * 10 + index + 1 }}
                </th>
                <td class="px-6 py-4">
                  {{ item.direction_name }}
                </td>
                <td class="px-6 py-4">
                  {{ item.name }}
                </td>
                <td class="px-6 py-4">
                  {{ item.module_count }}
                </td>
                <td class="px-6 py-4">
                  <span class="text-emerald-700 font-medium" v-if="item.lesson_type == 1">Asosiy</span>
                  <span class="text-yellow-500 font-medium" v-if="item.lesson_type == 2">Qo'shimcha</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-emerald-700 font-medium" v-if="item.lesson_status == 1">Aktiv</span>
                  <span class="text-red-500 font-medium" v-if="item.lesson_status == 2">Aktiv emas</span>
                </td>
                <td class="px-6 py-4">
                  {{ dateFormat(item.created) }}
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
            @change="goToPage" @next-page="currentPage++" @previous-page="currentPage--" :to_page="to_page"
            :from_page="from_page" />
        </div>
      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped></style>