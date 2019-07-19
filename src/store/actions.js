/**
 * actions也是个对象变量，最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发mutations里面的方法，
 * actions里面自定义的函数接收一个context参数和要变化的形参，context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),然后也不要忘了把它也扔进
 */
import axios from 'axios'

export default {
    login: async ({ commit }, params) => {
        const { data } = await axios.post('/api/login', params)
        commit('USER_INFO', data)
    }
}