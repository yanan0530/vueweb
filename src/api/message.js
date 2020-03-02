import ajax from "@/api/ajax.js"


export const listMessageApi=()=>ajax("/oper/message/")
export const createMessageApi=(data)=>ajax("/oper/message/",data,"POST")
export const delMessageApi=(id)=>ajax(`/oper/message/${id}/`,{},"DELETE")