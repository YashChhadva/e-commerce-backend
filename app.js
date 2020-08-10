// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser');
// const expressValidator = require('express-validator');
// var cors = require('cors');
// //routes import
// const authRoutes = require("./routes/auth.js");
// const userRoutes = require("./routes/user.js");
// const categoryRoutes = require("./routes/category.js");
// const productRoutes = require('./routes/product.js');

// const app = express();

// require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI , {
// 	useNewUrlParser : true,
// 	useCreateIndex : true,
// 	useUnifiedTopology:true
// }).then(() => console.log("database connected"));

// //middlewares
// app.use(morgan('dev'));
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(cookieParser());
// app.use(expressValidator());

// //routes middlewares
// app.use('/api' , authRoutes);
// app.use('/api' , userRoutes);
// app.use('/api' , categoryRoutes);
// app.use('/api' , productRoutes);

// const port = process.env.PORT || 8000;

// app.listen(port , ()=>{
// 	console.log(`server listening on port ${port}`);
// })//password:JPwdV22gwKgMQvjA



const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree')
// const braintreeRoutes = require('./routes/braintree');
// const orderRoutes = require('./routes/order');/

// app
const app = express();

// db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology:true
    })
    .then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
// app.use('/api', braintreeRoutes);
// app.use('/api', orderRoutes);

const port = process.env.PORT || 8000;

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('../client/ecommerce/build'));
// }

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});