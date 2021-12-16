import http from "./httpServices";

export function addContact(data) {
    return http.post('/contacts', data)
}