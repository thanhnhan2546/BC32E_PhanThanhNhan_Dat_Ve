import React, { Component, Fragment } from "react";
import "./style.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import data from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  renderHangGhe() {
    return data.map((item, index) => {
      return (
        <div key={index} style={{}}>
          <HangGhe hangGhe={item} soHang={index} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="backGround">
        <div className="overlay container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <h1
                className="text-warning"
                style={{ fontSize: "40px", fontWeight: "600" }}
              >
                ĐẶT VÉ XEM PHIM CYBERLEARN.VN
              </h1>
              <div className="text-light" style={{ fontSize: "32px" }}>
                Màn hình
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div className="screen"></div>
                <div>{this.renderHangGhe()}</div>
              </div>
            </div>
            <div className="col-4 text-light ">
              <h1
                className=" text-center my-5"
                style={{ fontSize: "30px", fontWeight: "600" }}
              >
                DANH SÁCH GHẾ BẠN CHỌN
              </h1>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
