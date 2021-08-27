<template>
  <q-page class="flex flex-center q-pa-md bg-warning">
    <div >
      <q-card class="q-pa-xl border">
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
        <q-input
          class="q-pa-sm"
          outlined
          v-model="text"
          label="Phone Number:"
        />
        <div class="float-right">
          <q-card-actions>
            <q-btn color="primary" to="/userIdentifyer">cancel</q-btn>
            <q-btn color="primary" to="/fsigninPage2">Next</q-btn>
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      model: "",
      options: "",
    };
  },
};
</script>
<style>
  .border{
    border: 5px solid grey
  }
</style>