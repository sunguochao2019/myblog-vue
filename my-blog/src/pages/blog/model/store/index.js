import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    strict: true,//启用严格模式
    state: {
        products: [
            //存放的键值对就是所要管理的状态
            { name: '张三', price: 200 },
            { name: '李四', price: 200 },
            { name: '王二麻子', price: 200 }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: `※※${product.name}※※`,
                    price: product.price / 2
                };
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice(state, payload) {
            state.products.forEach(product => {
                product.price -= payload;
            });

        }
    },
    actions: {
        reducePrice(context, payload) {
            setTimeout(() => {
                context.commit("reducePrice", payload)
            }, 2000);

        }
    }

})

export default store