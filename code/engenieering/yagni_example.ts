type Product = {
  price: number;
};

class ShoppingCart {
  private products: Product[] = [];

  add(product: Product) {
    this.products.push(product);
  }

  getTotal(): number {
    const toPrice = (product: Product) => Number(product.price) || 0;
    const sum = (a: number, b: number) => a + b;

    return this.products
      .map(toPrice)
      .reduce(sum, 0);
  }

  exportToPdf() { }
}

{
  class ShoppingCart {
    private products: Product[] = [];

    add(product: Product) {
      this.products.push(product);
    }

    getTotal(): number {
      const toPrice = (product: Product) => Number(product.price) || 0;
      const sum = (a: number, b: number) => a + b;

      return this.products
        .map(toPrice)
        .reduce(sum, 0);
    }
  }
}



{
  class ShoppingCart {
    private products: Product[] = [];

    add(product: Product) {
      this.products.push(product);
    }

    getTotal(): number {
      return this.products.reduce(
        (sum, product) => sum + product.price,
        0
      );
    }
  }
}


{
  import { sum } from './math'

  class ShoppingCart {
    private products: Product[] = [];

    add(product: Product) {
      this.products.push(product);
    }

    getTotal(): number {
      return sum(this.products);
    }
  }
}


