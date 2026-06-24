type ID = number;

class BaseStore<T extends { id: ID }> {
    storage: Record<ID, T> = {}; // Datenspeicher mit KEY - VALUE

    add(item: T) {
        this.storage[item.id] = item;
    }

    remove(id: ID): T | undefined {
        const item = this.storage[id];
        delete this.storage[id];
        return item;
    }

    getBy<K extends keyof T>(key: K, value: T[K]): T[] {
        return Object.values(this.storage).filter(item => item[key] === value);
    }

    // for explaining keyof 
    getValue(id: ID, key: keyof T) {
        return this.storage[id]?.[key]; // what is the return type?
    }

    getValue2<K extends keyof T>(id: ID, key: K): T[K] | undefined {
        return this.storage[id]?.[key];
    }
}


class TodoStore extends BaseStore<{ id: ID, title: string }> { }
class PersonStore extends BaseStore<{ id: ID, name: string }> { }

const todoStore = new TodoStore()
todoStore.add({ id: 1, title: 'Generics lernen' })

const personStore = new PersonStore()
personStore.add({ id: 1, name: 'Michael' })

const result1 = todoStore.getBy("title", "Generics lernen")
console.log(result1)

const result2 = personStore.getBy("name", "Michael")
console.log(result2)


const x1 = todoStore.getValue(1, 'title'); // type string | number | undefinied
const x2 = todoStore.getValue2(1, 'title'); // type string | undefinied
console.log(x1, x2);