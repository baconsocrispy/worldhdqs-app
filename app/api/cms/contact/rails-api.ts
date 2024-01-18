// helpers
import { baseCMSUrl } from "../../api-helpers";

// POST /v1/contact#create
export const submitContactForm = async (
  data: FormData
) => {
  const contactURL = `${ baseCMSUrl() }/v1/contact`;

  const response = await fetch(contactURL, {
    method: 'POST',
    body: data
  });

  return response;
};