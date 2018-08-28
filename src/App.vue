<template>
  <div id="app">
    <Searchbar/>
    <div class="lists">
      <SearchList/>
      <hr>
      <SavedList/>
    </div>
  </div>
</template>

<script>
import Searchbar from './components/Searchbar';
import SearchList from './components/SearchList';
import SavedList from './components/SavedList';

export default {
  name: 'App',
  components: {
    Searchbar,
    SearchList,
    SavedList
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

:root {
  --primary: #424242;
  --accent: #25afb9;
  --easeInOut: all 0.2s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

::selection {
  color: #fff;
  background: var(--accent);
}

body,
html {
  width: 100%;
  height: 100%;
}

body {
  background: #edf0f1;
}

body,
input,
button {
  font-family: 'Roboto', sans-serif;
}

a {
  display: inline-block;
  width: 100%;
  padding: 14px;
  text-decoration: none;
  color: var(--primary);
}

hr {
  border: 0;
  height: 1px;
  background: #ddd;
}

.lists {
  width: 100%;
  padding: 15px;
}

ul {
  width: 100%;
}

li {
  width: 100%;
  min-height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary);
  line-height: 22px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 0.5em;
  position: relative;
  box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.1);
  word-break: break-word;
  transition: var(--easeInOut);
}

li:last-of-type {
  margin: 0;
}

li:hover {
  transform: scale(1.01);
}

li button {
  width: 50px;
  height: 50px;
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  border: 0px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
}

li button i {
  color: #ddd;
  transition: var(--easeInOut);
}

@media (min-width: 992px) {
  #app {
    width: 50%;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  #app {
    width: 40%;
  }
}
</style>
