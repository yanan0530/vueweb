import ajax from "@/api/ajax.js"

export const getShopApi = () => ajax("/taobao/search", {}, "POST")
export const tbkshopgetApi = (data) => ajax("/taobao/tbkshopget",data, "POST")
export const mmaterialApi = (data) => ajax("/taobao/mmaterial",data, "POST")


//淘宝客-推广者-选品库宝贝列表 
export const taobaoApi=(data)=>ajax(`/taobao/api`,data,"POST")

//taobao.tbk.content.get( 淘宝客-推广者-图文内容输出 )