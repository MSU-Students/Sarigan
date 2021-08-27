<template>
  <div class="flex flex-center q-pa-xl">
    <q-card class="q-pa-xl border-grey">
      <div class="text-h4">CHOOCE TYPE OF USER</div>
      <dev class="flex flex-center">
        <q-card-actions class="q-pa-md">
            <div >
          <q-btn to="/fsigninPage" color="orange-9" glossy>FACULTY</q-btn>
          </div>
          <div>
          <q-btn to="/ssigninPage" color="orange-9" glossy>STUDENT</q-btn>
          </div>
        </q-card-actions>
      </dev>
    </q-card>
  </div>
</template>
<style>
    .border-grey{
        border: 5px solid grey;
    }
</style>