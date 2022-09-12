import React, { Component } from "react";
import { connect } from "react-redux";
// import "./style.css";
import AbcIcon from "@mui/icons-material/Abc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clickBtnHuy } from "../store/actions/BookingTicketActions";
class ThongTinDatGhe extends Component {
  deleteGheDangChon(soGhe) {
    this.props.dispatch(clickBtnHuy(soGhe));
  }
  renderBodyTable() {
    return this.props.gheDangChon.dsHangGheDuocChon.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td> {Number(item.gia).toLocaleString("vie")}</td>
          <td
            className="text-center text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.deleteGheDangChon(item.soGhe);
            }}
          >
            X
          </td>
        </tr>
      );
    });
  }
  renderTotal() {
    return this.props.gheDangChon.dsHangGheDuocChon.reduce(
      (prevValue, currValue) => {
        return (prevValue += currValue.gia);
      },
      0
    );
  }
  render() {
    return (
      <div>
        <div>
          <button className="gheDuocChon" />
          <span style={{ fontSize: "25px", marginLeft: "10px" }}>
            Ghế đã đặt
          </span>
        </div>
        <div>
          <button className="gheDangChon" />
          <span style={{ fontSize: "25px", marginLeft: "10px" }}>
            Ghế đang chọn
          </span>
        </div>
        <div>
          <button className="ghe" />
          <span style={{ fontSize: "25px", marginLeft: "10px" }}>
            Ghế chưa chọn
          </span>
        </div>
        <div>
          <table className="table text-light" border={3}>
            <thead>
              <tr style={{ fontSize: "35px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderBodyTable()}
              {this.props.gheDangChon.dsHangGheDuocChon.length !== 0 && (
                <tr>
                  <td>Tổng</td>
                  <td>{this.renderTotal().toLocaleString("vie")}</td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { gheDangChon: state.BookingTicketReducer };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
