export const  getUserById = function(id){
    if (typeof (id) !== 'string') {
        throw Error("id has wrong type")
    }
    return {id: id, name: 'Dummy'}
}