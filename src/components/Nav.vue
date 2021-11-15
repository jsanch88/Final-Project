<script setup>
import { useRouter } from "vue-router";
import useAuth from '../composable/useAuth';

const { isAuthenticated, logout} = useAuth();

const router = useRouter();

const loggingOut = () => {
    logout();
    router.push("/");
}
</script>

<template>
<div class="bg-indigo-200 text-black">
<div class = "container mx-auto flex items-center justify-between">

<h1 class="tracking-tighter text-3xl font-bold">
Oh! Sugar<span class="bg bg-indigo-300 font-normal"></span>
</h1>
    
    <nav>
        <ul class= "flex space-x-4">
        <router-link to = "/">
            <li class="bg-pink-400 py-8 px-4 hover: cursor-pointer hover:bg-purple-900 hover:text-pink-700">Home</li></router-link>

            <router-link  to = "/about">
            <li class="bg-pink-400 py-8 px-4 hover: cursor-pointer hover:bg-purple-900 hover:text-pink-700">About</li></router-link>

            <router-link v-if = "!isAuthenticated" to = "/login">
            <li class="bg-pink-400 py-8 px-4 hover: cursor-pointer hover:bg-purple-900 hover:text-pink-700">Login</li></router-link>

            <div v-else class = "flex">

            <router-link to = "/data">
            <li class="bg-pink-400 py-8 px-4 hover: cursor-pointer hover:bg-purple-900 hover:text-pink-700">Data</li></router-link>
    

            <button  @click = "loggingOut">
            <li class="bg-pink-400 py-8 px-4 hover: cursor-pointer hover:bg-purple-900 hover:text-pink-700">Logout</li></button>

            </div>

        </ul>
    </nav>
</div>
    </div>
</template>
