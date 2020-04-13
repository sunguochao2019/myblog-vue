<template>
  <div id="blog">
    <el-main>
      <el-row>
        <el-col :span="24" v-loading="loading">
          <div
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            style="width: 100%; height:100%"
          >
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.body }}</p>
            <label>
              博客类型：
              <span v-for="(type, key) in blog.types" :key="key">
                {{ type.name }}、
              </span>
            </label>

            <div>
              <br />
              <button @click="delBlog()">删除</button>&nbsp;
              <router-link :to="'/edit/' + this.$route.params.id">
                <button>编辑</button></router-link
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "blogDetail",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.axios.get("/blogs/" + this.id).then(res => {
      //console.log(res);
      this.loading = false;
      this.blog = res.data;
    });
  },
  methods: {
    delBlog() {
      this.axios.delete("/blogs/" + this.id).then(res => {
        if (res) {
          this.deleteSuccsee();
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 2000);
        }
        //console.log(res);
        //this.loading = false;
        //this.blog = res.data;
      });
    },
    deleteSuccsee() {
      this.$message({
        showClose: true,
        message: "记录删除成功!",
        type: "success"
      });
    }
  }
};
</script>
