<template>
  <div>
    <header class="article header small-wrapper wrapper">
          <Navigation></Navigation>
        <img class="main-article-img"
          :src="post.fields.heroImage.fields.file.url"
          :alt="post.fields.heroImage.fields.description">
    </header>

    <section class="body-container">
      <main class="wrapper small-wrapper">
        <div class="headline">
          <time class="tiny">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
          <h1>{{ post.fields.title }}</h1>
        </div>
        <div class="copy">
          <vue-markdown>{{post.fields.body}}</vue-markdown>
        </div>
        <div class="images">
          <div class="image" v-for="(img,i ) in post.fields.images" :key="i">
            <span>{{img.fields.description}}</span>
            <img  :src="img.fields.file.url" alt="" >

          </div>

        </div>
          <div class="comments">

            <vue-disqus shortname="dreamfit-recipes" :url="`https://dreamfit.recipes/blog/post.fields.slug`" :identifier="post.fields.slug"></vue-disqus>
          </div>
      </main>

    </section>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    Navigation,
    VueMarkdown
  }
}
</script>

<style>

.foreground .page-bar {
  border-bottom: 0;
}
.article.header{
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width:640px){
  .article.header{
    padding: 0 !important;
  }
}
.main-article-img{
  min-height: 320px;
  object-fit: cover;
}
.headline {
  padding: 3em 0 0;

}

.headline h1 {
  font-size: 42px;
  color:#E6A73E;
}
@media(max-width:640px){
.headline h1 {
  font-size: 32px;
}

}
.copy {
  padding-bottom: 4em;

}

.copy *:not(div) {
  margin: 2em 0 1em;
}

.copy h3 {
  font-size: 1.35em;
}

.copy ul {
  margin: 0;
  padding-left: 1em;
  list-style: none;
}

.copy li {
  margin: 0;
  position: relative;
  padding-left: 8px
}
.copy li:before{
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: -16px;
  top: 4px;
  background: url('/orange.svg') no-repeat;
}
.small-wrapper{
  max-width: 768px;
}
.images{
  width: 100%;
  padding-bottom: 4em;

}
.images img {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
}
.images span {
  display: block;
  margin-bottom: 10px;
}
</style>
