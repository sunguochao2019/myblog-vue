<template>
  <div class="container">
    <div></div>

    <div
      id="addBlog"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      style="width: 100%; height:100%"
    >
      <h1>添加博客</h1>
      <div>
        <form @submit.prevent="getData()" method="post">
          <label>博客标题：</label>
          <input v-model="blog.title" class="title" v-focus required />
          <label>博客内容：</label>
          <textarea v-model="blog.body" required></textarea>
          <label>
            博客类型：
            <div class="selectFenlei">
              <span v-for="(type, key) in blog.types" :key="key">
                <input type="checkbox" v-model="type.checked" />
                {{ type.name }}
              </span>
            </div>
          </label>
          <label>
            作者：{{ user.name }}
            <!-- <select>
              <option v-for="(author, key) in blog.authors" :key="key">
                {{ author }}
              </option>
            </select> -->
          </label>
          <label>
            <input type="submit" class="submitBtn" value="添加博客" />
          </label>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [],
      user: {
        userId: this.$route.params.userId,
        name: ""
      },
      blog: {
        userId: null,
        id: null,
        body: "",
        content: "",
        types: [
          { name: "vue", checked: true },
          { name: "html", checked: false },
          { name: "css", checked: false },
          { name: "app", checked: false }
        ],
        authors: ["张三", "李四"]
      },
      loading: false,
      addSuccess: false
    };
  },
  created() {
    this.axios.get("/users/" + this.user.userId).then(res => {
      this.user.name = res.data.name;
      //console.log(res);
    });
  },
  methods: {
    checkType() {},
    getData() {
      //console.log(this.blog.userId);
      this.loading = true;
      this.axios
        .post(
          "/blogs/",
          {
            id: Math.floor(Math.random() * 100),
            userId: this.user.userId,
            title: this.blog.title,
            body: this.blog.body,
            types: this.blog.types
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(res => {
          //console.log(res);
          this.blogs.unshift(res.data);
          this.loading = false;
          this.addSuccess = true;
          setTimeout(() => {
            this.$router.push({ path: "/myblog/" + this.user.userId });
          }, 2000);
          this.open2();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    open2() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    }
  }
};
</script>
