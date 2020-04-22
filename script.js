// Add your scripts here
window.onload = function () {
  // your page initialization code here
  // the DOM will be available here
  /**
   * X- Hit The API and get the response
   * X- Create a main container div in HTML
   * X- search bar will always be on top, with 'show selected'
   * - Find how to insert an element into the DOM
   *  X- create a function which attaches a node to the DOM based on the value
   *  X- it should always be of the format <div><select></select><div class="key"></div><div class="value"></div><div class="description"></div></div>
   * - On entering search string, show only those params whose label matches the search string (or a subset of it)
   *    - create a function to handle this on enter event (better if its on keystroke, later enhancement)
   *    - find a way to remove DOM nodes
   * - On clicking the Done button, print the final payload to the console
   *  - fetching the values of 'value field' nodes which are selected, formatting and printing to console
   * 
   * - style it in the end.
   */
  function createTableContent(productConfig) {

    for (let i = 0; i < productConfig.config.length; i++) {

      let configRowBeginHTML = `<div class=\"config-table-row\" data-config="${productConfig.config[i].key}" >`;
      let checkboxHTML = "<input type=\"checkbox\" name=\"selected\">";
      let keyHTML = `<div class="key">${productConfig.config[i].label}</div>`;
      let valueHTML = `<div class="value">${productConfig.config[i].field.defaultValue}</div>`;
      let descriptionHTML = `<div class="description">${productConfig.config[i].description}</div>`;
      let configRowEnd = `</div>`;

      let configTableHeader;
      if (i === 0) {
        configTableHeader = document.querySelector('[data-config="config-table"]');
      } else {
        configTableHeader = document.querySelector(`[data-config="${productConfig.config[i - 1].key}"]`);
      }

      let configTableRowString = configRowBeginHTML + checkboxHTML + keyHTML + valueHTML + descriptionHTML + configRowEnd;
      configTableHeader.insertAdjacentHTML("afterend", configTableRowString);
    }
  }

  function createConfigTable(config) {
    createTableContent(config)
    // it should always be of the format <div><select></select><div class="key"></div><div class="value"></div><div class="description"></div></div>
  }

  async function getProductDetails() {
    let response = await fetch('https://flipkart-configuration-table.now.sh/api');
    let productConfig = await response.json();

    return productConfig;
  }

  getProductDetails().then((productConfig) => {
    createConfigTable(productConfig);
  });
};
