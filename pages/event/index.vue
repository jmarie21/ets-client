<script lang="ts" setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="flex flex-col p-10">
    <div class="flex justify-between w-full mb-6">
      <h1 class="text-2xl font-bold">Event Management</h1>
      <EventDialog
        triggerButtonText="Create Event"
        dialogTitle="Create New Event"
        dialogDescription="Fill in the details below to create a new event."
      >
        <form class="space-y-4">
          <div>
            <label class="text-sm text-gray-600">Event Name</label>
            <Input type="text" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Event Description</label>
            <Input type="text" />
          </div>

          <div class="flex flex-col">
            <label class="text-sm text-gray-600">Date</label>
            <DatePicker class="w-full" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Event Type</label>
            <Input type="text" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Location</label>
            <Input type="text" />
          </div>
        </form>

        <DialogFooter>
          <Button type="submit" class="w-full"> Create Event </Button>
        </DialogFooter>
      </EventDialog>
    </div>

    <Separator />
  </div>
</template>
