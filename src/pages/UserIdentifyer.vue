<template>
  <q-page class="flex flex-center q-pa-xl bg-warning">
    
    <div>
      <q-card class="q-pa-xl border">
        <div class="text-h4">CHOOSE TYPE OF USER</div>
        <div class="flex flex-center">
          <q-card-actions>
            <q-btn color="orange-6" to="/ssigninPage">STUDENT</q-btn>
            <q-btn color="orange-6" to="/fsigninPage">FACULTY</q-btn>
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<style>
.border {
  border: 5px solid grey;
}
</style>
