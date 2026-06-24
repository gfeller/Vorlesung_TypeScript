interface IOrder {
    _id: string;
    email: string
}

class MyDatastore<T = any> {
    items: T[] = [];

    saveToFile() {
        console.log(this.items);
    }
}

const items1 = new MyDatastore().items
const items2 = new MyDatastore<IOrder>().items