<template>
  <ul>
    <li v-for="article in articleHints" :key="article.url">
      <a :href="`${article.url}`" target="_blank">{{article.title}}</a>
      <button @click="saveArticle(article)">
        <i class="material-icons">add</i>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SearchList',
  computed: {
    articleHints() {
      return this.$store.getters.articleHints;
    }
  },
  methods: {
    saveArticle(article) {
      this.$store.dispatch('saveArticle', article);
    }
  }
};
</script>

<style scoped>
button:hover i {
  color: var(--accent);
}
</style>
