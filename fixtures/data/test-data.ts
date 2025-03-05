/*-- Test Data TEMPLATE for Use in Tests --*/

export const TEST_DATA = {
  USER: {
    EMAIL: process.env.TEST_USER_EMAIL || 'testuser@example.com',
    PASSWORD: process.env.TEST_USER_PASSWORD || 'testpassword123',
    INVALID_EMAIL: 'invalid@example.com',
    INVALID_PASSWORD: 'wrongpassword'
  },
  RESTAURANT: {
    SEARCH_CITY: 'Buenos Aires',
    SEARCH_TERM: 'Pizza',
    FIRST_RESTAURANT_NAME: 'Example Restaurant',
    CUISINE_TYPES: ['Italian', 'Chinese', 'Mexican']
  },
  CART: {
    ITEM_NAME: 'Margherita Pizza',
    QUANTITY: 2,
    MULTIPLE_ITEMS: [
      { name: 'Margherita Pizza', quantity: 1 },
      { name: 'Pepperoni Pizza', quantity: 1 }
    ]
  },
  PROFILE: {
    NEW_NAME: 'Updated User',
    NEW_EMAIL: 'updated.user@example.com'
  },
  CHECKOUT: {
    DELIVERY_ADDRESS: {
      STREET: '123 Test Street',
      CITY: 'Test City',
      STATE: 'TS',
      ZIP: '12345'
    },
    PAYMENT_METHOD: 'Credit Card'
  }
};
