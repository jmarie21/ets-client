<template>
  <div class="min-h-screen flex items-center justify-center">
    <div>
      <div class="mb-12">
        <h1 class="text-4xl font-bold">Event Tabulating System</h1>
      </div>

      <div class="border border-gray-200 rounded-lg p-8 shadow-md">
        <div class="mb-4 space-y-2">
          <h1 class="text-3xl font-bold">Register</h1>
          <p class="text-md text-gray-500">Create an account.</p>
        </div>

        <div class="space-y-4 mb-8">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>

        <div class="space-y-4">
          <Button class="w-full">Register</Button>
          <p class="text-md text-gray-500 text-center">
            Already have an account?
            <NuxtLink to="/login" class="hover:text-green-500">Login</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
