<script>
export default {
    name: 'ListProject',
    props: ['title', 'slug', 'description']
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <router-link :to="{ name: 'detagli', params: { slug } }">Dettagli</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>