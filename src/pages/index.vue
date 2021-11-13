<script setup>
import useAuth from '../composable/useAuth';
const { isAuthenticated, user } = useAuth();
</script>

<template>
<div class="flex flex-col  space-y-12 items-center justify-center  min-h-screen-nonav">
<h2 class = "text-6xl tracking-tighter font-extralight">Welcome <span v-if = "isAuthenticated">{{ user }}</span></h2>
<img src = "../assets/bgindex.png" alt = "Hello BG">
</div>
</template>