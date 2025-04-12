"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("../App"));
const ProductPage_1 = __importDefault(require("../pages/ProductPage"));
const ErrorPage_1 = __importDefault(require("../pages/ErrorPage"));
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(App_1.default, {}),
        children: [
            {
                path: "/products",
                element: (0, jsx_runtime_1.jsx)(ProductPage_1.default, {}),
                errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
            }
        ],
        errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
    },
]);
exports.default = router;
