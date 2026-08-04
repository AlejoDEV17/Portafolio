import { DurableObject } from "cloudflare:workers";

interface Env {
  VIEW_COUNTER: DurableObjectNamespace<ViewCounter>;
}

const initialViews = 0;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

export class ViewCounter extends DurableObject<Env> {
  async fetch(request: Request): Promise<Response> {
    let count =
      (await this.ctx.storage.get<number>("portfolio-views")) ?? initialViews;

    if (request.method === "POST") {
      count += 1;
      await this.ctx.storage.put("portfolio-views", count);
    }

    return Response.json({ count }, { headers: corsHeaders });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "GET" && request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        { status: 405, headers: corsHeaders },
      );
    }

    const id = env.VIEW_COUNTER.idFromName("portfolio-global");
    return env.VIEW_COUNTER.get(id).fetch(request);
  },
} satisfies ExportedHandler<Env>;
