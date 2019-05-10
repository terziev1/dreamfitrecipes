<template>
  <article>
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
    <img class="thumbnail"
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
    >
    </nuxt-link>
    <time class="tiny date">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
    <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">{{ post.fields.title }}</nuxt-link></h4>
    <p>{{ post.fields.description }}</p>

    <div class="tags">
      <nuxt-link
        v-for="tag in post.fields.tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag: tag }}" class="tag">{{ tag }}</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>
  .thumbnail {
    margin-bottom: 0.5em;
    display: block;
  }

  .title {
    text-decoration: none;
    font-size: 22px;
    color: #E6A73E;
  }
  time{
    font-size: 14px;
    margin-bottom: 0.5em;
  }
  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }
  .tag{
    margin-bottom: .5em;
    font-size: 14px;
  }
  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: 4px 6px;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }

  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }
</style>
