import { z } from 'zod';

/* c8 ignore start */
export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export type Post = z.infer<typeof postSchema>;
export const postsSchema = z.array(postSchema);

export const storeSchema = z.object({
  count: z.number(),
  posts: postsSchema,
  error: z.string(),
  loading: z.string(),
});

export const partialStore = storeSchema.partial();

export type Store = z.infer<typeof storeSchema>;

// Until exact types are supported: https://github.com/microsoft/TypeScript/issues/12936
// We parse objects sent from the route and throw a runtime error
export const partialStoreParse = (store: z.infer<typeof partialStore>) => {
  return partialStore.parse(store);
};
/* c8 ignore stop */
