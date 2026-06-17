import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        require: true,
        trim: true,
        min: 5,
        max: 80,
        lowercase: true
    },
    course: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    }
},
    { timestamps: true }
);
export default mongoose.model('student',studentSchema);