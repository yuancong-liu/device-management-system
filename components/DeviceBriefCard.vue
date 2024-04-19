<template>
  <u-card>
    <template #header>
      <div class="flex flex-col">
        <span class="font-bold">{{ device.id }}</span>
        <span class="text-sm text-slate-500">
          {{ device.details.model }}
          {{ device.details.chip && ` - ${device.details.chip}` }}
        </span>
      </div>
    </template>
    <div class="flex w-full flex-col gap-2">
      <div class="flex justify-center">
        <u-skeleton class="h-36 w-36" />
      </div>
      <span class="font-bold">{{ deviceStatus }}</span>
      <div v-if="device.user" class="flex items-baseline gap-2">
        <u-button color="black" variant="link" :padded="false">
          <span>{{ device.user?.name }}</span>
        </u-button>
        <span class="text-xs text-slate-500">/ {{ device.user?.id }}</span>
      </div>
      <div v-else class="">
        <u-button variant="link" :padded="false">
          <span>Assign a user</span>
        </u-button>
      </div>
    </div>
    <template #footer>
      <div class="flex w-full justify-end">
        <u-button @click="handleClick">Details</u-button>
      </div>
    </template>
  </u-card>
</template>

<script setup lang="ts">
import type { Device, DeviceStatus } from '~/types/device';
import { DEVICE_STATUS } from '~/constants/device';

const props = defineProps<{
  device: Device;
}>();

const emits = defineEmits(['selectDevice']);

const handleClick = () => {
  emits('selectDevice', props.device.id);
};

const deviceStatus = computed(() => {
  return DEVICE_STATUS[props.device.status as DeviceStatus];
});
</script>
