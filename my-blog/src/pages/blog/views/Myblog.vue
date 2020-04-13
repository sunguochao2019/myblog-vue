<template>
  <div id="blogList">
    <el-main>
      <el-row>
        <el-col :span="24" v-loading="loading">
          <h1>我的博客</h1>
          <div
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            style="width: 100%; height:100%"
            v-for="(blog, key) in filterContent"
            :key="key"
            class="blogBox"
          >
            <router-link :to="'/blog/' + blog.id">
              <h4>{{ blog.title | toUpperCase | checkMore }}</h4>
              <p>{{ blog.body | checkMore }}</p>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "myblog",
  data() {
    return {
      blogs: [],
      user: {
        userId: this.$route.params.userId
      },
      loading: false,
      search: ""
    };
  },
  created() {
    this.loading = true;
    //console.log(this.blogs.userId);
    this.axios
      .get("/blogs/?userId=" + this.user.userId + "&_sort=id&_order=desc")
      .then(res => {
        //console.log(res);
        this.loading = false;
        this.blogs = res.data;
        //this.blogs = res.data.slice(0, 10);
      });
  },
  computed: {
    filterContent() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>
