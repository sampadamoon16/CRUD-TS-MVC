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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = void 0;
const UserModel_1 = require("../models/UserModel");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, UserModel_1.getConnection)();
        const sql = 'SELECT * FROM user';
        const [result] = yield connection.query(sql);
        connection.release();
        console.log('Data Get Successfully...');
        res.status(200).json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getUser = getUser;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, UserModel_1.getConnection)();
        const data = req.body;
        const sql = 'INSERT INTO user SET ?';
        const [result] = yield connection.query(sql, [data]);
        connection.release();
        console.log('Data Post Successfully....');
        res.status(200).json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.addUser = addUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, UserModel_1.getConnection)();
        const id = req.params.id;
        const data = req.body;
        const sqlQuery = 'UPDATE user SET ? WHERE id = ?';
        const [result] = yield connection.query(sqlQuery, [data, id]);
        connection.release();
        console.log('Data Update Successfully...');
        res.status(200).json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, UserModel_1.getConnection)();
        const id = req.params.id;
        const sqlQuery = 'DELETE FROM user WHERE id = ?';
        const [result] = yield connection.query(sqlQuery, id);
        connection.release();
        console.log('Data Delete Successfully...');
        res.status(200).json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteUser = deleteUser;
// export { getUser, addUser, updateUser, deleteUser };
