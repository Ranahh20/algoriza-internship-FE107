<!-- ApiExample.vue -->

<template>
    <div>
      <label for="destination">Select Destination:</label>
      <select v-model="selectedDestination" @change="fetchData">
        <option v-for="destination in destinations" :key="destination.id" :value="destination.query">
          {{ destination.name }}
  
        </option>
      </select>
  
      <div v-if="response">
        <h2>Response:</h2>
        <pre>{{ response }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
    headers: {
      'X-RapidAPI-Key': '5b0da4d530msh9abd700085e00efp1dd85fjsnefaa7fd51895',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };
  
  const destinations = [
    { id: 1, name: 'Egypt', query: 'Egypt' },
    { id: 2, name: 'France', query: 'France' },
    // Add more destinations as needed
  ];
  
  const selectedDestination = ref(destinations[0].query);
  const response = ref(null);
  
  const fetchData = async () => {
    options.params = { query: selectedDestination.value };
  
    try {
      const apiResponse = await axios.request(options);
      response.value = apiResponse.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  onMounted(fetchData); // Optionally, fetch data when the component is mounted
  </script>
  