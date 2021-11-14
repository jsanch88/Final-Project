<script setup>
import useAuth from '../composable/useAuth';
const { isAuthenticated, user } = useAuth();
</script>

<template>
<div class="flex flex-col  space-y-12 items-center justify-center  min-h-screen-nonav bg-gray-100">
<h2 class = "text-6xl tracking-tighter font-extralight">Welcome <span v-if = "isAuthenticated">{{ user }}</span></h2>
<img src = "../assets/Sugar.jpg">
</div>
<div class = "bg-indigo-100 bg-center text-xl">
Lets monitor that glucose!
</div>
</template>