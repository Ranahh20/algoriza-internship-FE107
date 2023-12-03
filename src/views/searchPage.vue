<template>
  <div class="flex justify-center">
    <div>
      <header>
        <Navigation> </Navigation>
      </header>
      <main>
        <bookingForm></bookingForm>
      </main>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import bookingForm from "@/components/bookingForm.vue";
import axios from "axios";

export default {
  components: {
    Navigation,
    bookingForm,
  },



};    
</script>

<!-- HotelDetails.vue -->
