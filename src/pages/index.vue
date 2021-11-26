<script setup>
import useAuth from '../composable/useAuth';
const { isAuthenticated, user } = useAuth();
</script>

<template>
<div class="flex flex-col  space-y-12 items-center justify-center  min-h-screen-nonav bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
<h2 class = "text-6xl tracking-tighter font-extralight">Welcome <span v-if = "isAuthenticated">{{ user }}</span></h2>
<img src = "../assets/Sugar.jpg">
</div>
<div class = "bg-indigo-100 bg-center text-xl text-center">
At Oh! Sugar we believe you can keep a log of your data when it comes to your glucose. We look forward to helping you manage your diabetes as well.
</div>
</template>