<template>
  <el-header style="padding:0px">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/blog">首页</router-link></el-menu-item
      >
      <el-menu-item index="2"
        ><router-link to="/blog">博主</router-link>
      </el-menu-item>
      <el-menu-item index="3"
        ><router-link to="/about">关于我</router-link></el-menu-item
      >
      <el-submenu index="4" style="float:right">
        <template slot="title">
          <img
            class="Avatar"
            :src="user.thumbnailUrl"
            style="width:45px; height:45px;"
          />
          {{ user.name }}
        </template>
        <el-menu-item index="2-1">
          <router-link :to="'/myblog/' + user.id">我的博客</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link :to="'/home/' + user.id"
            >我的主页</router-link
          ></el-menu-item
        >
        <el-menu-item index="2-3">
          <router-link :to="'/add/' + user.id"
            >添加博客</router-link
          ></el-menu-item
        >
        <el-menu-item index="2-3">
          <router-link :to="'/'">退出</router-link></el-menu-item
        >
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: []
    };
  },
  created() {
    this.axios.get("/users").then(res => {
      //console.log(res);
      this.user = res.data[1];
      //this.blogs = res.data.slice(0, 10);
    });
  }
};
</script>
