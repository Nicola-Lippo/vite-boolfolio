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
            currentPage: 1,
        }
    },
    components: {
        ListProject
    },
    methods: {
        prevPage() {
            console.log('indietro')
            this.currentPage--;
            this.getProject();
        },
        nextPage() {
            console.log('avanti')
            this.currentPage++;
            this.getProject();
        },
        getProject() {
            const apiUrl = this.api.baseUrl + this.api.endPoints.projectsList
            axios.get(apiUrl, {
                params: {
                    page: this.currentPage,
                }
            })
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
            <div class="col-4 py-3" v-for="project in response.results?.data">
                <ListProject :title="project.title" :slug="project.slug" :description="project.description" />
            </div>
            <nav class="d-flex justify-content-around">
                <div class="btn btn-primary" @click="prevPage" v-if="response.results?.prev_page_url">Prev</div>
                <div class="btn btn-primary" @click="nextPage" v-if="response.results?.next_page_url">Next</div>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>