import { Hono } from 'hono';

export const mockFetch = (app: Hono) =>
  vi.spyOn(global, 'fetch').mockImplementation(path => app.request(`http://localhost${path}`));

export const mockFetchOnce = (app: Hono) =>
  vi.spyOn(global, 'fetch').mockImplementationOnce(path => app.request(`http://localhost${path}`));

export const mockRequest = (path: string, payload: unknown) => {
  const app = new Hono();
  app.get(path, c => c.json(payload));
  return vi
    .spyOn(global, 'fetch')
    .mockImplementationOnce(path => app.request(`http://localhost${path}`));
};

export const mockRequestOnce = (path: string, payload: unknown) => {
  const app = new Hono();
  app.get(path, c => c.json(payload));
  vi.spyOn(global, 'fetch').mockImplementationOnce(p => app.request(`http://localhost${p}`));
};