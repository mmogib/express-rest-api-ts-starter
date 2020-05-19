import { Router, Request, Response } from 'express';
import { OpenidRequest, requiresAuth } from 'express-openid-connect';
const router = Router();

router.get(
  '/profile',
  requiresAuth(),
  (req: Request, res: Response) => {
    const reqq = <OpenidRequest>req;
    console.log(reqq.openid);
    res.send('profile');
  },
);

export default router;
