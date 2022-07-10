"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'get users'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get user',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post user',
        body
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put user',
        body,
        id
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete user',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map