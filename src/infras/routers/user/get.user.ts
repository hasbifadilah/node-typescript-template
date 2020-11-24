import express from 'express';
import UserFinderAction from '../../../core/actions/user/UserFinderAction';
import UserRepository from '../../repositories/user/UserRepository';

const router = express.Router();

export const getUserById = router.get('/', async (req, res, next) => {
  try {
    const repo = new UserRepository();
    const userFinder = new UserFinderAction(repo);

    const user = await userFinder.getById(1);

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

export const getUserList = router.get('/', (req, res, next) => {
  try {
    res.status(200).send({});
  } catch (error) {
    next(error);
  }
});
