import Vue from 'vue'

/** 全局注册*/
Vue.directive('focus', {
    /**
     * 当被绑定元素插入到DOM时 */
    inserted(e) {
        e.focus()
    }
})

// /** 局部指令**/
// directives: {
//     // 指令名称
//     dir1: {
//         inserted(el) {
//             // 指令中第一个参数是当前使用指令的DOM
//             console.log(el);
//             console.log(arguments);
//             // 对DOM进行操作
//             el.style.width = '200px';
//             el.style.height = '200px';
//             el.style.background = '#000';
//         }
//     }
// }