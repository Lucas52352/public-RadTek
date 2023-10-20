"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_openid_connect_1 = require("express-openid-connect");
const userRouter = (0, express_1.Router)();
userRouter.get('/user', (0, express_openid_connect_1.requiresAuth)(), (req, res) => {
    res.send(req.oidc.user);
});
userRouter.get('/users');
userRouter.get('/users/:id');
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map