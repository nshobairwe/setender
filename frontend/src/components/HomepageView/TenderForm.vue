<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const name = ref("");
const email = ref("");
const eventDate = ref("");
const guests = ref("");
const notes = ref("");

const submitTender = async () => {
  const templateParams = {
      name: name.value,
    time: new Date().toLocaleString(),
    event_date: eventDate.value,
    guests: guests.value,
    notes: notes.value,
  };

  emailjs.send("service_gxnnang", "template_x7la3mr", templateParams, "REAU7BcwIG7vNJ29E")
    .then(() => {
      alert("Tender submitted! Email sent.");
      name.value = email.value = eventDate.value = guests.value = notes.value = "";
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      alert("Failed to send tender.");
    });
};
</script>


<template>
  <form @submit.prevent="submitTender" class="p-4 max-w-md mx-auto space-y-2">
    <input v-model="name" placeholder="Your Name" class="border p-2 w-full"/>
    <input v-model="email" placeholder="Your Email (optional)" class="border p-2 w-full"/>
    <input type="date" v-model="eventDate" class="border p-2 w-full"/>
    <input type="number" v-model="guests" placeholder="Number of Guests" class="border p-2 w-full"/>
    <textarea v-model="notes" placeholder="Notes" class="border p-2 w-full"></textarea>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit Tender</button>
  </form>
</template>
