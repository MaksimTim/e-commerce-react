import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCollectionAndDocuments();

      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
