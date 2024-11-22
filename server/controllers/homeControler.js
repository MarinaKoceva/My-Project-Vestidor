import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1>');
});

// Test only
homeController.get('/authorized', (req, res) => {
    res.send(req.user);
});

export default homeController;


/*import { Router } from "express";

const homeController = Router();

homeController.get ('/', (req, res) => {
    res.render('home', {title: 'Home Page'});
});

//test only
homeController.get('/authorized', (req, res) => {
    res.send(req.user);
})
export default homeController;
*/