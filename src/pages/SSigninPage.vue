<template>
  <page class="bg-amber">
    <div class="flex flex-center q-pa-md">
      <q-card class="q-pa-xl">
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
        <dev class="q-pa-sm">
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
        </dev>
        <dev class="float-right">
          <q-card-actions>
            <div>{{id}}</div>
            <q-btn to="/userIdentifyer">cancel</q-btn>
            <q-btn to="/ssigninPage2">Next</q-btn>
          </q-card-actions>
        </dev>
      </q-card>
    </div>
  </page>
</template>
<script>
export default {
  data() {
    return {
          id: '0345678',
          username:'sfsdf',
          password:'sdfsdfs',
          text:'',
          options:'',
          model:''
    }
  },
};
</script>
<style>
.outlined {
  outline: orange 5px solid;
}
</style>
