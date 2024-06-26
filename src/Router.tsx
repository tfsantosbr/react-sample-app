import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";
import { Login } from "./pages/Login";
import { ProductList } from "./pages/ProductList";
import { ProductForm } from "./pages/ProductForm";
import { CategoriesList } from "./pages/CategoriesList";
import { CategoriesForm } from "./pages/CategoriesForm";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Dashboard />}>
        <Route path="products" element={<ProductList />} />
        <Route path="products/create" element={<ProductForm />} />
        <Route path="products/edit" element={<ProductForm />} />
        <Route path="categories" element={<CategoriesList />} />
        <Route path="categories/create" element={<CategoriesForm />} />
        <Route path="categories/edit" element={<CategoriesForm />} />
      </Route>
    </Routes>
  );
}
