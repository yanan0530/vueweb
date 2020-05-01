import ajax from "@/api/ajax.js"

export const listTodosTodayApi=()=>ajax("/tools/todos/")
export const addTodosTodayApi=(data)=>ajax("/tools/todos/",data,"POST")
export const updateTodosTodayApi=(data)=>ajax(`/tools/todos/${data.id}/`,data,"PATCH")
export const delTodosTodyApi=(id)=>ajax(`/tools/todos/${id}/`,{},"DELETE")

export const todosListAllApi=(data)=>ajax("/tools/all/",data)
