import ajax from "@/api/ajax.js"

export const loginApi=(data)=>ajax("/login/",data,"POST")
export const registerApi=(data)=>ajax("/users/users/",data,"POST")