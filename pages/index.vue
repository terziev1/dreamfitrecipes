<template>
  <div>
    <header class="home header">
      <img :src="person.fields.logo.fields.file.url" alt>
      <Navigation></Navigation>
    </header>
    <section class="body-container wrapper">

      <div class="item-list-wrapper">
        <div class="item-list-container">
          <h2>Скоро качени</h2>
          <ul class="items-list ">
            <li class="item" v-for="(post,i) in posts" :key="i">
              <article-preview-big :post="post"></article-preview-big>
            </li>
          </ul>
        </div>
        <div class="page-info">
          <div class="page-img">
            <img :src="person.fields.image.fields.file.url" alt>
          </div>
          <p>{{ person.fields.shortBio }}</p>
          <a href="https://www.instagram.com/dreamfitrecipes/">
            <img src="/instagram.svg" width="30px" alt="">
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreviewBig from '~/components/article-preview-big.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ])
      .then(([entries, posts]) => {
        return {
          person: entries.items[0],
          posts: posts.items
        }
      })
      .catch(console.error)
  },
  components: {
    Navigation,
    ArticlePreviewBig
  }
}
</script>

<style scoped>
.home.header {
  overflow: hidden;
  position: relative;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.home.header img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media(max-width:640px){
  .home.home.header{
    height: auto;;
  }
.home.header img{
  height: auto;;
}

}
.page-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  flex-basis: 30%
}
.page-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.page-info p {
  width: 100%;
  object-fit: contain;
  text-align: center;
  margin-bottom: 16px;
}
.item-list-wrapper{
  display: flex;
}
.item-list-container{
  flex-basis: 70%;
}

h2 {
  font-size: 32px;
  margin-left: 16px;
  margin-bottom: 8px;
}
.items-list {
  flex-wrap: wrap;
  display: flex;
  padding: 10px;
}
.item {
  flex-basis: 100%;
  display: flex;
}
@media(max-width:640px){
.item-list-wrapper{
  flex-wrap: wrap
}
.page-info{
  flex-basis: 100%;
  margin-bottom: 30px;
}
.item-list-container{
  flex-basis: 100%;
}
.items-list{
  padding: 10px 0;
}
h2{
  margin-left: 5px;
}
}
</style>
