<template>
  <header>
    <input type="text" @input="searchArticles" autofocus placeholder="Search Wikipedia...">
  </header>
</template>

<script>
export default {
  name: 'Searchbar',
  methods: {
    searchArticles(e) {
      this.$store.dispatch('searchArticles', e.target.value);
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  padding: 1em;
  background: var(--accent);
  box-shadow: 0px 2px 4px rgba(44, 62, 80, 0.15);
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
}

input {
  width: 100%;
  height: 50px;
  float: left;
  color: #fff;
  font-size: 1em;
  font-weight: 400;
  text-indent: 18px;
  padding: 0 60px 0 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.75);
}

input::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.75);
}

input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.75);
}
</style>
