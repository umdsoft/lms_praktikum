<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const cardInfo = [
    {name: "Web designer", time: "28-avgust, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "4-iyun, 08:10", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "24-may, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "15-sentyabr, 17:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "19-iyul, 20:19", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "10-iyul, 10:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "28-avgust, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "4-iyun, 08:10", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "24-may, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "15-sentyabr, 17:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "19-iyul, 20:19", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "10-iyul, 10:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "28-avgust, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "4-iyun, 08:10", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "24-may, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "15-sentyabr, 17:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "19-iyul, 20:19", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "10-iyul, 10:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "28-avgust, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "4-iyun, 08:10", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "24-may, 16:38", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "15-sentyabr, 17:00", status: "Praktikum Academy • Remote"},
    {name: "Web designer", time: "19-iyul, 20:19", status: "Praktikum Academy • Offline"},
    {name: "Web designer", time: "10-iyul, 10:00", status: "Praktikum Academy • Remote"},
    // Add more items as needed
];

const selectedCard = ref(null);

const selectCard = (card) => {
    selectedCard.value = card;
};
</script>

<template>
    <div class="flex gap-5">
        <!-- Cards List -->
        <div class="flex flex-wrap justify-between gap-5">
            <div
                v-for="(item, index) in cardInfo"
                :key="index"
                class="flex flex-col gap-5 bg-white rounded-[20px] p-4 min-w-[358px] cursor-pointer"
                @click="selectCard(item)"
            >
                <div class="flex flex-col gap-2">
                    <span class="flex justify-between items-center">
                        <p class="font-medium text-lg text-[#27A3FF] m-0">{{ item.name }}</p>
                        <p class="font-normal text-xs text-[#323232] m-0">{{ item.time }}</p>
                    </span>
                    <p class="text-[#323232] m-0">{{ item.status }}</p>
                </div>
                <div class="flex gap-1 text-[#A098AE]">
                    <Icon icon="hugeicons:location-06" />
                    <p class="m-0">Praktikum Academy</p>
                </div>
            </div>
        </div>

        <!-- Detail Module -->
        <div v-if="selectedCard" class="fixed flex flex-col gap-6 right-0 top-0 z-50 h-full w-[664px] bg-white p-6">
            <button @click="selectedCard = null" class="bg-[#F6F4F8] p-3 rounded-full w-fit">
                <Icon icon="mingcute:arrow-left-line" class="w-6 h-6" />
            </button>
            <div class="flex flex-col">
                <h2 class="text-3xl font-semibold text-[#323232] m-1">{{ selectedCard.name }}</h2>
                <p class="text-[#A098AE]" >Praktikum Academy</p>
            </div>
            <div class="flex gap-4" >
                <p>{{ selectedCard.time }}</p>
                <div class="flex gap-2">
                    <Icon icon="hugeicons:location-06" />
                    <p class="m-0">Praktikum Academy</p>
                </div>
            </div>
            <!-- Add more detailed content here based on the selected card -->
            <hr>
            <div>
                <h1 class="text-sm text-[#A098AE]" >Ish haqida</h1>
                <span>
                    <p class="mt-4 text-sm">
                        Biz o‘sib borayotgan jamoamizga qo‘shilish uchun boshlang‘ich darajadagi Web dizaynerini qidirmoqdamiz. Bu rol dizaynga ishqiboz va sohada o‘rganish va o‘sishga ishtiyoqli odam uchun juda mos keladi. Siz foydalanuvchiga qulay va vizual jozibali raqamli taassurotlar yaratish uchun katta dizaynerlar va ko‘p funksiyali jamoalar bilan yaqindan ishlaysiz. Sizning asosiy vazifalaringiz orasida foydalanuvchilarni tadqiq qilishda yordam berish, sim kadrlarni yaratish va tajribali dizaynerlar rahbarligida prototiplarni ishlab chiqish kiradi.
                    </p>
                    <p class="mt-4 text-sm">
                        Boshlang‘ich darajadagi Web dizayner sifatida siz dizayn tamoyillari haqida asosiy tushunchaga ega bo‘lishingiz va Figma, Sketch yoki Adobe XD kabi vositalarni bilishingiz lozim. Oldingi tajriba afzallik hisoblansa-da, biz asosan o‘rganishga ishtiyoqi baland va tafsilotlarga e’tiborli nomzodni izlayapmiz. Siz haqiqiy loyihalarga hissa qo‘shish jarayonida moslashuvchan dizayn, interaktiv dizayn va dizayn tizimlari bo‘yicha malakangizni oshirish imkoniyatiga ega bo‘lasiz.
                    </p>
                </span>
            </div>
            <hr>
            <div class="flex justify-between px-2">
                <span class="flex flex-col" >
                    <p class="text-[#A098AE] text-xs" >Oylik maosh</p>
                    <p class="text-[#166199]" >7 000 000 +</p>
                </span>
                <span class="flex flex-col border-l border-r px-10" >
                    <p class="text-[#A098AE] text-xs" >Murojat uchun</p>
                    <p class="text-[#323232]" >+998(93)-638-09-23</p>
                </span>
                <span class="flex flex-col text-left">
                    <p class="text-[#A098AE] text-xs" >Ish turi</p>
                    <p class="text-[#323232]" >Offline</p>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any additional styling if needed */
</style>
