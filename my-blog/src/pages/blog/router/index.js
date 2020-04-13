import Vue from 'vue'
import Router from 'vue-router'


import ShowBlog from '../views/ShowBlog.vue'
import AddBlog from '../views/AddBlog.vue'
import About from '../views/About.vue'
import BlogDetail from '../views/BlogDetail.vue'
import editBlog from '../views/EditBlog.vue'
import MyBlog from '../views/Myblog.vue'


//import CountNumber from '../components/admin/CountNumber.vue'



Vue.use(Router)

export default new Router({
    routes: [
        { path: '/blog', component: ShowBlog },
        { path: '/blog/:id', component: BlogDetail },
        { path: '/add/:userId', component: AddBlog },
        { path: '/edit/:id', component: editBlog },
        { path: '/myblog/:userId', component: MyBlog },
        { path: '/about', component: About },

        { path: '/', redirect: '/blog' },


    ],
    mode: "history"
}
)