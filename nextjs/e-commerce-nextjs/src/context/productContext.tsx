import React, { createContext, useState, ReactNode } from "react";

export interface ProductInOrder {
  id: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
}

interface ProductOrderContextType {
  productsInOrder: ProductInOrder[];
  addProductToOrder: (product: ProductInOrder) => void;
  removeProductFromOrder: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  clearOrder: () => void;
}

const ProductOrderContext = createContext<ProductOrderContextType>({
  productsInOrder: [],
  addProductToOrder: () => {},
  removeProductFromOrder: () => {},
  updateProductQuantity: () => {},
  clearOrder: () => {},
});

export function ProductOrderContextProvider({ children }: { children: ReactNode }) {
  const [productsInOrder, setProductsInOrder] = useState<ProductInOrder[]>([]);

  function addProductToOrder(product: ProductInOrder) {
    setProductsInOrder((prev) => {
        const existingProduct = prev.find((newProduct) => newProduct.id === product.id);
        if (existingProduct) {
            return prev.map((product) => 
                product.id === existingProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            );
        }
        return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeProductFromOrder(productId: number) {
    setProductsInOrder((prev) => prev.filter((p) => p.id !== productId));
  }

  function updateProductQuantity(productId: number, quantity: number) {
    setProductsInOrder((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, quantity } : p
      )
    );
  }

  function clearOrder() {
    setProductsInOrder([]);
  }

  return (
    <ProductOrderContext.Provider
      value={{
        productsInOrder,
        addProductToOrder,
        removeProductFromOrder,
        updateProductQuantity,
        clearOrder,
      }}
    >
      {children}
    </ProductOrderContext.Provider>
  );
}

export default ProductOrderContext;