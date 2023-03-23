
//database connectivity for mongodb.
const mongoose = require("mongoose");

const connectdB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shivam04shrivastava:WxZ$p$KqT87K.Ss@cluster0.vxexhna.mongodb.net/student-db?retryWrites=true&w=majority');
        console.log('connected to db')
    } catch (error) {
        console.log('error in connectDB', error.message)
    }

}

module.exports = connectdB
// mongodb://localhost:27017
