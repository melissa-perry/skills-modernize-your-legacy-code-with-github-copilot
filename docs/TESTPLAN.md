# Student Account Management System Test Plan

This test plan covers all business logic implemented in the COBOL application for student account management. Use this plan to validate the system with business stakeholders and as a basis for future unit and integration tests in Node.js.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|--------------|--------------------|----------|
| TC01 | View initial account balance | App is started; no prior transactions | 1. Start app 2. Select 'View Balance' | Balance displayed as 1000.00 |  |  |  |
| TC02 | Credit account with valid amount | App is started; balance is 1000.00 | 1. Start app 2. Select 'Credit Account' 3. Enter 200.00 | Balance updated to 1200.00; confirmation displayed |  |  |  |
| TC03 | Debit account with valid amount | App is started; balance is 1000.00 | 1. Start app 2. Select 'Debit Account' 3. Enter 300.00 | Balance updated to 700.00; confirmation displayed |  |  |  |
| TC04 | Debit account with insufficient funds | App is started; balance is 100.00 | 1. Start app 2. Select 'Debit Account' 3. Enter 200.00 | Error message: 'Insufficient funds for this debit.'; balance unchanged |  |  |  |
| TC05 | Credit account with zero amount | App is started; balance is 1000.00 | 1. Start app 2. Select 'Credit Account' 3. Enter 0.00 | Balance remains 1000.00; confirmation displayed |  |  |  |
| TC06 | Debit account with zero amount | App is started; balance is 1000.00 | 1. Start app 2. Select 'Debit Account' 3. Enter 0.00 | Balance remains 1000.00; confirmation displayed |  |  |  |
| TC07 | Enter invalid menu choice | App is started | 1. Start app 2. Enter invalid choice (e.g., 5) | Error message: 'Invalid choice, please select 1-4.'; menu redisplayed |  |  |  |
| TC08 | Exit application | App is started | 1. Start app 2. Select 'Exit' | Program displays exit message and terminates |  |  |  |
| TC09 | Multiple sequential credits and debits | App is started; balance is 1000.00 | 1. Start app 2. Credit 100.00 3. Debit 50.00 4. View Balance | Balance reflects all transactions correctly |  |  |  |

