/*-- Texts TEMPLATE for Use in Tests --*/

export interface TestCopy {
    MESSAGES: {
        PRODUCT_CREATED_SUCCESS: string;
        PRODUCT_NAME_REQUIRED: string;
    };
}

export const TEST_COPY: TestCopy = {
  MESSAGES: {
    PRODUCT_CREATED_SUCCESS: 'Successfully created Products',
    PRODUCT_NAME_REQUIRED: 'This field is required',
  },
};
