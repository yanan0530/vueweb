import ajax from "@/api/ajax.js"

export const vegetablesDictApi=()=>ajax("/vegetables/app/vegetablesdict/")
export const jobtypeDictApi=()=>ajax("/vegetables/app/jobtypedict/")
//未结束的种植计划
export const plantDictApi=(data)=>ajax("/vegetables/app/plantdict/",data)

//支出类型L
export const consttypeDictApi=(data)=>ajax("/vegetables/app/costtypedict/",data)
