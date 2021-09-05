/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    _title: { type: String, required: true },
    _description: { type: String, required: true },
    _isDone: { type: Boolean, required: true },
});

export interface Task extends mongoose.Document {
    _id: string;
    _title: string;
    _description: string;
    _isDone: boolean;
}
