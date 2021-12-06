<script setup>
  import { onUnmounted, ref } from 'vue'
  import useChat from '../composable/useChat'
  import useAuth from '../composable/useAuth'

  const { messages, unsubscribe, sendMessage } = useChat()
  const { user } = useAuth()

  const newMessage = ref('')

  const send = () => {
    sendMessage(newMessage.value)
    newMessage.value = ''
  }

  onUnmounted(() => {
    unsubscribe()
  })
</script>

<template>
  <h1 class="text-6xl font-extralight tracking-tighter text-center mt-8 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 rounded-xl">Oh! Sugar, Chat platform</h1>
  <h2 class="text-3xl font-serif tracking-tighter text-center mt-8 bg-gradient-to-r from-indigo-600 via bg-yellow-300 to-purple-900 rounded-xl text-white">Chat with other 
  people managing their diabetes or one of our staff as well.</h2>
  <div
    class="
      min-h-[500px]
      w-full
      mt-8
      rounded-lg
      shadow-2xl
      flex flex-col
      justify-between
    "
  >
    <ul class="p-4 space-y-4 bg-gray-300">
      <li v-for="message in messages" :key="message.id">
        <div
          class="flex justify-between px-4 py-2 rounded-lg"
          :class="user === message.author ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500' : 'bg-gradient-to-r from-indigo-300 via-pink-200 to-red-500'"
        >
          <span>{{ message.text }}</span
          ><span>by {{ message.author }}</span>
        </div>
      </li>
    </ul>
    <div>
      <input
        class="w-full p-4 rounded-lg focus:outline-none focus:bg-gradient-to-r from-pink-800 via-pink-500 to-indigo-500"
        type="text"
        placeholder="Type here and press enter to send..."
        v-model="newMessage"
        @change="send"
      />
    </div>
  </div>
</template>