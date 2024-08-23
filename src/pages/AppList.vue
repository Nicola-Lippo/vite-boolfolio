<script>
import axios from "axios";
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
            projects: [],
        }
    },
    methods: {
        getProject() {
            const apiUrl = this.api.baseUrl + this.api.endPoints.projectsList
            axios.get(apiUrl)
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
    App List
</template>

<style lang="scss" scoped></style>