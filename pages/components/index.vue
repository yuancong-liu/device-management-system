<template>
  <u-container class="mx-0 flex w-full flex-col gap-8">
    <h2 class="text-2xl font-bold text-slate-700">Button</h2>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <u-button>Button</u-button>
      <u-button variant="link">Button</u-button>
      <u-button variant="soft">Button</u-button>
      <u-button variant="outline">Button</u-button>
      <u-button variant="ghost">Button</u-button>
      <u-button color="white">Button</u-button>
    </u-container>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <u-button>Button</u-button>
      <u-button :ui="{ rounded: 'rounded-full' }">Button</u-button>
    </u-container>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <u-button>Button</u-button>
      <u-button icon="i-heroicons-pencil-square">Button</u-button>
      <u-button icon="i-heroicons-pencil-square" />
    </u-container>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <u-button>Button</u-button>
      <u-button disabled>Button</u-button>
      <u-button loading>Button</u-button>
      <u-button color="gray">
        <template #leading>
          <u-avatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            size="2xs"
          />
        </template>
        Button
      </u-button>
    </u-container>

    <u-divider />

    <h2 class="text-2xl font-bold text-slate-700">Input</h2>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <u-input placeholder="input" />
      <u-input type="password" placeholder="password" />
      <u-input type="number" placeholder="number" />
      <u-input
        type="search"
        icon="i-heroicons-magnifying-glass-20-solid"
        placeholder="search"
      />
      <u-input type="file" />
      <u-input type="time" />
      <u-input type="month" />
      <u-input type="range" />
    </u-container>

    <u-divider />

    <h2 class="text-2xl font-bold text-slate-700">Tabs</h2>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <sample-tabs />
    </u-container>

    <u-divider />

    <h2 class="text-2xl font-bold text-slate-700">Group</h2>
    <u-container class="mx-0 flex flex-wrap justify-start gap-4 px-0 sm:px-0">
      <u-button-group>
        <u-button color="white">Button</u-button>
        <u-button icon="i-heroicons-chevron-down-20-solid" color="gray" />
      </u-button-group>
      <u-button-group>
        <u-button icon="i-heroicons-clipboard-document" color="gray" />
        <u-input />
      </u-button-group>
    </u-container>

    <u-divider />
  </u-container>
</template>

<script setup lang="ts"></script>
