import {
  CLICK_BUTTON_GHE,
  CLICK_BUTTON_HUY,
} from "../constants/BookingTicketConstants";

const initialState = {
  dsHangGheDuocChon: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON_GHE: {
      // console.log(action);
      let temp = [...state.dsHangGheDuocChon];
      const index = temp.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );
      if (index === -1) {
        temp.push(action.payload);
      } else {
        temp.splice(index, 1);
      }
      state.dsHangGheDuocChon = temp;

      return { ...state };
    }
    case CLICK_BUTTON_HUY: {
      let temp = [...state.dsHangGheDuocChon];
      temp = temp.filter((item) => item.soGhe !== action.payload);

      state.dsHangGheDuocChon = temp;

      return { ...state };
    }
    default:
      return state;
  }
};
