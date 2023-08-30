<template>
  <session class="">
    <form @submit.prevent="submitForm">
      <div class="grid content-center max-h-full h-screen">
        <div
          class="grid content-center md:grid-cols-2 w-9/12 border-white border mx-auto rounded-lg"
        >
          <div class="hidden md:flex items-center bg-white">
            <img
              class="max-w-full md:rounded-l-lg"
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1693219925~exp=1693220525~hmac=c3490d72c676b1af0fbd3852d6abf8ae4c288e6082dc9da12b564ac8d1590ca0"
              alt=""
            />
          </div>
          <div class="py-20 px-10 bg-white">
            <h1 class="text-sky-500 text-center text-2xl mb-8">Wecome</h1>

            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  stroke="currentColor"
                  class="w-4 h-4 fill-slate-400"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
              <input
                v-model="v$.username.$model"
                type="text"
                class="mt-2 py-2 pl-10 rounded-none text-sm border-b border-gray-300 p-2.5 block w-full focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Email"
              />
            </div>

            <p v-for="error of v$.$errors" :key="error.$uid">
              <small v-if="error.$property=='username'">{{ error.$message }}</small>
            </p>
            
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  class="w-5]4 h-4 fill-none stroke-slate-400 stroke-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input
                v-model="v$.password.$model"
                type="password"
                class="mt-2 py-2 pl-10 rounded-none text-sm border-b border-gray-300 p-2.5 block w-full focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Password"
              />
            </div>

            <p v-for="error of v$.$errors" :key="error.$uid">
              <small v-if="error.$property=='password'">{{ error.$message }}</small>
            </p>

            <p class="text-xs text-sky-500 text-right">Forget password?</p>
            <button
              class="hover:text-sky-400 rounded-2xl py-1 block bg-slate-800 text-white my-8 w-11/12 mx-auto"
            >
              Login
            </button>

            <div class="flex items-center py-4">
              <div class="flex-grow h-px bg-gray-300"></div>
              <span
                class="flex-shrink text-xs text-gray-400 px-4 italic font-light"
                >or</span
              >
              <div class="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </session>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email,helpers, minLength, sameAs } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return { 
      username: "",
      password: "", 
    };
  },
  validations() {
    return {
      username: { 
        required : helpers.withMessage('กรุณากรอก Username ของท่าน', required) ,
        email : helpers.withMessage('กรุณากรอกในรูปแบบของ E-mail', email) ,
      },
      password: { 
        required : helpers.withMessage('กรุณากรอก Password ของท่าน', required) ,
      },
    };
  },
  methods: {
    async submitForm () {
      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form
    }
  }
};
</script>

<style>
body {
  background-color: darkgrey;
}
</style>
