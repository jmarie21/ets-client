<template>
  <nav class="fixed top-0 w-full bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Left Side: Logo -->
        <div class="text-3xl font-bold text-gray-800">
          <NuxtLink to="/">ETS</NuxtLink>
        </div>

        <!-- Right Side: Links -->
        <div class="flex space-x-6">
          <NuxtLink to="/login">
            <Button>Login</Button>
          </NuxtLink>
          <NuxtLink to="/register">
            <Button variant="outline">Register</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
