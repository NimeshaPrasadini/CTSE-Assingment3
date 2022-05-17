import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCcVisa,FaCcAmex,FaCcMastercard,FaLandmark,FaEnvelope,FaPhoneSquareAlt } from "react-icons/fa";
import { ProductDataContext } from "../context/ProductFormContext ";
import { BASE_URL } from "../config/config";


const CustomerForm = () => {
    const {  setUserData, userData } =
		useContext(ProductDataContext);
			
	const history = useHistory();

	const handleRegister = async (e) => {
		e.preventDefault();
		
		try {
			const response = await fetch(`${BASE_URL}/product/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (response.ok) {
				toast.success("Product has been created");
				history.push("/product");
			} else {
				toast.error("Sorry, something went wrong");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="register-content">
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			
			<form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<h2>Add Product</h2>
				<div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="productname">Product Name <FaEnvelope/></label>
					<input
						type="text"
						name="productname"
						id="productname"
						placeholder="productname"
						required
						autoComplete="off"
						value={userData.productname}
						onChange={(e) =>
							setUserData({ ...userData, productname: e.target.value })
						}
					/>
					<label htmlFor="price">Price <FaPhoneSquareAlt/></label>
					<input
						type="price"
						name="price"
						id="price"
						required
						maxLength="2"
						autoComplete="off"
						value={userData.price}
						onChange={(e) =>
							setUserData({ ...userData, price: e.target.value })
						}
					/>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="quantity">Quantity </label>
							<input
								type="text"
								name="quantity"
								id="quantity"
								maxLength="39"
								placeholder="quantity"
								required
								autoComplete="off"
								value={userData.quantity}
								onChange={(e) =>
									setUserData({ ...userData, quantity: e.target.value })
								}
							/>

                            <label htmlFor="type">Type </label>
							<input
								type="text"
								name="type"
								id="type"
								
								placeholder="type"
								required
								autoComplete="off"
								value={userData.type}
								onChange={(e) =>
									setUserData({ ...userData, type: e.target.value })
								}
							/>
						</div>
						
					</div>

					
					</div>
				
				<div className="button-container">
					
					<button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={handleRegister}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default CustomerForm;
