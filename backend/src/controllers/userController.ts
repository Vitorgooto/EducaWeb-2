import { Request, Response } from 'express';
import { validateUsername, validatePassword } from '../utils/dfa';
import { findUserByUsername, createUser } from '../models/userModel';

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (validateUsername(username) && validatePassword(password)) {
    const user = await findUserByUsername(username);
    if (user && user.password === password) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } else {
    res.json({ success: false, message: 'Invalid username or password format' });
  }
};
