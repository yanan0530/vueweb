import ajax from "@/api/ajax.js"
//蔬菜类目
export const vegetablesListApi=()=>ajax("/vegetables/app/vegetables/")
export const vegetablesCreateApi=(data)=>ajax("/vegetables/app/vegetables/",data,"POST")
export const vegetablesReadApi=(id)=>ajax(`/vegetables/app/vegetables/${id}/`)
export const vegetablesUpdateApi=(data)=>ajax(`/vegetables/app/vegetables/${data.id}/`,data,"PATCH")
export const vegetablesDeleteApi=(id)=>ajax(`/vegetables/app/vegetables/${id}/`,{},"DELETE")
//种植计划
export const plantListApi=()=>ajax("/vegetables/app/plant/")
export const plantCreateApi=(data)=>ajax("/vegetables/app/plant/",data,"POST")
export const plantReadApi=(id)=>ajax(`/vegetables/app/plant/${id}/`)
export const plantUpdateApi=(data)=>ajax(`/vegetables/app/plant/${data.id}/`,data,"PATCH")
export const plantDeleteApi=(id)=>ajax(`/vegetables/app/plant/${id}/`,{},"DELETE")

//工作类型
export const jobtypeListApi=()=>ajax("/vegetables/app/jobtype/")
export const jobtypeCreateApi=(data)=>ajax("/vegetables/app/jobtype/",data,"POST")
export const jobtypeReadApi=(id)=>ajax(`/vegetables/app/jobtype/${id}/`)
export const jobtypeUpdateApi=(data)=>ajax(`/vegetables/app/jobtype/${data.id}/`,data,"PATCH")
export const jobtypeDeleteApi=(id)=>ajax(`/vegetables/app/jobtype/${id}/`,{},"DELETE")

//日志
export const dayrecordListApi=()=>ajax("/vegetables/app/dayrecord/")
export const dayrecordCreateApi=(data)=>ajax("/vegetables/app/dayrecord/",data,"POST")
export const dayrecordReadApi=(id)=>ajax(`/vegetables/app/dayrecord/${id}/`)
export const dayrecordUpdateApi=(data)=>ajax(`/vegetables/app/dayrecord/${data.id}/`,data,"PATCH")
export const dayrecordDeleteApi=(id)=>ajax(`/vegetables/app/dayrecord/${id}/`,{},"DELETE")

//收入流水
export const incomeListApi=()=>ajax("/vegetables/app/income/")
export const incomeCreateApi=(data)=>ajax("/vegetables/app/income/",data,"POST")
export const incomeReadApi=(id)=>ajax(`/vegetables/app/income/${id}/`)
export const incomeUpdateApi=(data)=>ajax(`/vegetables/app/income/${data.id}/`,data,"PATCH")
export const incomeDeleteApi=(id)=>ajax(`/vegetables/app/income/${id}/`,{},"DELETE")


//支出类型
export const costtypeListApi=()=>ajax("/vegetables/app/costtype/")
export const costtypeCreateApi=(data)=>ajax("/vegetables/app/costtype/",data,"POST")
export const costtypeReadApi=(id)=>ajax(`/vegetables/app/costtype/${id}/`)
export const costtypeUpdateApi=(data)=>ajax(`/vegetables/app/costtype/${data.id}/`,data,"PATCH")
export const costtypeDeleteApi=(id)=>ajax(`/vegetables/app/costtype/${id}/`,{},"DELETE")


//支出流水
export const costListApi=()=>ajax("/vegetables/app/cost/")
export const costCreateApi=(data)=>ajax("/vegetables/app/cost/",data,"POST")
export const costReadApi=(id)=>ajax(`/vegetables/app/cost/${id}/`)
export const costUpdateApi=(data)=>ajax(`/vegetables/app/cost/${data.id}/`,data,"PATCLH")
export const costDeleteApi=(id)=>ajax(`/vegetables/app/cost/${id}/`,{},"DELETE")