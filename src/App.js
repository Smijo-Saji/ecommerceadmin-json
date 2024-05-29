import { Route, Routes } from "react-router-dom";
import "./App.css";

import SideBar from "./components/SideBar";
import ProductList from "./pages/ProductList";
import DashBoard from "./pages/DashBoard";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import FilteredProducts from "./pages/FilteredProducts";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/addproduct" element={<CreateProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/filteredproduct/:name" element={<FilteredProducts />} />
      </Routes>
    </div>
  );
}

export default App;
