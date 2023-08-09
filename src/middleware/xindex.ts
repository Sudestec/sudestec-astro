import { defineMiddleware } from 'astro/middleware';
import { getUser } from 'src/auth';
// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  console.log('index2');
  const modified = await next();
  locals.auth = await getUser(request);
  console.log(locals.auth);
  if (locals.auth)
    modified.headers.has('Authorization')
      ? modified.headers.set('Authorization', `Bearer ${locals.auth.token}`)
      : modified.headers.append('Authorization', `Bearer ${locals.auth.token}`);
  modified.headers.forEach(e => console.log('middleware', e));

  return modified;
});
