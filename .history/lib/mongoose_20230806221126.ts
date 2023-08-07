import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', false);')
}