import { getContacts } from "../contacts";

export async function loader() {
  var contacts = await getContacts();
  return { contacts };
}
