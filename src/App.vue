<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{
                name: '新增頁面'
              }">新增頁面</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

</style>
