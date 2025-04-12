"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("react-router");
require("./App.css");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
const App = (props) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("nav", { className: "level", children: [(0, jsx_runtime_1.jsx)("div", { className: "level-left", children: (0, jsx_runtime_1.jsxs)("div", { className: "level-item", children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHome, className: "fas fa-lg mr-3" }), (0, jsx_runtime_1.jsxs)("div", { className: "subtitle is-5", children: [(0, jsx_runtime_1.jsx)("strong", { children: "This's" }), " my store"] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "level-right", children: [(0, jsx_runtime_1.jsx)("div", { className: "level-item", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "Home" }) }), (0, jsx_runtime_1.jsx)("div", { className: "level-item", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/products", children: "Products" }) }), (0, jsx_runtime_1.jsx)("div", { className: "level-item", children: "Orders" }), (0, jsx_runtime_1.jsx)("div", { className: "level-item", children: "Providers" })] }), (0, jsx_runtime_1.jsx)("div", { className: "level-right", children: (0, jsx_runtime_1.jsx)("div", { className: "level-item", children: (0, jsx_runtime_1.jsx)("button", { type: "button", className: "button is-link is-outlined", children: "Login" }) }) })] }), (0, jsx_runtime_1.jsx)(react_router_1.Outlet, {})] }));
};
exports.default = App;
