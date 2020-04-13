import Vue from 'vue'

/**
 * 货币格式化
 * currencyType 货币符号
 */

Vue.filter('formatPrice', function (value = '0', currencyType = '') {
    let res;
    if (value.toString().indexOf('.') === -1) {
        res = (value || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.00'
    } else {
        let prev = value.toString().split('.')[0]
        let next = value.toString().split('.')[1] < 10 ? value.toString().split('.')[1] + '0' : value.toString().split('.')[1]
        res = (prev || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + next
    }
    return currencyType + res
})

/**
 * 文章字母转小写
 * tiele toUPperCase()
 */
Vue.filter('toUpperCase', function (value) {

    return value.toUpperCase();
})


/**
 * 更多文字...
 * Arr.slice()
 */
Vue.filter('checkMore', function (value) {

    return value.slice(0, 50) + "...";
})

