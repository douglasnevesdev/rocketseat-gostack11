import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'd88.neves@gmail.com',
    password: '123456',
    techs: ['Node.js', 'ReactJS', 'ReactNative', { title: 'Javascript', experience: 100 }],
  });
  return response.json(user);

}