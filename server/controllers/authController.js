import { Router } from "express";
import authService from "../service/authService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

// Регистрация
authController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        const token = await authService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });
        res.status(201).json({ message: 'Registration successful', token });
    } catch (err) {
        const error = getErrorMessage(err);
        res.status(400).json({ error });
    }
});

// Вход
authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        const error = getErrorMessage(err);
        res.status(400).json({ error });
    }
});

// Изход
authController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.status(200).json({ message: 'Logout successful' });
});

export default authController;


/*import { Router } from "express";
import authService from "../service/authService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', {title: 'Register Page'});
});

authController.post('/register', async(req, res) => {
    const {username, email, password, rePassword} = req.body;

    try {
        const token = await authService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');  
    } catch (err) {
        const error = getErrorMessage(err);
        res.render('auth/register', {title: 'Register Page', username, email, error});
    }
    
});

authController.get('/login', (req, res) => {
    res.render('auth/login', {title: 'Login Page'})
});

authController.post('/login', async(req, res) => {
    //get login data
    const {email, password} = req.body;
    //use auth service
    try {
        const token = await authService.login(email, password);
        //add token to cookie
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        //redirect to home? NO!!!
        res.redirect('/');
    } catch (err) {
        const error = getErrorMessage(err);
        res.render('auth/login', {title: 'Login Page', email, error});
    }
    
});

authController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

export default authController; */