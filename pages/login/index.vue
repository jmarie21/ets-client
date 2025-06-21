<script lang="ts" setup>
import { useLoginUser } from "~/composables/auth/useLoginUser";

const email = ref("");
const password = ref("");

const errorMessage = ref<Record<string, string[]>>();
const cookieToken = useCookie("token");

const handleLogin = async () => {
  try {
    const response = await useLoginUser({
      email: email.value,
      password: password.value,
    });

    console.log(response);
    cookieToken.value = response.token;
    email.value = "";
    password.value = "";
    navigateTo("/dashboard");
  } catch (error: any) {
    if (error?.data?.errors) {
      errorMessage.value = error?.data?.errors;
    }
    console.error(`Error during registration: ${error?.data?.errors}`);
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div>
      <div class="mb-12">
        <h1 class="text-4xl font-bold">Event Tabulating System</h1>
      </div>

      <div class="border border-gray-200 rounded-lg p-8 shadow-md">
        <form @submit.prevent="handleLogin">
          <div class="mb-4 space-y-2">
            <h1 class="text-3xl font-bold">Login</h1>
            <p class="text-md text-gray-500">
              Enter your credentials to login to your account.
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <span v-if="errorMessage?.Email" class="text-sm text-red-500">{{
              errorMessage?.Email[0]
            }}</span>
            <Input v-model="email" type="text" placeholder="Email" />
            <span v-if="errorMessage?.Password" class="text-sm text-red-500">{{
              errorMessage?.Password[0]
            }}</span>
            <Input v-model="password" type="password" placeholder="Password" />
          </div>

          <div class="space-y-4">
            <Button type="submit" class="w-full">Login</Button>
            <p class="text-md text-gray-500 text-center">
              Don't have an account?
              <NuxtLink to="/register" class="hover:text-green-500"
                >Register</NuxtLink
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
