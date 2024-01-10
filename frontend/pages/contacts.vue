<template>
  <h2>Контакты</h2>

  <p>Свяжитесь со мной:</p>
  <p>Email: {{ owner.email }}</p>
  <p>Телефон: {{ owner.phone }}</p>
</template>

<script setup>
const response = await useFetch('http://localhost:1337/api/owner');

const owner = response.data.value.data.attributes

</script>