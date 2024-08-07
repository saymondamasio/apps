import type { Person, Suggestion } from "../../../commerce/types.ts";
import type { AppContext } from "../../mod.ts";
import { getDeviceIdFromBag } from "../../utils/deviceId.ts";
import getSource from "../../utils/source.ts";
import { toSearch } from "../../utils/transform.ts";

export interface Props {
  /**
   * @title User
   * @description Used to sync user data with linx impulse
   */
  user?: Person | null;

  /**
   * @ignore
   */
  userId?: string;
}

/**
 * @title Linx Impulse Autocomplete Popular
 * @description Product Suggestion loader
 */
const loaders = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<Suggestion | null> => {
  const { api, apiKey, origin } = ctx;
  const { user, userId: _userId } = props;
  const userId = _userId ?? user?.["@id"];

  const search = await api["GET /engage/search/v3/autocompletes/popular"]({
    apiKey,
    origin,
    deviceId: getDeviceIdFromBag(ctx),
    salesChannel: ctx.salesChannel,
    source: getSource(ctx),
    userId,
    // For some reason the API is returning onlyIds products, even when the productFormat is set to complete
    // If you are here to fix this, see the output of the API and check if the products are being returned
    productFormat: "complete",
  })
    .then((res) => res.json())
    .catch(() => null);

  if (!search) return null;

  const result = {
    searches: search.queries.map(toSearch),
    products: [],
    // products: search.products.map((product) =>
    //   toProduct(product, new URL(req.url).origin, cdn)
    // ),
  };

  return result;
};

export default loaders;
