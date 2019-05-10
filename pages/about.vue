<template>
  <div>
    <header class="header about  small-wrapper wrapper">
      <Navigation></Navigation>
    </header>
    <section class="body-container ">
      <main class="wrapper small-wrapper">
      <img class="about-img" :src="person.fields.image.fields.file.url" alt>
        <div class="copy">
          <h2 class="about-heading">За мен</h2>
          <vue-markdown >{{ person.fields.fullBio }}</vue-markdown>
          <a href="https://www.instagram.com/dreamfitrecipes/">
            <img src="/instagram.svg" width="30px" alt="">
          </a>
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
      'sys.id': env.CTF_PERSON_ID
    }).then(entries => {
      return {
        person: entries.items[0]
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

<style scoped>
.body-container{
    padding-bottom: 3.2rem;
}
.about.header{
    padding-top: 20px;
}
.about-img {
    width: 100%;
    margin-bottom: 30px;
}
.about-heading{
    text-align: center;
    font-size: 42px;
    margin-bottom: 20px;
    display: inline-block;
    color:#E6A73E;
    position: relative;
}
.about-heading:before , .about-heading:after{
  content: '';
  display: block;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  background: url('/orange.svg') no-repeat;
}
.about-heading:before{
    left: -42px;
}
.about-heading:afteR{
    right: -42px;
}
.small-wrapper{
  max-width: 640px;
}
.copy{
    text-align: center;
    font-size: 15px;
    line-height: 2;
}
.copy a {
    margin: 20px 0;
    display: block;
}
</style>
