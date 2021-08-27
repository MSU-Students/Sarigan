<template>
  <q-page class="flex flex-center q-pa-xl bg-warning">
    <div>
      <q-card class="q-pa-xl border bg-grey-1">
        <div class="text-h4">New Password</div>
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
        <dev class="flex flex-center">
          <q-card-actions>
            <q-btn color="primary" to="/login">Save</q-btn>
          </q-card-actions>
        </dev>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      password:'',
      options:'',
      text:''
    };
  },
};
</script>
<style>
  .border{
    border: 5px solid grey
  }
</style>