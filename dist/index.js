"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const connection_1 = __importDefault(require("./connection/connection"));
const path_1 = __importDefault(require("path"));
const product_1 = require("./src/models/product");
const person_1 = require("./src/models/person");
const donation_1 = require("./src/models/donation");
const productType_1 = require("./src/models/productType");
const morgan = require('morgan');
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static('dist/front')); //changes to static files
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'front', 'index.html'));
});
app.get('/products-json', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll();
        res.json(products); // Send products as JSON
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
}));
app.get('/productTypes-json', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productTypes = yield productType_1.ProductType.findAll();
        res.json(productTypes);
    }
    catch (error) {
        res.status(500);
    }
}));
app.get('/donations-json', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donations = yield donation_1.Donation.findAll();
        res.json(donations);
    }
    catch (error) {
        res.status(500);
    }
}));
app.get('/people-json', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const people = yield person_1.Person.findAll();
        res.json(people);
    }
    catch (error) {
        res.status(500);
    }
}));
(0, connection_1.default)();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
