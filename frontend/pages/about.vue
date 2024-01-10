<template>
<section>
  <h2>Обо мне</h2>
  <p>{{ owner.description }}</p>
</section>
</template>

<script setup>
const response = await useFetch('http://localhost:1337/api/owner');

const owner = response.data.value.data.attributes

</script>