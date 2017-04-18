(function(script, global){
  'use strict';
  console.log(`script ${script} loaded!`);

  const TAX_RATE = 0.21;
  const PHONE_PRICE = 5000;
  const ACCESSORY_PRICE = 120;
  const SPENDING_THRESHOLD_PERCENT = 0.7;

  var accountBalance;
  var ammount = 0;

  // Initialize the script
  init(script, global, process);

  /**
   * Run the purchase process
   */
  function process(e) {
    console.log(`Run ${e.target.id}process started!`);
    // purchase phones
    accountBalance = window.prompt('please, add your account balance');

    ammount = purchasePhone(accountBalance * SPENDING_THRESHOLD_PERCENT);
    // Add Taxes
    ammount = addTaxes(ammount, TAX_RATE);
    // Format ammount
    printAmmount(ammount);

    if (ammount > accountBalance) {
      console.log(`you can't afford your purchase. Not enough money`);
    } else {
      console.log(`You can proceed to start your purchase`);
    }
  }

  /**
   * purchase phones
   * @param {number} threshold limit of money to spend
   * @return {number} total purchase ammount
   */
  function purchasePhone(threshold) {
    var amt = 0;
    while (threshold >= amt) {
      amt += PHONE_PRICE + ACCESSORY_PRICE;
    }

    return amt;
  }

  /**
   * Add taxes to purchase ammount
   * @param {number} amt purchase ammount
   * @param {number} tax tax to be applied to purchase ammount
   * @return {number} purchase ammount with taxes
   */
  function addTaxes(amt, tax) {
    return amt += amt*tax;
  }

  /**
   * Print total purchase ammount in dollar format
   * @param  {number} amt purchase ammount, tax included
   */
  function printAmmount(amt) {
    console.log(`$${amt.toFixed(2)}`);
  }

  /***********************************************************
   * This are private methods                                *
   * There are intended for bind controls to run this script *
   ***********************************************************/
  // Add run li item
  function addRunItem(id, func) {
    let parent = document.querySelector('#run ul');
    let child = document.createElement('li');
    child.id = id;
    child.innerHTML = `Run ${script}`;
    child.addEventListener('click', func);
    parent.appendChild(child);
  }

  /**
   * [init description]
   * @param  {string} id    id to identify the run element
   * @param  {object} obj   global object to store a reference to 'run' method
   * @param  {function} mainF function to bind to run method
   * @return {undefined}       no specific return
   */
  function init(id, obj, mainF) {
    obj[id] = {
      run: mainF
    };
    addRunItem(id, obj[id].run);
  }

})('ch1', window.chapterScript);
