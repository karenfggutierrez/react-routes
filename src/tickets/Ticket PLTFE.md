### Public and Private Routes

**Status:**

OPEN Jun 5th, 2024

**Assignee:**

Karen Gonzales

**Reporter:**

Edgar Lopez

**Development branch:**

private-and-public-routes

**GitHub Repository:**

[https://github.com/edgaromarlopezhernandez/react-routes](https://github.com/edgaromarlopezhernandez/react-routes)

**Start date:**

Jun 5, 2024

**Delivery date:**

Jun 20, 2024

**Description:**

Ensure that public and private routes function correctly.

* If the user is authenticated, they can access both public and private routes but cannot access the LogIn view (public).
* If the user is not authenticated, they cannot access private routes.
* If the authenticated user logs out, the LocalStorage should be cleared.
* If the user is authenticated, their token should be stored in LocalStorage.

Currently, react-router-dom v6 is being used. You can update the version or work with this one but not with earlier versions.

**Acceptance Criteria:**

The route navigation for authenticated users should include all views except login (which is public) since it doesn't make sense to access the login if you are authenticated. If the user is not authenticated, they should only be able to access public routes like home, login, and register.

For any questions, please contact me via LinkedIn.

**Activity and Work History:**

Please update your work here with timestamp if possible.