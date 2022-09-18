import React from "react";

import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { rootReducers } from "../reducers";
const store = legacy_createStore(rootReducers);
interface PropsType {
  children: any;
}
const ReduxProvider: React.FC<PropsType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
