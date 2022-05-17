import React, { Component } from "react";
import axios from "axios";
import { setErrors } from "./setErrors";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      price: "",
      quantity: "",
      type: "",
      errors: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    axios.get(`http://localhost:3000/product/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          productname: res.data.user.productname,
          price: res.data.user.price,
          quantity: res.data.user.quantity,
        });
      }
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (productname) => {
    const errors = setErrors(productname);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { productname, price, quantity, type } = this.state;
    if (this.validate(productname)) {
      const data = {
        productname: productname,
        price: price,
        quantity: quantity,
      };
      console.log(data);
      axios.put(`http://localhost:3000/product/${id}`, data).then((res) => {
        if (res.data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Edit product successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.props.history.push("/auth/user/admin/products/");
        }
      });
    }
  };

  render() {
    return (
      <div
        className="container"
        style={{
          width: 900,
          backgroundColor: "#a39d9d",
          borderRadius: 5,
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <div className="col-md-10 mt-3 mx-auto">
          <h1 className="h3 mb-3 font-weight-bold">
            <center>Edit Product</center>
          </h1>
          <form className="needs-validation" noValidate>
            <div className="form-group">
              <label>Product name</label>
              <input
                type="text"
                className="form-control"
                name="productname"
                placeholder="Enter productname"
                value={this.state.productname}
                onChange={this.handleInputChange}
                disabled
              />
              {this.state.errors.productname && (
                <div className="text-danger">{this.state.errors.productname}</div>
              )}
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="price"
                className="form-control"
                name="price"
                placeholder="Enter price"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
             
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                name="quantity"
                placeholder="Enter quantity"
                value={this.state.quantity}
                onChange={this.handleInputChange}
              />
             
            </div>

            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Enter type"
                value={this.state.type}
                onChange={this.handleInputChange}
              />
             
            </div>


            <button
              className="btn btn-success"
              type="submit"
              onClick={this.onSubmit}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProduct);
