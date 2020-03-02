import ajax from "@/api/ajax.js"

export const bannerListApi = (data) => ajax("/goods/banners/", data)
export const bannerAddApi = (data) => ajax("/goods/banners/", data, "POST")
export const bannerEditApi = (data) => ajax("/goods/banners/", data, "PATCH")
export const bannerDelApi = (id) => ajax(`/goods/banners/${id}/`, {}, "DELETE")



export const categoryListApi = (data) => ajax("/goods/category/", data)
export const categoryAddApi = (data) => ajax("/goods/category/", data, "POST")
export const categoryEditApi = (data) => ajax(`/goods/category/${data.id}/`, data, "PATCH")
export const categoryDelApi = (id) => ajax(`/goods/category/${id}/`, {}, "DELETE")

export const goodsListApi = (data) => ajax("/goods/goods/", data)
export const goodsAddApi = (data) => ajax("/goods/goods/", data, "POST")
export const goodsEditApi = (data) => ajax(`/goods/goods/${data.id}/`, data, "PATCH")
export const goodsDelApi = (id) => ajax(`/goods/goods/${id}/`, {}, "DELETE")

export const imagesListApi = (data) => ajax("/goods/images/", data)
export const imagesAddApi = (data) => ajax("/goods/images/", data, "POST")
export const imagesEditApi = (data) => ajax(`/goods/images/${data.id}/`, data, "PATCH")
export const imagesDelApi = (id) => ajax(`/goods/images/${id}/`, {}, "DELETE")