import ajax from "@/api/ajax.js"

export const yqApi = () => ajax("/upload/feiyan-data-list.json")

export const postLoginApi = () => ajax("/tools/wxlogin/", {}, "POST")
export const getLoginApi = () => ajax("/tools/wxlogin/")
export const getwxApi = () => ajax("/tools/wx/", {}, "POST")

export const wxfApi = () => ajax("/tools/wxf/")

