<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
import useError from "../composable/useError";

import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

const { isAuthenticated, login, signup, googleLogin} = useAuth();

const router = useRouter();

const loggingIn = async () => {
    await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const google = async () => {
  await googleLogin();
  goToHome();
};

const goToHome = () => {
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid email or password");
    start();
  }
};

const { error, setError } = useError();

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { ready, start } = useTimeout(5000, {controls: true});

</script>

<template>
<div class="flex flex-col  space-y-12 items-center justify-center  min-h-screen-nonav">


<div class="bg-pink-400 flex justify-center overflow-hidden items-center border-4 rounded-lg shadow-2xl ">
<img class="h-64" src = "../assets/bglogin.png" alt = "Hello BG">
<form @submit.prevent = "loggingIn" class = "flex flex-col p-4 space-y-4 ">

    <input
    name = "username"
     type = "text" class = "bg-gray-100 border-2 rounded-lg" placeholder = "Email" v-model = "username" />
     <span class = "text-indigo-700 text-center text-xs">{{emailError}}</span>

    <input
    name = "password"
     type = "password"  class = "bg-gray-100 border-2 rounded-lg" placeholder = "Password" v-model = "password" />
     <span class = "text-indigo-700 text-center text-xs">{{passwordError}}</span>

    <div class = "flex space-x-2">
    <button type = "submit" @submit.prevent = "loggingIn" class = " w-3/4 py-2 bg-gray-400 font-semibold rounded-lg">Login</button>

    <button @click = "signingUp" class = "w-3/4 py-2 bg-purple-400 font-semibold rounded-lg">Sign up</button>
    </div>

    
<button 
@click = "google"
class = "bg-black flex justify-center py-2 rounded-lg hover:bg-white">
  <img src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
  alt = ""
  />
</button>

</form>



</div>

<div v-if = " !ready && error "
      class="absolute w-1/3 p-4 text-center text-white bg-purple-800 rounded-lg  bottom-2 right-2">
{{error}}
</div>

</div>
</template>