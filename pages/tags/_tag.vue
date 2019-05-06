<template>
  <div>
    <Navigation></Navigation>
    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>Рецепти в категория <b>{{ tag }}</b> <span>({{ posts.length }})</span></h2>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="(post,i) in posts" :key="i">
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
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  components: {
    ArticlePreview,
    Navigation
  }
}
</script>
<style scoped>
h2{
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
}
h2 b {
  text-transform: capitalize
}
h2 span{
  font-weight: normal;
  font-size: 28px;
}
</style>

