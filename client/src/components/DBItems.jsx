import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getAllProducts } from "../api";
import { HiCurrencyRupee } from "../assets/icons";
import { DataTable } from "../components";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setAllProducts } from "../context/actions/productActions";

const DBItems = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // Fetch products on component mount
  useEffect(() => {
    getAllProducts()
      .then((data) => {
        dispatch(setAllProducts(data));
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, [dispatch]);

  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
                alt="Product"
              />
            ),
          },
          {
            title: "Name",
            field: "product_name",
          },
          {
            title: "Category",
            field: "product_category",
          },
          {
            title: "Price",
            field: "product_price",
            render: (rowData) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center">
                <HiCurrencyRupee className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products || []}
        title="List of Products"
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Data",
            onClick: (event, rowData) => {
              alert("You want to edit " + rowData.productId);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Data",
            onClick: (event, rowData) => {
              if (window.confirm("Are you sure you want to perform this action?")) {
                deleteAProduct(rowData.productId)
                  .then((res) => {
                    dispatch(alertSuccess("Product Deleted"));
                    setTimeout(() => {
                      dispatch(alertNULL());
                    }, 3000);
                    return getAllProducts();
                  })
                  .then((data) => {
                    dispatch(setAllProducts(data));
                  })
                  .catch((error) => {
                    console.error("Failed to delete product or fetch updated products:", error);
                  });
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
