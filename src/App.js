import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nilai1: null,
      nilai2: null,
      nilai3: null,
      data1: null,
      data2: null,
      data3: null,
      checkNilai1: false,
      checkNilai2: false,
      checkNilai2: false,

      hasil: null
    };
  }

  chekIsNan = (value, list) => {
    if (value) {
      list.push(value);
    }
  };

  onPlus = e => {
    e.preventDefault();
    const data = [];
    let nilai1 = null;
    let nilai2 = null;
    let nilai3 = null;

    if (this.state.checkNilai1 === true) {
      nilai1 = parseInt(this.state.nilai1);
    }
    if (this.state.checkNilai2 === true) {
      nilai2 = parseInt(this.state.nilai2);
    }
    if (this.state.checkNilai3 === true) {
      nilai3 = parseInt(this.state.nilai3);
    }

    this.chekIsNan(nilai1, data);
    this.chekIsNan(nilai2, data);
    this.chekIsNan(nilai3, data);

    let result = data[0];
    for (let i = 1; i < data.length; i++) {
      result += data[i];
    }
    if (data.length <= 1) {
      this.setState({ hasil: "error" });
    } else {
      this.setState({ hasil: result });
    }
  };

  onMinus = e => {
    e.preventDefault();
    const data = [];
    let nilai1 = null;
    let nilai2 = null;
    let nilai3 = null;

    if (this.state.checkNilai1 === true) {
      nilai1 = parseInt(this.state.nilai1);
    }
    if (this.state.checkNilai2 === true) {
      nilai2 = parseInt(this.state.nilai2);
    }
    if (this.state.checkNilai3 === true) {
      nilai3 = parseInt(this.state.nilai3);
    }

    this.chekIsNan(nilai1, data);
    this.chekIsNan(nilai2, data);
    this.chekIsNan(nilai3, data);

    let result = data[0];
    for (let i = 1; i < data.length; i++) {
      result -= data[i];
    }
    if (data.length <= 1) {
      this.setState({ hasil: "error" });
    } else {
      this.setState({ hasil: result });
    }
  };

  onDevidedBy = e => {
    e.preventDefault();
    const data = [];
    let nilai1 = null;
    let nilai2 = null;
    let nilai3 = null;

    if (this.state.checkNilai1 === true) {
      nilai1 = parseInt(this.state.nilai1);
    }
    if (this.state.checkNilai2 === true) {
      nilai2 = parseInt(this.state.nilai2);
    }
    if (this.state.checkNilai3 === true) {
      nilai3 = parseInt(this.state.nilai3);
    }

    this.chekIsNan(nilai1, data);
    this.chekIsNan(nilai2, data);
    this.chekIsNan(nilai3, data);

    let result = data[0];
    for (let i = 1; i < data.length; i++) {
      result /= data[i];
    }
    if (data.length <= 1) {
      this.setState({ hasil: "error" });
    } else {
      this.setState({ hasil: result });
    }
  };

  onTimes = e => {
    e.preventDefault();
    const data = [];
    let nilai1 = null;
    let nilai2 = null;
    let nilai3 = null;

    if (this.state.checkNilai1 === true) {
      nilai1 = parseInt(this.state.nilai1);
    }
    if (this.state.checkNilai2 === true) {
      nilai2 = parseInt(this.state.nilai2);
    }
    if (this.state.checkNilai3 === true) {
      nilai3 = parseInt(this.state.nilai3);
    }

    this.chekIsNan(nilai1, data);
    this.chekIsNan(nilai2, data);
    this.chekIsNan(nilai3, data);

    let result = data[0];
    for (let i = 1; i < data.length; i++) {
      result *= data[i];
    }
    if (data.length <= 1) {
      this.setState({ hasil: "error" });
    } else {
      this.setState({ hasil: result });
    }
  };

  onChangeNilai1 = e => {
    this.setState({ nilai1: e.target.value });
  };
  onChangeNilai2 = e => {
    this.setState({ nilai2: e.target.value });
  };
  onChangeNilai3 = e => {
    this.setState({ nilai3: e.target.value });
  };
  onChangeCheckNilai1 = () => {
    this.setState(initialState => ({
      checkNilai1: !initialState.checkNilai1
    }));
  };
  onChangeCheckNilai2 = () => {
    this.setState(initialState => ({
      checkNilai2: !initialState.checkNilai2
    }));
  };
  onChangeCheckNilai3 = () => {
    this.setState(initialState => ({
      checkNilai3: !initialState.checkNilai3
    }));
  };

  render() {
    return (
      <div>
        <div
          style={{
            margin: "5% 20%",
            backgroundColor: "#FF7F50",
            borderRadius: "25px"
          }}
        >
          <div className="calculator">
            <div style={{ textAlign: "center" }}>
              <h1>Selamat Datang di Web Calculator</h1>
            </div>
            <p>
              1.Terdapat 3 buah input number yang masing-masing memiliki
              checklist di sampingnya
            </p>
            <p>
              2.Terdapat 4 buah tombol operator yatu: tambah, kurang, kali,
              bagi.
            </p>
            <p>
              3.Bila salah satu tombol operator di klik, maka akan memunculkan
              angka hasil operasi value dari input-input yang di checklist.
            </p>
            <p>
              4.Bila yg di checklist hanya 1 input, muncul pesan error. Bila
              yang dichecklist hanya 2, maka bilangan yang dichekclist yang
              hanya akan di operasikan. Bila 3 input yang di checklist maka 3
              value tersebut akan di operasikan berurutan..
            </p>
          </div>
          <div className="formCalculator">
            <h1>Masukkan Angka</h1>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Col sm={9}>
                  <Form.Control
                    type="nilai1"
                    name="nilai1"
                    value={this.state.nilai1}
                    onChange={this.onChangeNilai1}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    checked={this.state.checkNilai1}
                    onChange={this.onChangeCheckNilai1}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Col sm={9}>
                  <Form.Control
                    type="nilai2"
                    name="nilai2"
                    value={this.state.nilai2}
                    onChange={this.onChangeNilai2}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    checked={this.state.checkNilai2}
                    onChange={this.onChangeCheckNilai2}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Col sm={9}>
                  <Form.Control
                    type="nilai3"
                    name="nilai3"
                    value={this.state.nilai3}
                    onChange={this.onChangeNilai3}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    checked={this.state.checkNilai3}
                    onChange={this.onChangeCheckNilai3}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col>
                  <Button onClick={this.onPlus}>+</Button>
                </Col>
                <Col>
                  <Button onClick={this.onMinus}>-</Button>
                </Col>
                <Col>
                  <Button onClick={this.onDevidedBy}>/</Button>
                </Col>
                <Col>
                  <Button onClick={this.onTimes}>X</Button>
                </Col>
              </Form.Group>
            </Form>
            <h1>Hasil : {this.state.hasil}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
