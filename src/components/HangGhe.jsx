import React, { Component } from "react";
import { connect } from "react-redux";
import { clickBtnGhe } from "../store/actions/BookingTicketActions";

class HangGhe extends Component {
  renderSoHang() {
    // console.log(this.props.hangGhe);
    return this.props.hangGhe.danhSachGhe.map((item, index) => {
      return (
        <button key={index} className="rowNumber">
          {item.soGhe}
        </button>
      );
    });
  }
  clickButtonGhe(item) {
    this.props.dispatch(clickBtnGhe(item));
  }
  renderGhe() {
    return this.props.hangGhe.danhSachGhe.map((item, i) => {
      // console.log(item.soGhe);
      let cssGheDaDat = "";
      let cssGheDangDat = "";
      const dsDangChon = this.props.gheDangChon.dsHangGheDuocChon;
      const index = dsDangChon.findIndex((ghe) => ghe.soGhe === item.soGhe);
      // console.log("index", index);
      index !== -1 && (cssGheDangDat = "gheDangChon");

      let disabled = false;
      item.daDat && (cssGheDaDat = "gheDuocChon") && (disabled = true);
      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={i}
          onClick={() => {
            this.clickButtonGhe(item);
          }}
        >
          {item.soGhe}
        </button>
      );
    });
  }
  render() {
    // console.log("props", this.props.gheDangChon.dsHangGheDuocChon);
    return (
      <div className="text-light text-left">
        <div className="my-2" style={{ fontSize: "20px", fontWeight: "600" }}>
          {this.props.hangGhe.hang}
          {this.props.soHang === 0 ? this.renderSoHang() : this.renderGhe()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { gheDangChon: state.BookingTicketReducer };
};

export default connect(mapStateToProps)(HangGhe);
