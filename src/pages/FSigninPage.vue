<template>
  <div class="flex flex-center q-pa-md bg-warning">
    <q-card class="q-pa-xl">
      <div class="text-h4">Faculty Signin Page</div>
      <q-input class="q-pa-sm" outlined v-model="text" label="Given Name:" />
      <q-input class="q-pa-sm" outlined v-model="text" label="Last Name:" />
      <q-input class="q-pa-sm" outlined v-model="text" label="College:" />
      <q-select
        class="q-pa-sm"
        outlined
        v-model="model"
        :options="options"
        label="Department:"
      />
      <q-input class="q-pa-sm" outlined v-model="text" label="Expertise:" />
      <q-input
        class="q-pa-sm"
        outlined
        v-model="text"
        :options="options"
        label="Gmail:"
      />
      <q-input class="q-pa-sm" outlined v-model="text" label="Phone Number:" />
      <div class="float-right">
        <q-card-actions>
          <q-btn to="/userIdentifyer">cancel</q-btn>
          <q-btn to="/fsigninPage2">Next</q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:'',
      model:'',
      options:''
    };
  },
};
</script>
