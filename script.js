// Add your scripts here
(function () {
  // your page initialization code here
  // the DOM will be available here
  /**
   * X- Hit The API and get the response
   * X- Create a main container div in HTML
   * X- search bar will always be on top, with 'show selected'
   * - Find how to insert an element into the DOM
   *  - create a function which attaches a node to the DOM based on the value
   *  - it should always be of the format <div><select></select><div class="key"></div><div class="value"></div><div class="description"></div></div>
   * - On entering search string, show only those params whose label matches the search string (or a subset of it)
   *    - create a function to handle this on enter event (better if its on keystroke, later enhancement)
   *    - find a way to remove DOM nodes
   * - On clicking the Done button, print the final payload to the console
   *  - fetching the values of 'value field' nodes which are selected, formatting and printing to console
   * 
   * - style it in the end.
   */
  let productConfig;

  async function getProductDetails() {
    let response = await fetch('https://flipkart-configuration-table.now.sh/api');
    productConfig = await response.json();
    yoyoma(productConfig);
    return productConfig;
  }

  getProductDetails();

  function yoyoma(config) {
    console.log('config', config)
  }
})();
