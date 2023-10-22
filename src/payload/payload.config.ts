import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import { EventsCollection } from "./collections/events";
import { FeaturedMediaCollection } from "./collections/featured-media";
import { MediaCollection } from "./collections/media";

export default buildConfig({
  collections: [
    // Your collections here
    MediaCollection,
    EventsCollection,
    FeaturedMediaCollection,
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  editor: slateEditor({}),
});
