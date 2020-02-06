import ajax from "@/api/ajax.js"

export const getWordMapApi = () => ajax("/upload/world.geo.json")
export const getShanDongApi = () => ajax("/upload/shandong.geo.json")

export const getMapApi = (url) => ajax(url)
