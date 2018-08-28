<template>
<div>
  <p v-if="articlesExist" class="articles-exist">Saved Articles</p>
  <p v-else>No Saved Articles</p>
  <transition-group name="list" tag="ul">
    <li v-for="article in savedArticles" :key="article.url">
      <a :href="`${article.url}`" target="_blank">{{article.title}}</a>
      <button @click="deleteArticle(article.url)">
        <i class="material-icons">delete</i>
      </button>
    </li>
  </transition-group>
</div>
  
</template>

<script>
export default {
  name: 'SavedList',
  created() {
    this.$store.dispatch('loadSavedArticles');
  },
  computed: {
    articlesExist() {
      return this.$store.getters.savedArticles.length > 0;
    },
    savedArticles() {
      return this.$store.getters.savedArticles;
    }
  },
  methods: {
    deleteArticle(url) {
      this.$store.dispatch('deleteArticle', url);
    }
  }
};
</script>

<style scoped>
p {
  color: #aaa;
  text-align: center;
  font-size: 13px;
  margin: 1em 0;
}

p.articles-exist {
  color: var(--accent);
}

li {
  transition: opacity 0.5s, transform 0.5s;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(80%);
}

button:hover i {
  color: #d32f2f;
}
</style>
