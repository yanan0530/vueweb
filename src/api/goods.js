import ajax from "@/api/ajax.js"

export const goodsListApi=(data)=>ajax("/goods/list/",data)
export const goodsDetailApi=(id)=>ajax(`/goods/list/${id}/`)
export const goodsFavApi=(goodsId,type="GET")=>ajax(`/oper/userfavs/${goodsId}/`,{},type)
export const goodsAddApi=(goods,type="POST")=>ajax(`/oper/userfavs/`,{goods},type)
export const goodsDelFavApi=(goodsId,type="delete")=>ajax(`/oper/userfavs/${goodsId}/`,{},type)

export const listGoodsBannerApi=()=>ajax("/goods/banners/")