<template>
  <div class="row">
    <div class="col4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          AAAAAAAAA
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          BBBBBBBBB
        </router-link>
        <router-link to="/newpage/nameView/C2A" class="list-group-item list-group-item-action">
          ~~~C2A~~~
        </router-link>
        <router-link to="/newpage/nameView/A2B" class="list-group-item list-group-item-action">
          ~~~A2B~~~
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>