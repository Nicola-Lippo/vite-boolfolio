<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      projects: [],
      apiUrl: 'http://127.0.0.1:8000/api/projects'
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    getProject() {
      axios.get(this.apiUrl)
        .then((response) => {
          console.log(response.data.results.data);
          this.projects = response.data.results.data;
        })
    }
  },
  created() {
    this.getProject();

  }
}
</script>

<template>
  <AppHeader />
  <div class="container">Prova</div>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
