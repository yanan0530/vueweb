import ajax from "@/api/ajax.js"


export const excelListApi = (data) => ajax("/excelcms/recod/", data)
// export const imagesAddApi = (data) => ajax("/goods/images/", data, "POST")
// export const imagesEditApi = (data) => ajax(`/goods/images/${data.id}/`, data, "PATCH")
// export const imagesDelApi = (id) => ajax(`/goods/images/${id}/`, {}, "DELETE")