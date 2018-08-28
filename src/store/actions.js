export default {
  searchArticles({ commit }, title) {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=10&search=${title}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          commit('setArticleResults', []);
        } else {
          const titles = data[1];
          const urls = data[3];
          const articles = [];
          for (let i = 0; i < titles.length; i++) {
            articles.push({ title: titles[i], url: urls[i] });
          }
          commit('setArticleResults', articles);
        }
      });
  },
  loadSavedArticles({ commit }) {
    const articles = JSON.parse(localStorage.getItem('wiki-lookup')) || [];
    commit('setSavedArticles', articles);
  },
  saveArticle({ commit }, article) {
    const articles = JSON.parse(localStorage.getItem('wiki-lookup')) || [];
    const existingArticle = articles.findIndex(
      item => item.url === article.url
    );
    if (existingArticle === -1) {
      articles.push(article);
    } else {
      const currentArticle = articles[existingArticle];
      articles[existingArticle] = articles[0];
      articles[0] = currentArticle;
    }
    localStorage.setItem('wiki-lookup', JSON.stringify(articles));
    commit('setSavedArticles', articles);
  },
  deleteArticle({ commit }, url) {
    const articles = JSON.parse(localStorage.getItem('wiki-lookup'));
    const toRemove = articles.findIndex(article => article.url === url);
    articles.splice(toRemove, 1);
    localStorage.setItem('wiki-lookup', JSON.stringify(articles));
    commit('setSavedArticles', articles);
  }
};
