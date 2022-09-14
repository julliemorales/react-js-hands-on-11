import React from "react";

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.state = { numberHolder: "TN-" + this.getRandomNumberBetween(50, 99) };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getRandomNumberBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    alert(
      "Thank You, " +
        this.state.name +
        "\nYour Complaint Was Submitted." +
        "\nTransaction ID is: " +
        this.state.numberHolder
    );
    event.preventDefault();
  }
  render() {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <form
          onSubmit={this.handleSubmit}
          className=" text-start col-lg-auto g-3 align-items-center"
        >
          <label>
            <div className="mb-3">
              <div className="display-6 mb-3">Name:</div>
              <input
                className="form-control mb-5"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="enter your name here"
              />
            </div>
            <div className="mb-3">
              <div className="display-6 mb-3">Complaint:</div>
              <textarea
                className="form-control mb-5"
                placeholder="enter your concern here"
              ></textarea>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </label>
        </form>
      </div>
    );
  }
}
export default ComplaintRegister;
