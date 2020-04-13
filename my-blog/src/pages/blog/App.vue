<template>
  <div id="app">
    <Header></Header>
    <el-container>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./views/module/Header";

export default {
  components: { Header },
  name: "Main"
};
</script>
<style src="@/assets/css/index.css" />
