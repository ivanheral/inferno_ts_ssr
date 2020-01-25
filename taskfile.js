let nodemon = require("nodemon");
import bs from "taskr-build/fw/servor";
let mode = "dev";
let type = "client";
let dest = "dist";

// server side-rendering
export async function ssr(task) {
  nodemon("--watch client/ts/**/*.*");
  dest = "assets";
  type = "server";
  await task.serial(["ts"]);
  await task.watch(`${type}/ts/**/*.*`, "ts");
}

// mode production
export async function prod(task) {
  mode = "prod";
  dest = "bundle";
  await task.serial(["ts", "html"]);
}

// mode development
export async function dev(task) {
  await task.serial(["html", "ts"]);
  await task.watch("client/html/index.html", "html");
  await task.watch(`${type}/ts/**/*.*`, "ts");
  mode == "dev" &&
    bs.start({
      root: dest
    });
}

// tasks
export async function ts(task) {
  await task
    .source(`${type}/ts/main.tsx`)
    .build({
      fw: "inferno",
      env: mode
    })
    .target(dest);
}

export async function html(task) {
  await task.source("client/html/index.html").target(dest);
}
