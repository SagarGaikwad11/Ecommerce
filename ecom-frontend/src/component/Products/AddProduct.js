import React, { Component } from "react";

export default class AddProduct extends Component {
  render() {
    return (
      <div>
        <div ClassName="jumbotron">
          <h2>Add Products</h2>
         
          <div ClassName="form-group">
              <label for="pName">Product Name:</label>
              <input
                type="text"
                ClassName="form-control"
                id="pName"
                placeholder="Enter Product Name"
                name="pName"
              />
            </div>

            <div ClassName="form-group">
              <label for="pPrice">Product Price:</label>
              <input
                type="number"
                ClassName="form-control"
                id="pPrice"
                placeholder="Enter Product Price"
                name="pPrice"
              />
            </div>

            <div ClassName="form-group">
              <label for="pRating">Product Rating:</label>
              <input
                type="number"
                ClassName="form-control"
                id="pRating"
                placeholder="Enter Product Rating"
                name="pRating"
              />
            </div>

            <div ClassName="form-group">
              <label for="pDesc">Product Description:</label>
              <input
                type="textarea"
                ClassName="form-control"
                id="pDesc"
                placeholder="Enter Product Description"
                name="pDesc"
              />
            </div>
          
           
            <button type="submit" ClassName="btn btn-info">
              Submit
            </button>
          
        </div>
      </div>
    );
  }
}
