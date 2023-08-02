
import { handle } from 'hono/cloudflare-pages';
import { Hono } from 'hono';

const app = new Hono().basePath('/api');
const route = app.get(
  '/hello', (c) => {
    const { name } = c.req.valid('query');
    return c.jsonT({
      message: `Hello ${name}!`,
    });
  }
);

export type AppType = typeof route;

export const onRequest = handle(app)

