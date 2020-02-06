import ajax from "@/api/ajax.js"

export const readUserApi=()=>ajax("/users/users/1/")
export const updateUserApi=(data)=>ajax("/users/users/1/",data,"patch")

export const listFavsApi=()=>ajax("/oper/userfavs/")