<template>
  <u-card>
    <template #header>
      {{ iPhone.id }} - {{ iPhone.details.model }}
    </template>

    {{ iPhone.status }} - {{ iPhone.user?.name }}
    <template #footer>
      <u-button>Details</u-button>
    </template>

  </u-card>
</template>

<script setup lang="ts">
import type { Device } from '~/types/devices';

const iPhone: Device = {
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
};
</script>
