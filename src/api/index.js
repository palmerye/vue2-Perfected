// import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.interceptors.request.use(res => {
//     return res
// }, error => {
//     return Promise.reject(error)
// })

// axios.interceptors.response.use(res => {
//     console.log('1111111233')
//     return res
// }, error => {
//     return Promise.reject(error)
// })

// export const testApi = () => {
//     return axios.get('http://7le.online/vote/show/1')
// }
// export const loginApi = (params) => {
//     return axios.post('http://7le.online/user/login', params)
// }
// export const registerApi = (params) => {
//     return axios.post('http://7le.online/user/register', params)
// }

import Vue from 'vue'
import VueResource from 'vue-resource'
// import store from '../store'

Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true
Vue.http.options.emulateHTTP = true
Vue.http.interceptors.push((request, next) => {
    // request.headers.Authorization = '8e2O6mcBlL2TDF9I/nGryQ=='
    const accessToken = window.sessionStorage.getItem('token')
    request.headers.set('Authorization', accessToken)
    console.log(request.headers)
    // const auth = store.state.user.userInfo
    // console.log(auth)
    // if (auth) {
    //     const accessToken = window.sessionStorage.getItem('token')
    //     console.log(accessToken, 'token')
    //     Vue.http.headers.Authorization = accessToken
    //     Vue.http.headers.common.Authorization = 'ERR15zAv0B1PA64RfD9BTA=='
    //     console.log(Vue.http.headers)
    // } else {
    //     // delete Vue.http.headers.Authorization
    // }
  // if (auth.check()) {
  //   const accessToken = auth.jwt_token.access_token;
  //   Vue.http.headers.common.Authorization = `Bearer ${accessToken}`;
  // } else {
  //   delete Vue.http.headers.common.Authorization;
  // }
    next()
})

export const testApi = () => {
    return Vue.http.get('http://7le.online/vote/show/1')
}

// 用户相关
export const loginApi = (params) => {
    return Vue.http.post('http://7le.online/user/login', params)
}
export const registerApi = (params) => {
    return Vue.http.post('http://7le.online/user/register', params)
}
export const getUserInfoApi = () => {
    return Vue.http.get('http://7le.online/vote/user/info')
}
export const addTagApi = (params) => {
    return Vue.http.post('http://7le.online/vote/interested/add', params)
}

export const myjoinVoteApi = () => {
    return Vue.http.get('http://7le.online/vote/list/join')
}
export const mypublishVoteApi = () => {
    return Vue.http.get('http://7le.online/vote/list/publish')
}
export const myinterestedApi = () => {
    return Vue.http.get('http://7le.online/vote/interested/list')
}

// 投票相关
export const hotVoteApi = () => {
    return Vue.http.get('http://7le.online/vote/list/0')
}
export const classifyVoteApi = (id) => {
    return Vue.http.get('http://7le.online/vote/list/' + id)
}
export const publishApi = (params) => {
    return Vue.http.post('http://7le.online/vote/publish', params)
}
export const voteDetailApi = (id) => {
    return Vue.http.get('http://7le.online/vote/show/' + id)
}
export const postVodeApi = (params) => {
    return Vue.http.post('http://7le.online/vote/join', params)
}
