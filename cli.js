#!/usr/bin/env node

import minimist from "minimist";
import pkg from "./index.js";

const options = { alias: { json: "j" } };
const argv = minimist(process.argv.slice(2), options);

pkg(argv);
