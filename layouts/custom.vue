<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>
