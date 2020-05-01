import ajax from "@/api/ajax.js"

export const addOrderApi=(data)=>ajax("/trade/orders/",data,"POST")
export const listOrderApi=()=>ajax("/trade/orders/")
export const readOrderApi=(id)=>ajax(`/trade/orders/${id}/`)
export const delOrderApi=(id)=>ajax(`/trade/orders/${id}/`,{},"DELETE")