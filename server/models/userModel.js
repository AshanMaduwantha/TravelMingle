import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verfyOtp: {
        type: String,
        default: ''
    },
    verfyOtpExpireAt: {
        type: Number,
        default: 0
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    resetOtp: {
        type: Number,
        default: ''
    },
    resetOtpExpireAt: {
        type: Number,
        default: 0
    },
});

const userModel = mongoose.model.user || mongoose.model('user', userSchema);

export default userModel;