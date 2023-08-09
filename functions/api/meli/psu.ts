import { roundSignificant } from '../../rules/rounding';
import { currencyFormat } from '../../formatters/currencyFormat';

export type JSONType = {
  site_id: string;
  country_default_time_zone: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    variation_id?: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price?: null | number;
    sale_price?: null | number;
    sold_quantity: number;
    available_quantity: number;
    official_store_id?: null | number;
    use_thumbnail_id?: boolean;
    accepts_mercadopago?: boolean;
    tags?: string[];
    variation_filters?: string[];
    shipping?: {
      store_pick_up?: boolean;
      free_shipping?: boolean;
      logistic_type?: string;
      mode?: string;
      tags?: string[];
    };
    stop_time?: string | Date;
  }[];
};


export async function onRequestGet() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?shipping_cost=free&category=MLA430916&power_seller=yes&sort=price_asc&limit=1&POWER_OUTPUT=(*-600W)'),
    data: JSONType = await response.json(),
    item = {
      descripcion: data.results[0].title,
      precio: currencyFormat.format(roundSignificant(data.results[0].price * 1.1)),
      link: data.results[0].permalink,
      foto: data.results[0].thumbnail,
    };
  return new Response(JSON.stringify(item), { status: response.status, statusText: response.statusText });

}
