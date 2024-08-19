<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router'
import { api } from '@/api'
import { useDebouncedRef } from '@/composables/debouncedRef.js'
import dateformat from "dateformat";
import Editor from '@tinymce/tinymce-vue'
const route = useRoute()
const id = ref(route.params.id)

const users = ref([])

const search = useDebouncedRef('', 1000)
const addModule = ref(false)
const totalUsers = ref()
const currentPage = ref(1)
const totalPages = ref(1)

function dateFormat(date) {
    let date1 = dateformat(date, "dd.mm.yyyy");
    return date1;
}
const fetchData = async () => {
    try {
        const response = await api.get(`lesson/dars/${id.value}?limit=15&skip=${currentPage.value * 15 - 15} `);
        users.value = response.data.data
        totalUsers.value = response.data.total
        totalPages.value = Math.ceil(response.data.total / 15)
        currentPage.value
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

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
                    <div class="p-6 flex items-center justify-between">
                        <h1 class="text-xl text-[#29A0E3] font-medium">Darslar ro‘yhati</h1>
                    </div>

                    <div class="w-full text-sm text-left rtl:text-right p-6">
                        <div class="grid grid-cols-2 gap-3">
                            <div class="col-span-2">
                                <input class="w-[60%] px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded"
                                    type="text" placeholder="Modul nomini kiriting" required>
                            </div>
                            <div class="col-span-2">
                                <input class="w-[60%] px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded"
                                    type="text" placeholder="Modul nomini kiriting" required>
                            </div>
                            <div class="col-span-2">
                                <editor api-key="biv24lhp60f15bh0zh2my619xlc80etxbrzl3ra7o57psa4n" :init="{
                                    height: 500,
                                    menubar: true,
                                    plugins: [
                                        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export', 'codesample',
                                        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | casechange blocks | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlst checklist outdent indent | removeformat | a11ycheck code table help'
                                }" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </div>
</template>



<style lang="scss" scoped></style>