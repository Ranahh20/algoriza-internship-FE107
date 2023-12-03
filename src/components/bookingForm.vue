<template>
  <div class="flex justify-center mx-100">
    <div>
      <nav
        class="w-screen h-16 flex justify-center leading-normal not-italic tracking-wide rounded-md shrink-0"
      ></nav>

      <div class="menu flex justify-center">
        <div
          class="flex align-middle gap-4 border-black border-2 w-[64.375rem] h-[4rem] rounded-lg text-base font-normal leading-normal not-italic tracking-wide"
        >
          <!-- Dropdown menu for selecting destination -->

          <div class="flex">
            <select
            @change="getDestinationInfo"

              v-model="selectedDestination"
              class="w-[206px] h-[43px] flex justify-center rounded bg-gray10 px-3 py-3 ml-3 my-2.5"
            >
              <option value="" disabled selected>Where are you going?</option>

              <option
                v-for="destination in destinations"
                :key="destination.id"
                :value="destination.query"

                >{{ destination.name }}
              </option>
            </select>

            <div v-if="response">
              <h2>Response:</h2>
              <pre>{{ response }}</pre>
            </div>
          </div>

          <!-- Check-in Date input -->

          <input
            class="w-[147px] h-[43px] flex justify-center rounded bg-gray10 px-3 py-3 mt-2.5 mb-11"
            placeholder="Check-in Date"
            type="date"
            id="checkInDate"
            v-model="checkInDate"
            :min="minCheckInDate"
          />

          <!-- Check-out Date input -->
          <input
            class="w-[148px] h-[43px] flex justify-center rounded bg-gray10 px-3 py-3 mt-2.5 mb-11"
            type="date"
            id="checkOutDate"
            v-model="checkOutDate"
            :min="checkInDate"
            placeholder=""
          />

          <!-- Guests input -->

          <input
            class="w-[148px] h-[43px] flex justify-center rounded bg-gray10 px-3 py-3 mt-2.5 mb-11"
            type="number"
            id="guests"
            v-model="guests"
            min="1"
            placeholder="Guests"
          />
          <!-- Rooms input -->

          <input
            class="w-[147px] h-[43px] flex justify-center rounded bg-gray10 px-3 py-3 mt-2.5 mb-11"
            type="number"
            id="rooms"
            v-model="rooms"
            min="1"
            placeholder="Rooms"
          />

          <!-- Search button -->
          <router-link to="/searchPage">
            <button
              class="w-[134px] h-[43px] flex justify-center text-white rounded bg-blue px-3 py-3 mr-3 mt-2.5 mb-11"
            >
              Search
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";



const checkInDate = ref("");
const checkOutDate = ref("");
const guests = ref("");
const rooms = ref("");
const minCheckInDate = ref("");

const response = ref(null);

const calculateFutureDate = () => {
  const today = new Date();
  const futureDate = new Date(today.setDate(today.getDate() + 1));
  return futureDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

onMounted(() => {
  // Set the default value for the minimum Check-in Date
  minCheckInDate.value = calculateFutureDate();

  checkInDate.value = minCheckInDate.value;
});

// getDestinationInfo
const getDestinationInfo = async () => {
  options.params = { query: selectedDestination.value };

  // if we need display the response
 
try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}



};

//getHotelDetails

/*const getHotelDetails = async () => {
  const hotelSearchParams = {
    hotel_id: "191605", // Replace with the actual hotel ID
    arrival_date: "2023-12-03", // Replace with the selected arrival date
    departure_date: "2023-12-08", // Replace with the selected departure date
    adults: "1", // Replace with the selected number of adults
    room_qty: "1", // Replace with the selected number of rooms
  };};

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
    params: {
      hotel_id: "191605",
      arrival_date: "2023-12-03",
      departure_date: "2023-12-08",
      adults: "1",
      children_age: "1,17",
      room_qty: "1",
      languagecode: "en-us",
      currency_code: "Egypt",
    },
    headers: {
      "X-RapidAPI-Key": "5b0da4d530msh9abd700085e00efp1dd85fjsnefaa7fd51895",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };*/
/*
const getHotelId = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: "-2092174",
      search_type: "CITY",
      arrival_date: "<REQUIRED>",
      departure_date: "<REQUIRED>",
      adults: "1",
      room_qty: "1",
      page_number: "1",
      languagecode: "en-us",
      currency_code: "AED",
    },
    headers: {
      "X-RapidAPI-Key": "5b0da4d530msh9abd700085e00efp1dd85fjsnefaa7fd51895",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };*/

</script>
