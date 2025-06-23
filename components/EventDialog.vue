<script lang="ts" setup>
const props = defineProps({
  triggerButtonText: {
    type: String,
  },
  dialogTitle: {
    type: String,
  },
  dialogDescription: {
    type: String,
  },
});

const isOpen = ref(false);
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button> {{ triggerButtonText }} </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{{ dialogTitle }}</DialogTitle>
        <DialogDescription>
          {{ dialogDescription }}
        </DialogDescription>
      </DialogHeader>

      <slot />
    </DialogContent>
  </Dialog>
</template>
