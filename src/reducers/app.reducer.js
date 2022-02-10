const initialState = {
  notificationShow: false,
  settingShow: false,
  darkMode: false,
};


export function app(state = initialState, { type, ...rest }) {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
}

