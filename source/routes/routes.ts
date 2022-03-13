import controller from '../controllers/emailController';
import express from 'express';
const router = express.Router();

router.post('/sendemail', controller.sendEmail);

export = router;