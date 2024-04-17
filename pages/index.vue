<template>
  <v-container class="w-full grid grid-cols-5 gap-4">
    <device-brief-card v-for="device in devices" :key="device.id" />
  </v-container>
</template>

<script setup lang="ts">
import type { Device } from '~/types/devices';

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
];
</script>
