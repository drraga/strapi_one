<template>

  <h1>Привет, меня зовут {{ owner.name }}</h1>

</template>

<script setup>
const response = await useFetch('http://localhost:1337/api/owner');

const owner = response.data.value.data.attributes
</script>

<style>

</style>