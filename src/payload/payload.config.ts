import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { MediaCollection } from "./collections/media";
import { EventsCollection } from "./collections/events";

export default buildConfig({
  collections: [
    // Your collections here
    MediaCollection,
    EventsCollection,
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
