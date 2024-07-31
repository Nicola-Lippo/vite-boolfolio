<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      apiUrl: 'http://127.0.0.1:8000/api/projects'
    }
  },
  methods: {
    getProject() {
      axios.get(this.apiUrl)
        .then((response) => {
          console.log(response.data);
          this.projects = response.data;
        })
    }
  },
  created() {
    this.getProject();
  
  }
}
</script>

<template>
  <div>Prova</div>
</template>

<style lang="scss" scoped></style>
