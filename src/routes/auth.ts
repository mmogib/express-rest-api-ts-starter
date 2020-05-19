import { Router, Request } from 'express';
import { OpenidRequest } from 'express-openid-connect';
const router = Router();

router.get('/', (req, res) => {
  const openreq = <OpenidRequest>req;
  //console.log('get callback..', openreq.openid);
  const openid = <OpenId>openreq.openid;
  //console.log('get callback..', openid);
  console.log('here');
  res.json({
    message: 'received...',
  });
});

interface OpenId {
  user?: object;
}
router.post('/callback', (req, res) => {
  const openreq = <OpenidRequest>req;
  const { user } = <OpenId>openreq.openid;
  console.log('post callback..', openreq.openid);
  res.json({
    message: 'received...',
  });
});

export default router;
