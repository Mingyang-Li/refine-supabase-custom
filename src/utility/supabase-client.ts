import { createClient } from "@pankod/refine-supabase";
import { config } from "services/config.service";

export const supabaseClient = createClient(
  config.REACT_APP_SUPABASE_URL,
  config.REACT_APP_SUPABASE_KEY,
  {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: true,
    },
  }
);
