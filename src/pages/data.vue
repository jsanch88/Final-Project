<template>
<div class = "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex-auto">
<img src = "../assets/Results.jpg" >
</div>
  <p class="text-center bg-gradient-to-r from-indigo-900 via-blue-400 to-pink-700 ">
    Lets chart that glucose! Keeping track of your glucose helps you understand how foods, exercise and life affect you.
  </p>

    <input
    @change="add"
    v-model="newReading"
    type="text"
    class="px-4 py-2 text-xl text-center rounded-lg justify-center"
    placeholder="New glucose reading..."
  />
      <input
    @change="add"
    v-model="newFeeling"
    type="text"
    class="px-4 py-2 text-xl text-center rounded-lg justify-center"
    placeholder="How are you feeling?"
  />
      <input
    @change="add"
    v-model="newDate"
    type="text"
    class="px-4 py-2 text-xl text-center rounded-lg justify-center"
    placeholder="Enter Date..."
  />
      <input
    @change="add"
    v-model="newTime"
    type="text"
    class="px-4 py-2 text-xl text-center rounded-lg justify-center"
    placeholder="Enter Time..."
  />
</template>