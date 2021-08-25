<template>
  <div class="flex flex-center q-pa-md"> 
    <q-card class="q-pa-xl">
      <div class="text-h3"> Student Sign Up</div>
      <q-input class="q-pa-sm" outlined v-model="text" label="Given Name:"/>
      <q-input class="q-pa-sm" outlined v-model="text" label="Last Name:"/>
      <q-input class="q-pa-sm" outlined v-model="text" label="ID Number:"/>
      <q-select class="q-pa-sm" outlined v-model="model" :options="options" label="Course" />
      <q-select
        class="q-pa-sm"
        outlined
        v-model="model"
        :options="options"
        label="Department:"
      />
      <q-input class="q-pa-sm" outlined v-model="text" label="Academic Adviser:"/>
      <q-input class="q-pa-sm" outlined v-model="text" label="Home Address:" />
      <dev class="q-pa-sm">
        <q-input class="q-pa-sm" outlined v-model="text" :options="options" label="Gmail:" />
        <q-input class="q-pa-sm" outlined v-model="text" label="Phone Number:" />
      </dev>
      <dev  class="float-right">
      <q-card-actions>
        <q-btn to="/SProfilePage2">Next</q-btn>
      </q-card-actions>
      </dev>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
