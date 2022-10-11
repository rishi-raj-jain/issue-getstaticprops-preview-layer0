import { nextRoutes } from "@layer0/next";
import { Router } from "@layer0/core/router";

nextRoutes.setEnforceTrailingSlash(true);

export default new Router()
  .noIndexPermalink()
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .use(nextRoutes);
