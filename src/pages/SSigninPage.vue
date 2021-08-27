<template>
  <q-page class="border rounded-borders">
        <div class="text-h3">Student Sign Up</div>
        <hr>
        <h6 class="q-pt-sm">Given Name:
        <q-input outlined/>
        </h6>
        
        <q-input class="q-pa-sm" outlined v-model="text" label="Last Name:" />
        <q-input class="q-pa-sm" outlined v-model="text" label="ID Number:" />
        <q-select class="q-pa-sm" outlined label="Course" />
        <q-select class="q-pa-sm" outlined label="Department:" />
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
        <dev class="q-pa-sm">
          <q-input class="q-pa-sm" outlined v-model="text" label="Gmail:" />
          <q-input
            class="q-pa-sm"
            outlined
            v-model="text"
            label="Phone Number:"
          />
        </dev>
        <dev class="float-right">
          <q-card-actions>
            <q-btn to="/UserIdentifyer">cancel</q-btn>
            <q-btn to="/ssigninPage2">Next</q-btn>
          </q-card-actions>
        </dev>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>
<style>
.border {
  border: 50px solid grey;
}
</style>
