import { Router } from "express";
import authService from "../services/authService.js";
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
        res.redirect('/');  //ne vrashta na home!!!!!!
    } catch (err) {
        const error = getErrorMessage(err);
        res.render('auth/register', {title: 'Register Page', username, email, error});
    }
    
});

authController.get('/login', (req, res) => {
    res.render('auth/login', {title: 'Login Page'})
});

authController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        // Извикване на authService
        const token = await authService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        const error = getErrorMessage(err);
        res.status(400).json({ error });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

export default authController; 