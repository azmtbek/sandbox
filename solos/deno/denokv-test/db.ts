const kv = await Deno.openKv();

export interface Link {
  s: string;
}

export async function getLink(slug: string,) {
  
  const res = await kv.get('link', slug)
  
  res.
  
}