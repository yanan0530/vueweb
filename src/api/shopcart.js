import ajax from "@/api/ajax.js"

export const listShopCartApi=()=>ajax("/trade/shopcarts/")

export const createShopCartApi=(data)=>ajax("/trade/shopcarts/",data,"POST")

export const updateShopCartApi=(data)=>ajax(`/trade/shopcarts/${data.goods}/`,data,"put")

export const delShopCartApi=(id)=>ajax(`/trade/shopcarts/${id}/`,{},"delete")