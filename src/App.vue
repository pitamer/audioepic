<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/audioepic">Audioepic</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
// # TODO: figure out shy @use does not work
@import "styles/colors";

html {
  margin: 0;
  height: 100vh;
}

body {
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $dark-grey;
  color: $light-brown;
  text-shadow: 0 0 1px black !important;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  box-shadow: inset 0 0 0 5px skyblue;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: skyblue;
    }
  }
}
</style>
