<script>
import axios from "axios";
import ListProject from "../components/ListProject.vue"
export default {
    name: 'AppList',
    data() {
        return {
            api: {
                baseUrl: 'http://127.0.0.1:8000/api/',
                endPoints: {
                    projectsList: 'projects'
                }
            },
            response: {},
        }
    },
    components: {
        ListProject
    },
    methods: {
        getProject() {
            const apiUrl = this.api.baseUrl + this.api.endPoints.projectsList
            axios.get(apiUrl)
                .then((response) => {
                    console.log(response.data);
                    this.response = response.data;
                })
        }
    },
    created() {
        this.getProject();

    }
}

</script>

<template>
    <h1>Projects</h1>
    <div>
        <div class="row">
            <div class="col-4 py-3" v-for="project in response.results.data">
                <ListProject :title="project.title" :slug="project.slug" :description="project.description" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>