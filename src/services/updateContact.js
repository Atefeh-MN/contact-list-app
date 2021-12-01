import http from "./httpServices";

export default function updateContact(id, contact) {
    return http.put(`/contacts/${id}`,contact)
}