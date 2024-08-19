<script setup>
import { Icon } from '@iconify/vue';

// Define the options for the progress bar
const options = {
  text: {
    color: '#FFFFFF',
    shadowEnable: true,
    shadowColor: '#000000',
    fontSize: 14,
    fontFamily: 'Helvetica',
    dynamicPosition: false,
    hideText: false,
  },
  progress: {
    color: '#2dbd2d',
    backgroundColor: '#333333',
    inverted: false,
  },
  layout: {
    height: 35,
    width: 140,
    verticalTextAlign: 61,
    horizontalTextAlign: 43,
    zeroOffset: 0,
    strokeWidth: 30,
    progressPadding: 0,
    type: 'line',
  },
};

// Example progress value
const value = 75; // Adjust this to change the progress bar value
</script>

<template>
  <div class="flex flex-col gap-5" >
    <div class="flex justify-between gap-5">
      <!-- Card 1 -->
      <div class="flex flex-col gap-2 p-4 w-full rounded-[20px] bg-white">
        <div class="flex justify-between">
          <h2 class="text-sm font-normal text-[#A098AE]">Ball</h2>
          <div style="background-color: #DCF0FF;" class="p-2 rounded-lg">
            <Icon icon="mage:star-fill" style="color: #27A3FF;" class="text-3xl" />
          </div>
        </div>
        <span class="text-sm bg-[#D2EAFC] bg-opacity-25 -lg w-fit p-1 text-[#166199]">16-o`rin</span>
        <p class="text-[#374557] text-3xl m-0">12532</p>
      </div>

      <!-- Card 2 -->
      <div class="flex flex-col gap-2 p-4 w-full rounded-[20px] bg-white">
        <div class="flex justify-between">
          <h2 class="text-sm font-normal text-[#A098AE]">Coin</h2>
          <div style="background-color: #FFF0CA;" class="p-2 rounded-lg">
            <Icon icon="cryptocurrency:usd" style="color: #F2AE00;" class="text-3xl" />
          </div>
        </div>
        <span class="text-sm bg-[#D2EAFC] bg-opacity-25 rounded-lg w-fit p-1 text-[#166199]">12 ta mahsulot</span>
        <p class="text-[#374557] text-3xl m-0">12532</p>
      </div>

      <!-- Card 3 -->
      <div class="flex flex-col gap-2 p-4 w-full rounded-[20px] bg-white">
        <div class="flex justify-between">
          <h2 class="text-sm font-normal text-[#A098AE]">Quiz</h2>
          <div style="background-color: #C0FED8;" class="p-2 rounded-lg">
            <Icon icon="teenyicons:ab-testing-solid" style="color: #00CA81;" class="text-3xl" />
          </div>
        </div>
        <span class="text-sm bg-[#FCD2D2] bg-opacity-25 rounded-lg w-fit p-1 text-[#991616]">12 ta xato</span>
        <p class="text-[#00CA81] text-3xl m-0">126</p>
      </div>
      <div class="bg-white w-full p-2 rounded-lg">
        <div class="flex gap-3 p-4 bg-[#F6F6F8] rounded-lg">
          <div class="bg-gray-400 w-12 h-12 rounded-xl"></div>
          <div>
            <p>Web Dasturlash</p>
            <p>Farrux Bozorboyev 2024, 12-iyun</p>
          </div>
        </div>
        <div class="mt-4">
          <progress-bar
            :options="options"
            :value="value"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 p-5 bg-white rounded-2xl w-1/2">
      <h1 class="text-[#A098AE] " >Kurs mavzulari</h1>
      <!-- Tabs -->
      <div class="flex space-x-4 p-1 rounded-2xl bg-[#F6F6F8] w-fit">
        <button
          class="px-4 py-2 font-medium bg-white text-[#374557] rounded-xl focus:outline-none"
        >
          Web dasturlash
        </button>
        <button
          class="px-4 py-2 font-medium text-[#A098AE] rounded-xl hover:bg-gray-300 focus:outline-none"
        >
          Mobile dasturlash
        </button>
      </div>

      <!-- Course Topics -->
      <div class="flex gap-5">
        <!-- Card 1 -->
        <div class="flex-1 p-6 rounded-2xl bg-[#F6F4F8]">
          <span class="inline-block px-3 py-1 mb-2 text-sm font-medium text-black bg-white rounded-full">
            Bugun
          </span>
          <h3 class="mb-2 text-lg font-semibold text-gray-800">
            Web dasturlashga kirish va dasturlashning asosiy turlari
          </h3>
          <a href="#" class="text-indigo-500 hover:underline">Uyga vazifa ></a>
        </div>

        <!-- Card 2 -->
        <div class="flex-1 p-6 bg-[#F6F4F8] rounded-2xl">
          <span class="inline-block px-3 py-1 mb-2 text-sm font-medium text-black bg-white rounded-full">
            Ertaga
          </span>
          <h3 class="mb-2 text-lg font-semibold text-gray-800">
            Web dasturlashga kirish va dasturlashning asosiy turlari
          </h3>
          <p class="text-gray-400">Uyga vazifa mavjud emas</p>
        </div>
    </div>
  </div>

  </div>
</template>

<style lang="scss" scoped></style>
