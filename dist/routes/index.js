"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
exports.router = (0, express_1.Router)();
exports.router.use('/', userRouter_1.default);
exports.router.use('/', productRouter_1.default);
exports.default = exports.router;
//# sourceMappingURL=index.js.map