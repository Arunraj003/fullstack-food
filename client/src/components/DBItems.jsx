import React from "react";
import { HiCurrencyRupee } from "../assets/icons";
import { useSelector } from "react-redux";
import { DataTable } from "../components";

const DBItems = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="flex items-center justify-self-center pt-6 w-full gap-4">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                alt="img"
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
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
              <p className="text-xl font-semibold flex items-center justify-center">
                <HiCurrencyRupee className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
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
              if (window.confirm("Are you sure want to perform this action")) {
              }{
                
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
