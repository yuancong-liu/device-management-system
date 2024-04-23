<template>
  <u-tabs :items="items" :default-index="2" class="w-full">
    <template #item="{ item }">
      <u-card class="text-slate-600 text-sm text-center">{{ item.content }}</u-card>
    </template>
  </u-tabs>
</template>

<script setup lang="ts">
type TabItem = {
  label: string;
  content: string;
};

const items: TabItem[] = [
  {
    label: 'Tab 1',
    content: 'Content 1',
  },
  {
    label: 'Tab 2',
    content: 'Content 2',
  },
  {
    label: 'Tab 3',
    content: 'Content 3',
  },
];
</script>
