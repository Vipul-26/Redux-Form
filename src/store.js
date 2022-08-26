import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { reducer as formReducer } from "redux-form";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = createStore(persistedReducer, composeEnhancers());
let persistor = persistStore(store);

export { store, persistor };