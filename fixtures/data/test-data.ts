/*-- Test Data TEMPLATE for Use in Tests --*/

// Interface for Test Data
export interface TestData {
  PRODUCT: {
    NAME: string;
    IMAGE_PATH: string;
    DESCRIPTION: string;
    PRICE: string;
  };
}

export const TEST_DATA: TestData = {
  PRODUCT: {
    NAME: 'The Big Piza',
    IMAGE_PATH: 'fixtures/images/wp1813257.jpg',
    DESCRIPTION: 'Delicious Pizza with peperoni',
    PRICE: "15",
  },
};
