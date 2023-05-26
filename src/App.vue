<template>
  <nav>
    <router-link to="/">Демо</router-link>
    <router-link to="/control">Управление</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: black;
  height: 76px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 40px;
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
      color: #8af0c2;
    }
  }
}
@import '@/styles/stiles.scss';
</style>
