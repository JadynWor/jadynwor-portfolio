import { redirect } from "@remix-run/node";

// Old page, folded into the home page.
export const loader = () => redirect("/", 301);
