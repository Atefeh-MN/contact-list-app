import http from "./httpServices";

export function deleteContact(dataId) {
    return http.delete(`/contacts/${dataId}`)
}