// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/click.ts";
import * as $$$$$$$$$1 from "./actions/pageview.ts";
import * as $$$1 from "./loaders/autocomplete.ts";
import * as $$$2 from "./loaders/banners.ts";
import * as $$$0 from "./loaders/PLPBanners.ts";
import * as $$$3 from "./loaders/productListingPage.ts";
import * as $$$4 from "./loaders/recommendations.ts";
import * as $$$$$$0 from "./sections/Analytics/SmarthintTracking.tsx";

const manifest = {
  "loaders": {
    "smarthint/loaders/autocomplete.ts": $$$1,
    "smarthint/loaders/banners.ts": $$$2,
    "smarthint/loaders/PLPBanners.ts": $$$0,
    "smarthint/loaders/productListingPage.ts": $$$3,
    "smarthint/loaders/recommendations.ts": $$$4,
  },
  "sections": {
    "smarthint/sections/Analytics/SmarthintTracking.tsx": $$$$$$0,
  },
  "actions": {
    "smarthint/actions/click.ts": $$$$$$$$$0,
    "smarthint/actions/pageview.ts": $$$$$$$$$1,
  },
  "name": "smarthint",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
