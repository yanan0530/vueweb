import ajax from "@/api/ajax.js"

export const loginApi=(data)=>ajax("/users/userlogin/",data,"POST")
export const registerApi=(data)=>ajax("/users/users/",data,"POST")
export const loginWeiboApi=()=>ajax("/login/weibo/")