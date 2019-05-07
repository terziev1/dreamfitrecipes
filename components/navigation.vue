<template>
  <nav role="navigation">
    <div class="wrapper nav">
      <ul class="menu">
        <li>
          <nuxt-link to="/">Начало</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Всички рецепти</nuxt-link>
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
  box-shadow: 0 0px 8px 0px rgba(0,0,0,0.1)
}
.nav{
display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
}
.menu {
  display: flex;
}
.menu li {
  padding: 12px;
}
.menu a {
  text-decoration: none;
  color: #222;
}
</style>
