"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const server = http_1.default.createServer(app_1.default);
mongoose_1.default.Promise = Promise;
const connectionDB = async () => {
    try {
        mongoose_1.default.connect(process.env.DB_URL);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
server.listen(3000, () => {
    connectionDB();
    console.log("Server running on http://localhost:3000/");
});
//# sourceMappingURL=index.js.map