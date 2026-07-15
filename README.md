# Power Mobile CRM

**Power Mobile CRM** is a comprehensive Inventory and Billing Management system built with Next.js 16, React 19, and MongoDB. It provides a robust solution for managing products, tracking inventory status, and visualizing business metrics through an intuitive, modular dashboard.

## 🚀 Features

- **User Authentication**: Secure login and registration system using JWT and Bcrypt.
- **Interactive Dashboard**:
  - Real-time overview of key business metrics (Revenue, Sales, Unbilled Value).
  - Visual charts for Revenue Trends, Category Distribution, and Sales Volume.
  - Recent Activity Feed tracking all product movements.
- **Advanced Inventory Management**:
  - **Modular Architecture**: Refactored for scalability and maintainability.
  - **CRUD Operations**: Add, edit, delete, and view products with ease.
  - **Detailed Product Tracking**: Track "Gate Number", "Generation", "Sold Date", and "Sold Price".
  - **Search & Filter**: Advanced filtering by category, status, and billing status.
  - **Bulk Actions**: Bulk delete and status updates.
  - **Bulk Import**: Support for importing products via CSV/Excel files.
- **Financial Tracking**:
  - Track "Sold Price" and "Sold Date" for accurate revenue calculation.
  - Monitor "Unbilled" items to prevent revenue leakage.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for seamless usage on desktop and mobile devices.
- **Secure API**: Protected API routes ensuring data security.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Backend**: Next.js API Routes
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Authentication**: JSON Web Tokens (JWT)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages and API routes
│   ├── api/              # Backend API endpoints
│   ├── dashboard/        # Dashboard page
│   ├── inventory/        # Inventory management page
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   └── layout.tsx        # Root layout with AuthProvider
├── components/           # Reusable UI components
│   ├── dashboard/        # Dashboard specific components (Charts, Stats)
│   ├── inventory/        # Inventory specific components (Table, Filters, Actions)
│   ├── product-modal/    # Product Modal sections (Basic Info, Tech Specs, Financial)
│   ├── Dashboard.tsx     # Main dashboard container
│   ├── InventoryManager.tsx # Main inventory container
│   ├── ProductModal.tsx  # Main product modal container
│   └── Sidebar.tsx       # Navigation sidebar
├── hooks/                # Custom React hooks (e.g., useDashboardStats)
├── lib/                  # Utility functions (e.g., MongoDB connection)
├── models/               # Mongoose database schemas (User, Product)
├── services/             # Business logic and API interaction services
├── contexts/             # React contexts (AuthContext, InventoryContext)
└── public/               # Static assets
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18+ recommended).
- **MongoDB**: You need a MongoDB connection string (local or Atlas).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd crm-system
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🔌 API Endpoints

The application exposes the following API endpoints:

- **Auth**:
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Authenticate a user.
- **Products**:
  - `GET /api/products`: Fetch all products.
  - `POST /api/products`: Add a new product (supports bulk).
  - `PUT /api/products/[id]`: Update a product.
  - `DELETE /api/products/[id]`: Delete a product.
  - `DELETE /api/products/bulk`: Bulk delete products.
  - `PATCH /api/products/bulk`: Bulk update product status.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
