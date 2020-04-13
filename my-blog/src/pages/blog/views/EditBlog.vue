<template>
  <div class="container">
    <div
      id="editBlog"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      style="width: 100%; height:100%"
    >
      <h1>编辑博客</h1>
      <div>
        <form @submit.prevent="getData()" method="post">
          <label>博客标题：</label>
          <input v-model="blog.title" class="title" v-focus required />
          <label>博客内容：</label>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="blog.body"
            maxlength="200"
            show-word-limit
            row="44"
          >
          </el-input>

          <label>
            博客类型：
            <div class="selectFenlei">
              <span v-for="(type, key) in blog.types" :key="key">
                <input type="checkbox" v-model="type.checked" />
                {{ type.name }}
              </span>
            </div>
          </label>
          <!-- <label>
            作者：
            <select>
              <option v-for="(zuozhe, key) in blog.zuozhes" :key="key">
                {{ zuozhe }}
              </option>
            </select>
          </label> -->
          <label>
            <input type="submit" class="submitBtn" value="保存博客" />
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
      blog: {
        userId: this.$route.params.id,
        id: this.$route.params.id,
        body: "",
        content: "",
        fenleis: ["vue", "javascript", "nodejs", "html"],
        zuozhes: ["张三", "李四"]
      },
      loading: false
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      //console.log(this.blog.id);
      this.loading = true;
      this.axios
        .get("/blogs/" + this.blog.id)
        .then(res => {
          //console.log(res);
          this.loading = false;
          this.blog = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    getData() {
      this.loading = true;
      this.axios
        .patch("/blogs/" + this.blog.id, {
          title: this.blog.title,
          body: this.blog.body
        })
        .then(res => {
          if (res) {
            //console.log(res);
            this.loading = false;
            setTimeout(() => {
              this.$router.push({ path: "/blog/" + this.blog.id });
            }, 2000);
            this.open2();
          }
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
