/*-- Test Data TEMPLATE for Use in Tests --*/

export const TEST_DATA = {
  USER: {
    EMAIL: process.env.TEST_USER_EMAIL || 'testuser@example.com',
    PASSWORD: process.env.TEST_USER_PASSWORD || 'testpassword123',
    INVALID_EMAIL: 'invalid@example.com',
    INVALID_PASSWORD: 'wrongpassword'
  },
  PRODUCT: {
    NAME: 'The Big Piza',
    IMAGE_PATH: 'fixtures/images/wp1813257.jpg',
    DESCRIPTION:'Delicious Pizza with peperoni',
    PRICE: "15",
  },
};
