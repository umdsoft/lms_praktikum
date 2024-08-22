<script setup>
import VacancyCard from '../../components/VacancyCard.vue';


</script>

<template>
    <div class="flex flex-col gap-5" >
        <div class="flex gap-5" >
            <select class="border border-slate-200 rounded-lg min-w-[300px] px-4 py-2 text-[#A4A4A4]" name="" id="">
                <option value="">Ish turi</option>
                <option value="">Remote</option>
                <option value="">Offline</option>
            </select>
            <select class="border border-slate-200 rounded-lg min-w-[300px] px-4 py-2 text-[#A4A4A4]" name="" id="">
                <option value="">Manzil</option>
                <option value="">Remote</option>
                <option value="">Offline</option>
            </select>
        </div>        
        <div class="">
            <VacancyCard/>
        </div>        
    </div>
</template>
