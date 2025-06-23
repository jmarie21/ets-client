<script lang="ts" setup>
import { useRegisterUser } from "~/composables/auth/useRegisterUser";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const errorMessage = ref<Record<string, string[]>>({});

const handleRegister = async () => {
  try {
    const response = await useRegisterUser({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    });

    return response;
  } catch (error: any) {
    if (error?.data?.errors) {
      errorMessage.value = error.data.errors;
    }
    console.error(`Error during registration: ${error.data.errors}`);
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
        <form @submit.prevent="handleRegister">
          <div class="mb-4 space-y-2">
            <h1 class="text-3xl font-bold">Register</h1>
            <p class="text-md text-gray-500">Create an account.</p>
          </div>

          <div class="space-y-4 mb-8">
            <span v-if="errorMessage.FirstName" class="text-sm text-red-500">{{
              errorMessage.FirstName[0]
            }}</span>
            <Input v-model="firstName" type="text" placeholder="First Name" />
            <span v-if="errorMessage.LastName" class="text-sm text-red-500">{{
              errorMessage.LastName[0]
            }}</span>
            <Input v-model="lastName" type="text" placeholder="Last Name" />
            <span v-if="errorMessage.Email" class="text-sm text-red-500">{{
              errorMessage.Email[0]
            }}</span>
            <Input v-model="email" type="text" placeholder="Email" />
            <span v-if="errorMessage.Password" class="text-sm text-red-500">{{
              errorMessage.Password[0]
            }}</span>
            <Input v-model="password" type="password" placeholder="Password" />
          </div>

          <div class="space-y-4">
            <Button type="submit" class="w-full">Register</Button>
            <p class="text-md text-gray-500 text-center">
              Already have an account?
              <NuxtLink to="/login" class="hover:text-green-500"
                >Login</NuxtLink
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
