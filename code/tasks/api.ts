export const getUserById = function (id: string) {
    if (typeof (id) !== 'string') {
        throw Error("id has wrong type")
    }
    return { id: id, name: 'Dummy' }
}