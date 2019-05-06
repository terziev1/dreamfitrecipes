<template>
  <nav role="navigation">
    <div class="wrapper nav">
      <a href="/">DreamFitRecipes</a>
      <ul class="menu">
        <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
          <nuxt-link
            :to="{ name: route.name }"
          >{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
}
.nav{
display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.menu {
  display: flex;
}
.menu li {
  padding: 12px 24px;
}
.menu a {
  text-decoration: none;
  color: #222;
}
</style>
