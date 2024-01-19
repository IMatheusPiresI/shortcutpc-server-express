import express from 'express';

const router = express.Router();

router.get("/verify-connection-server", (_, res) => {
    res.json({ connection: true })
  })

export default router;