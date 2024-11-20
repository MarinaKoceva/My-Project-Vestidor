import { Router } from 'express';

const apiController = Router();

apiController.get('/data', (req, res) => {
    res.json({ message: 'Hello from server!', data: [1, 2, 3, 4, 5] });
});

export default apiController;
