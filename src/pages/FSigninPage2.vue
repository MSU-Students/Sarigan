<template>
  <div class="flex flex-center q-pa-xl bg-warning">
    <q-card class="q-pa-xl">
      <div class="text-h4">Create Account</div>
      <q-input class="q-pa-sm" outlined v-model="text" label="Username:" />
      <q-input
        class="q-pa-sm"
        outlined
        v-model="password"
        label="Password"
        filled
        type="password"
      />
      <q-input
        class="q-pa-sm"
        outlined
        label="Confirm Password:"
        v-model="password"
        filled
        type="password"
      >
      <q-page></q-page>
      </q-input>
      <dev class="float-right">
        <q-card-actions>
          <q-btn to="/fprofilePage">Back</q-btn>
          <q-btn>Create</q-btn>
        </q-card-actions>
      </dev>
    </q-card>
  </div>
</template>
