<template>
  <q-page class="flex flex-center q-pa-xl bg-warning">
      <p class="text-h3">Login Page</p>
    <div >
      <q-card class="q-pa-xl border">
        <q-input class="q-pa-sm" outlined v-model="text" label="Username:" />
        <q-input
          class="q-pa-sm"
          outlined
          v-model="password"
          label="Password:"
          filled
          type="password"
        />
        <div class="float-right">
          <q-card-actions>
            <q-btn class="text-h9" flat to="/forgotPassword">Forgot Password!</q-btn>
            <div>
              <q-btn color="primary">Login</q-btn>
              <q-btn color="primary" to="/userIdentifyer">Sign Up</q-btn>
            </div>
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
      password: "",
    };
  },
};
</script>
<style>
  .border{
    border: 5px solid grey
  }
</style>