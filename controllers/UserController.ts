import { Request, Response } from 'express';
import { getConnection } from '../models/UserModel';


export const getUser = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection();
        const sql = 'SELECT * FROM user';
        const [result] = await connection.query(sql);
        connection.release();

        console.log('Data Get Successfully...');
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const addUser = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection();
        const data = req.body;
        const sql = 'INSERT INTO user SET ?';
        const [result] = await connection.query(sql, [data]);
        connection.release();

        console.log('Data Post Successfully....');
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection();
        const id = req.params.id;
        const data = req.body;
        const sqlQuery = 'UPDATE user SET ? WHERE id = ?';

        const [result] = await connection.query(sqlQuery, [data, id]);
        connection.release();

        console.log('Data Update Successfully...');
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection();
        const id = req.params.id;
        const sqlQuery = 'DELETE FROM user WHERE id = ?';

        const [result] = await connection.query(sqlQuery, id);
        connection.release();

        console.log('Data Delete Successfully...');
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// export { getUser, addUser, updateUser, deleteUser };