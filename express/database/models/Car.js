import pkg from "mongoose"

const {model , Schema} = pkg;

const CarSchema = new Schema({
    carName: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true,
        unique: true
    },
    isSold: {
        type: Boolean,
        default: false,
    },
    isSoldTimeStamps: {
        type: Date,
    }
}, {
    Timestamps: true
})

export default model('Car', CarSchema)