<script>
import axios from "axios";
export default {
    name: 'ListSlug',
    data() {
        return {
            api: {
                baseUrl: 'http://127.0.0.1:8000/api/',
                endPoints: {
                    projectsList: 'projects'
                }
            },
            project: null,
        }
    },
    methods: {
        getProject() {
            const apiUrl = this.api.baseUrl +
                this.api.endPoints.projectsList +
                '/' +
                this.$route.params.slug;
            axios.get(apiUrl)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                }).catch((error) => console.log(error));

        }
    },
    created() {
        this.getProject();

    }
}

</script>

<template>
    <div>
        <div class="py-5">
            <h1 class="py-4">{{ project.title }}</h1>
            <div class="py-3"><strong>ID:</strong> {{ project.id }}</div>
            <div class="py-3"><strong>Descrizione:</strong> {{ project.description }}</div>
            <div class="py-3"><strong>SLUG:</strong> {{ project.slug }}</div>
            <div class="py-3"><strong>TECHNOLOGIES:</strong> {{ project.technologies }}</div>
        </div>
        <router-link :to="{ name: 'list' }" class="btn btn-primary" aria-current="page">List</router-link>
    </div>
</template>

<style lang="scss" scoped></style>