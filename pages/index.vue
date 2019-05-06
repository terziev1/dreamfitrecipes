<template>
  <div>
    <Navigation></Navigation>
    <header class="home header">
        <div class="page-info wrapper">
          <h2>{{ person.fields.title }}</h2>
          <p>{{ person.fields.shortBio }}</p>
        </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>Recent articles</h2>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    Navigation,
    ArticlePreview
  }
}
</script>

<style>

.home.header {
  overflow: hidden;
  position: relative;
  height: 70vw;
  min-height: 400px;
  max-height: 610px;
  background-color: #2199e8;
}

.items-bar h2{
  text-align: center;
  font-size: 48px;
  margin: 30px auto;
}
.items-list{
  display: flex;
}
.item{
  padding: 16px;
  flex-basis: 33%;
}
</style>
