<template>
  <article>
    <nuxt-link class="thumbnail-wrapper" :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
    <img class="thumbnail"
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
    >
    </nuxt-link>
    <div class="article-content">

    <time class="tiny date">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
    <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">{{ post.fields.title }}</nuxt-link></h4>
    <p>{{ post.fields.description }}</p>

    <div class="tags">
      <nuxt-link
        v-for="tag in post.fields.tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag: tag }}" class="tag">{{ tag }}</nuxt-link>
    </div>
    </div>

  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>
article{
    display: flex;
    height: 300px;
    width: 100%;
    margin-bottom: 2em;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1em;
}
  .thumbnail {
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .thumbnail-wrapper {
    flex-basis: 40%;
    display: block;

  }
.article-content{
    flex-basis: 60%;
    padding: 16px;
}

  .title {
    text-decoration: none;
    font-size: 28px;
    color: #373F49;
  }
  time{
    font-size: 14px;
    margin-bottom: 0.5em;
  }
  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }

  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: 4px 6px;
    line-height: 1;
    border-radius: 3px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }
  .tag{
    margin-bottom: .5em;
    font-size: 14px

  }
  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }

  @media(max-width:640px){
    article{
        flex-wrap: wrap;
        height: auto;
                margin-bottom: 1em;
        padding-bottom: 0;
    }
    .thumbnail-wrapper{
        flex-basis: 100%
    }
    .article-content{
        flex-basis: 100%;
        padding: 0;

    }
    .tags{
        margin-bottom: 0.5em;
    }

}
</style>
