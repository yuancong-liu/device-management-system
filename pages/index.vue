<template>
  <main class="m-auto max-w-5xl py-6">
    <v-container
      class="grid w-full grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-4"
    >
      <device-brief-card
        v-for="device in devices"
        :key="device.id"
        :device="device"
        @select-device="onSelectDevice"
      />
    </v-container>

    <u-modal v-model="modalProps.isOpen">
      <u-card v-if="selectedDevice">
        <template #header>
          <h2 class="text-xl font-bold">{{ selectedDevice.id }}</h2>
        </template>
        <div class="flex flex-col">
          <div class="flex gap-2">
            <u-skeleton class="h-36 w-36" />
            <h3>{{ selectedDevice.details.model }}</h3>
          </div>
        </div>
        <template #footer>
          <div class="flex w-full justify-end">
            <u-button @click="modalProps.isOpen = false">Close</u-button>
          </div>
        </template>
      </u-card>

      <u-card v-else>
        <h2 class="text-xl font-bold">No device selected</h2>
        <template #footer>
          <div class="flex w-full justify-end">
            <u-button @click="modalProps.isOpen = false">Close</u-button>
          </div>
        </template>
      </u-card>
    </u-modal>
  </main>
</template>

<script setup lang="ts">
import type { Device } from '~/types/device';

const modalProps = ref({ isOpen: false, deviceId: '' });

const selectedDevice: Device | undefined = computed(() =>
  devices.find((device) => device.id === modalProps.value.deviceId)
);

const onSelectDevice = (deviceId: string) => {
  modalProps.value.isOpen = true;
  modalProps.value.deviceId = deviceId;
};

const devices: Device[] = [
  {
    id: 'DEV-00164',
    type: 'iPhone',
    status: 'in-use',
    lastUpdate: '2024/04/17',
    dayOfPurchase: '2024/04/17',
    user: {
      name: 'Paul LIU',
      id: 'STF-0532',
      email: 'satoshi.liu@icloud.com',
    },
    details: {
      color: 'Space Gray',
      model: 'iPhone 15 Pro Max',
      serialNumber: '1234567890',
    },
  },
  {
    id: 'DEV-00264',
    type: 'iPad',
    status: 'in-use',
    lastUpdate: '2024/04/17',
    dayOfPurchase: '2024/04/17',
    user: {
      name: 'Paul LIU',
      id: 'STF-0532',
      email: 'satoshi.liu@icloud.com',
    },
    details: {
      color: 'Space Gray',
      model: 'iPad Pro',
      serialNumber: '1234567890',
    },
  },
  {
    id: 'DEV-00364',
    type: 'MacBook',
    status: 'in-use',
    lastUpdate: '2024/04/17',
    dayOfPurchase: '2024/04/17',
    user: {
      name: 'Paul LIU',
      id: 'STF-0532',
      email: 'satoshi.liu@icloud.com',
    },
    details: {
      color: 'Space Gray',
      model: 'MacBook Pro',
      chip: 'M3 Pro',
      serialNumber: '1234567890',
    },
  },
  {
    id: 'DEV-00468',
    type: 'MacBook',
    status: 'available',
    lastUpdate: '2024/04/17',
    dayOfPurchase: '2024/04/17',
    details: {
      color: 'Space Gray',
      model: 'MacBook Pro',
      chip: 'M1 Max',
      serialNumber: '1234567890',
    },
  },
];
</script>
