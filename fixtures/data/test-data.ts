/*-- Test Data TEMPLATE for Use in Tests --*/

// Interface for Test Data
export interface TestData {
  product: {
    name: string;
    imagePath: string;
    description: string;
    price: string;
  },
  csv: {
    orderHeaders: string[];
  };
}

export const TEST_DATA: TestData = {
  product: {
    name: 'The Big Pizza',
    imagePath: 'fixtures/images/wp1813257.jpg',
    description: 'Delicious Pizza with pepperoni',
    price: "15",
  },
  csv: {
    orderHeaders: ['id', 'amount', 'orderNumber', 'status', 'store', 'user']
  }
};
