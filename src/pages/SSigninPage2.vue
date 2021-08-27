<template>
<q-page class="bg-warning q-pa-xl ">
  <div class="flex flex-center q-pa-xl">
    <q-card class="q-pa-xl border">
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
      </q-input>
      <dev class="float-right">
        <q-card-actions>
          <q-btn color="primary" to="/ssigninPage">Back</q-btn>
          <q-btn color="primary" to="login">Create</q-btn>
        </q-card-actions>
      </dev>
    </q-card>
  </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      password:'',
      text:'',
    }
  },
}
</script>
<style>
  .border{
    border: 5px solid grey
  }
</style>