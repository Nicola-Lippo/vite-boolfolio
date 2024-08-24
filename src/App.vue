<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <div class="container py-5 text-center">
      <router-view></router-view>
    </div>
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
