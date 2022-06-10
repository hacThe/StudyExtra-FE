const initialState = {
  notificationShow: false,
  settingShow: false,
  darkMode: false,
  confirmActionModal: {
    open: false,
    content: "Hành động này không thể hoàn tác, bạn vẫn muốn thực hiện?",
    action: undefined
  }
};


export function app(state = initialState, { type, ...rest }) {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
}

