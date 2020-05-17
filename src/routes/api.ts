import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    message: 'Api homepage.💕',
  });
});

router.post('/', (req, res) => {
  const {
    body: { name },
  } = req;
  res.json({
    name: name || 'nothing',
  });
});

export default router;
