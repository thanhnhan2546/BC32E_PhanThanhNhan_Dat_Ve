import {
  CLICK_BUTTON_GHE,
  CLICK_BUTTON_HUY,
} from "../constants/BookingTicketConstants";

export const clickBtnGhe = (ghe) => ({
  type: CLICK_BUTTON_GHE,
  payload: ghe,
});

export const clickBtnHuy = (soGhe) => ({
  type: CLICK_BUTTON_HUY,
  payload: soGhe,
});
