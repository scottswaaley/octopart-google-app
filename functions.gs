/**
 * Setup Octopart user to be used when uploading BOM
 * @param {string} email refers to your email address. When you've entered it, the result will read: "Octopart Add-In is ready".
 * @returns {string}
 * @customfunction
 */
function OCTOPART_SET_USER(email) {
  return "Octopart Add-In is ready";
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @returns {string}
 * @customfunction
 */
function OCTOPART_DETAIL_URL(mpn_or_sku, manuf) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  return part.getOctopartUrl();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @returns {string}
 * @customfunction
 */
function OCTOPART_DATASHEET_URL(mpn_or_sku, manuf) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf, ["include[]=datasheets"]);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  return part.getDatasheetUrl(0);
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {number}
 * @customfunction
 */

function OCTOPART_AVERAGE_PRICE(mpn_or_sku, manuf, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  return part.getAveragePrice(qty, currency);
}


/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {number}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_PRICE(mpn_or_sku, manuf, distributor, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor, qty, currency);
  return offer.getPrice(qty, currency);
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {number}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_STOCK(mpn_or_sku, manuf, distributor, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor, qty, currency);
  return offer.getInStockQuantity();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @returns {string}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_URL(mpn_or_sku, manuf, distributor) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor);
  return offer.getSellerUrl();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {number}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_MOQ(mpn_or_sku, manuf, distributor, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor, qty, currency);
  return offer.getMoq();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {string}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_PACKAGING(mpn_or_sku, manuf, distributor, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor, qty, currency);
  return offer.getPackaging();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {string}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_LEAD_TIME(mpn_or_sku, manuf, distributor, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor, qty, currency);
  return offer.getFactoryLeadTime();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @param {number} qty searches for a particular quantity (default: 1)
 * @param {string} currency searches for a particular currency (default: USD)
 * @returns {number}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_ORDER_MUTIPLE(mpn_or_sku, manuf, distributor, qty, currency) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor, qty, currency);
  return offer.getOrderMultiple();
}

/**
 * @param {string} mpn_or_sku is the search term. Search for components by manufacturer and/or part number. Part number terms may contain wildcards (“*”) but must also contain at least three non-wildcard characters.
 * @param {string} manuf limits the search result to the specified manufacturer, if desired (default: no limitation)
 * @param {string} distributor specifies the distributor to search for (default: pick the lowest price)
 * @returns {number}
 * @customfunction
 */
function OCTOPART_DISTRIBUTOR_SKU(mpn_or_sku, manuf, distributor) {
  var octopart = new Octopart();
  var matches = octopart.match(mpn_or_sku, manuf);
  var result = matches.getResult(0);
  var part = result.getPart(0);
  var offer = part.getOffer(distributor);
  return offer.getSku();
}

/**
 * This function simply returns the current version of the Add-In.
 *
 * @returns {string}
 * @customfunction
 */
function OCTOPART_GET_INFO() {
  return "Octopart Google App - 0.1";
}

/**
 * This function is a placeholder for future configurable options.
 *
 * @returns {boolean}
 * @customfunction
 */
function OCTOPART_SET_OPTIONS() {
  return false;
}
