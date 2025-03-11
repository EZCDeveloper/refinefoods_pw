**TS01_Export Orders by CSV file**

**TC-001: Verify the Existence and Visibility of the Export Button**

📌 **Description:**

-   **Given** the user is logged in as an administrator or restaurant employee
-   **When** they access the Order Management page
-   **Then** the "Export to CSV" button should be present and visible

📌 **Preconditions:**

-   The user must be authenticated as an **administrator or restaurant employee**.
-   A **Order Management** section must exist in the application.

📌 **Expected Result:**

-   The **"Export to CSV"** button should exist, be visible, and be enabled for use.

📌 **Steps:**

1.  Log in to the application with valid credentials.
2.  Navigate to the **Order Management** section.
3.  Verify that the **"Export to CSV"** button is present on the page.
4.  Verify that the button is visible and enabled.

* * * * *

**TC-002: Verify That Exporting Generates a CSV File Correctly**

📌 **Description:**

📌 **Preconditions:**

-   The user must be authenticated and on the **Order Management** page.
-   There must be at least **one registered order** in the database.

📌 **Expected Result:**

-   A `.csv` file is downloaded with the correct format and a valid date in its name.

📌 **Steps:**

1.  Click on the **"Export to CSV"** button.
2.  Wait for the file download to start.
3.  Verify that the downloaded file has a **.csv** extension.
4.  Verify that the file name follows the expected format (`orders_YYYY-MM-DD.csv`).

* * * * *

**TC-003: Verify That the CSV Content Is Correct**

📌 **Description:**

📌 **Preconditions:**

-   **Orders must be registered** in the system before the export.

📌 **Expected Result:**

-   The CSV file must contain data corresponding to the orders registered in the application.

📌 **Steps:**

1.  Click on the **"Export to CSV"** button.
2.  Download and open the CSV file.
3.  Verify that the first row contains the correct headers (`id, amount, orderNumber, status, store, user`).
4.  Verify that exists at least 1 order. 

* * * * *

**TC-004: Verify That the CSV Is Empty When There Are No Orders**

📌 **Description:**

📌 **Preconditions:**

-   **There must be no registered orders** in the system before the export.

📌 **Expected Result:**

-   The CSV file should contain only the table headers without any data rows.

📌 **Steps:**

1.  Access the **Order Management** page.
2.  Click on **"Export to CSV"**.
3.  Download and open the CSV file.
4.  Verify that the file **only contains the headers** and does not have additional rows.

* * * * *

**TC-005: Verify That the Button Is Disabled If There Is an Export Error**

📌 **Description:**

📌 **Preconditions:**

-   An API or backend error that generates the CSV must be simulated.

📌 **Expected Result:**

-   The export button should be disabled, or an error message should be displayed.

📌 **Steps:**

1.  Access the **Order Management** page.
2.  Simulate an export API failure (e.g., by disconnecting the server).
3.  Attempt to click on **"Export to CSV"**.
4.  Verify that the button is disabled or that an error message is displayed.