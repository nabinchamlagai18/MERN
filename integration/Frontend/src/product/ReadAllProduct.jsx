import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReadAllProduct = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/product",
        method: "get",
      });

      setProducts(result.data.result);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      toast.error(error.response?.data?.message || "Failed to load products");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`http://localhost:8000/product/${id}`);
      toast.success("Product deleted successfully");
      getData(); // Refresh product list instantly
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products.map((value) => (
        <div key={value._id} style={{marginBottom: "10px", padding: "10px" }}>
          <p>Product Name: {value.name}</p>
          <p>Price: {value.price}</p>
          <p>Available Quantity: {value.quantity}</p>
          <p>Description: {value.description}</p>

          <button style={{ marginRight: "5px" }} onClick={() => navigate(`/product/${value._id}`)}>
            View Details
          </button>
          <button style={{ marginRight: "5px" }} onClick={() => navigate(`/product/update/${value._id}`)}>
            Edit
          </button>
          {/* Fixed: calls handleDelete(value._id) directly */}
          <button style={{backgroundColor: "#f87502", color: "white" }} onClick={() => handleDelete(value._id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReadAllProduct;