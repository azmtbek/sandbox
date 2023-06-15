import { Handlers } from "$fresh/server.ts";
import * as base58 from "$std/encoding/base58.ts";
import { Head } from "$fresh/runtime.ts";
import { loadAll } from "../services/database.ts";

export const handler: Handlers = {
  GET: async (req, ctx) => {
    const listId = base58.encode(crypto.getRandomValues(new Uint8Array(8)));
    const url = new URL(req.url);
    // return Response.redirect(`${url.origin}/${listId}`, 302);
    const list = await loadAll();
    const res = await ctx.render({ data: list });
    // res.headers.set("x-list-load-time", "" + (endTime - startTime));
    return res;
  },
};

export default function Home(
  { data }: { data: any },
) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md bg-blue-900 flex flex-col">
        {data.data.map((e, i) => (
          <a
            key={i}
            href={`/${e.key[1]}`}
            class="p-2 border rounded-full border-blue-400 my-2 text-blue-200"
          >
            {e.key[1]}
          </a>
        ))}
      </div>
    </>
  );
}
