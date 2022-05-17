import React, { useState, createContext } from "react";

import App from "../components/App";

export const ProductDataContext = createContext();

const ProductFormContext = () => {
	
	const [userData, setUserData] = useState({});
	
	
	

	return (
		<div>
			<ProductDataContext.Provider
				value={{
					
					userData,
					setUserData,
					
					
					
				}}
			>
				<App />
			</ProductDataContext.Provider>
		</div>
	);
};

export default ProductFormContext;
