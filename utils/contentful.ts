import { createClient } from "contentful";

export const client = createClient({
    space: process.env.NEXT_PUBLIC_CF_SPACE !,
    accessToken: process.env.NEXT_PUBLIC_CF_ACCESSTOKEN !,
  })