import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

// Проверка дали .env параметрите са заредени
console.log('DB_URI:', process.env.DB_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

// Свързване с MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Прекратява, ако връзката не е успешна
    });

// Настройка на шаблоните
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('views', 'src/views');
app.set('view engine', 'hbs');

// Middleware
app.use(cors({ origin: 'http://localhost:4200', credentials: true })); // За Angular
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authMiddleware);
app.use(routes);

// Стартиране на сървъра
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
