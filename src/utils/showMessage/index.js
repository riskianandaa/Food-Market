import { showMessage as showToast, hideMessage } from "react-native-flash-message";

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? colors.green : '#D9435E'
  });
}
