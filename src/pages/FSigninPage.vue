<template>
  <div class="flex flex-center q-pa-md bg-warning">
    <q-card class="q-pa-xl border-grey">
      <div class="text-h4">Faculty Signin Page</div>
      <q-input class="q-pa-sm" outlined v-model="text" label="Given Name:" />
      <q-input class="q-pa-sm" outlined v-model="text" label="Last Name:" />
      <q-input class="q-pa-sm" outlined v-model="text" label="College:" />
      <q-select
        class="q-pa-sm"
        outlined
        v-model="text"
        label="Department:"
      />
      <q-input class="q-pa-sm" outlined v-model="text" label="Expertise:" />
      <q-input
        class="q-pa-sm"
        outlined
        v-model="text"
        label="Gmail"
      />
      <q-input class="q-pa-sm" outlined v-model="text" label="Phone Number:" />
      <div class="float-right">
        <q-card-actions>
          <q-btn to="/userIdentifyer">Cancel</q-btn>
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
      text: ''
    };
  },
};
</script>
<style>
  .border-grey{
    border: 5px solid grey;
  }
</style>
