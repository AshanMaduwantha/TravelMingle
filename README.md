## 👤 User Management System  

### 📌 Features  
- **User Registration** – Users can sign up with their name, email, phone number, and password.  
- **Login & Authentication** – Secure login using JWT authentication.  
- **Profile Management** – Users can update their details, such as name, preferences, and payment information.  
- **Booking History** – Users can view past and upcoming reservations.  
- **Account Deactivation** – Users can deactivate or delete their accounts if needed.  

---

### 🔄 CRUD Operations  
- **Create** – Register a new user (store user details in MongoDB).  
- **Read** – Retrieve user details and booking history.  
- **Update** – Modify user information (profile updates, password reset).  
- **Delete** – Deactivate or delete user accounts from the system.  

---

### 🛠️ Technologies Used  
- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Validation:** bcrypt.js for password hashing  

---

### 🔗 API Endpoints  
| Method | Endpoint | Description |  
|--------|---------|-------------|  
| **POST** | `/api/users/register` | Register a new user |  
| **POST** | `/api/users/login` | Authenticate user & return token |  
| **GET** | `/api/users/:id` | Get user details & booking history |  
| **PUT** | `/api/users/:id` | Update user profile |  
| **DELETE** | `/api/users/:id` | Delete user account |  

---

### 🎯 How to Run  
1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
