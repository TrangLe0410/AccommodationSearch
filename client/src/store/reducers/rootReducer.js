import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import appReducer from "./appReducer";
import postReducer from "./postReducer"
const commonConfig = {
    storage,
    stateRrconciler: autoMergeLevel2,
};
const authConfig = {
    ...commonConfig,
    key: "auth",
    whitelist: ["isLoggedIn", "token"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
    app: appReducer,
    post: postReducer,
});

export default rootReducer;