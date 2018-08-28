export default {
  setArticleResults(state, articles) {
    state.articleHints = articles;
  },
  setSavedArticles(state, articles) {
    state.savedArticles = articles;
  }
};
