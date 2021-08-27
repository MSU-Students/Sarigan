<template>
  <q-page class="bg-warning flex flex-center">
    <div class="flex flex-center q-pa-md">
      <q-card class="q-pa-xl border">
        <div class="text-h3">Student Sign Up</div>
        <q-input class="q-pa-sm" outlined v-model="text" label="Given Name:" />
        <q-input class="q-pa-sm" outlined v-model="text" label="Last Name:" />
        <q-input class="q-pa-sm" outlined v-model="text" label="ID Number:" />
        <q-select
          class="q-pa-sm"
          outlined
          v-model="model"
          :options="options"
          label="Course"
        />
        <q-select
          class="q-pa-sm"
          outlined
          v-model="model"
          :options="options"
          label="Department:"
        />
        <q-input
          class="q-pa-sm"
          outlined
          v-model="text"
          label="Academic Adviser:"
        />
        <q-input
          class="q-pa-sm"
          outlined
          v-model="text"
          label="Home Address:"
        />
        <div class="q-pa-sm">
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
        </div>
        <div class="float-right">
          <q-card-actions>
            <q-btn color="blue" to="/userIdentifyer">cancel</q-btn>
            <q-btn color="blue" to="/ssigninPage2">Next</q-btn>
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
      options: "",
      model: "",
    };
  },
};
</script>
<style>
.border {
  border: 5px solid grey;
}
</style>
