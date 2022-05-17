export const setErrors = (productname) => {
  let errors = {};
  errors.productname = productname ? "" : "productname is required!";
  
  return errors;
};
