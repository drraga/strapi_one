<template>
  <header>
    <nav>
      <img :src="ownerPhoto" alt="Моя фотография">
      <ul>
        <li><NuxtLink to="/">Главная</NuxtLink></li>
        <li><NuxtLink to="/about">Обо мне</NuxtLink></li>
        <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
      </ul>
    </nav>
    <h1>Добро пожаловать на мой сайт!</h1>
</header>
  <slot />

  <footer>
    <p class="footer">&copy; 2023 Моя визитка</p>
  </footer>
</template>

<script setup>
const response = await useFetch('http://localhost:1337/api/owner?populate=*');

const ownerPhoto = 'http://localhost:1337' + response.data.value.data.attributes.photo.data.attributes.url
console.log(ownerPhoto)
</script>

<style scoped lang="scss">

h1 {
text-align: center;
}

nav {
  display: flex;
  align-items: center;
  background: #333;
  color: #fff;
  padding: 15px;
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease-in-out;

    :hover {
      color: #ffcc00;
    }
  }

}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

footer {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>