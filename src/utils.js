/**
 * A function that transform the value in mm to the correct vector3.x value (to update the length of the model)
 * @param {*} value 
 * @returns {Number}
 */
const transformValueToScale = (value) => {
  let vector3zValue;
  if (value === 220 || value > 220 || value === null) vector3zValue = 1;
  if (value === 230) vector3zValue = 1.2;
  if (value === 240) vector3zValue = 1.4;
  if (value === 250) vector3zValue = 1.6;
  if (value === 260) vector3zValue = 1.8;

  return vector3zValue;
};

/**
 * A function that transform the value in mm to the correct millimeter value (to update the length of the model)
 * @param {*} scaleZ the scale.z value from a vector3 [x,y,z] 
 * @returns {Number}
 */
const transformScaleToValue = (scaleZ) => {
  let value;
  if(scaleZ === 1) value = 220;
  if(scaleZ === 1.2) value = 230;
  if(scaleZ === 1.4) value = 240;
  if(scaleZ === 1.6) value = 250;
  if(scaleZ === 1.8) value = 260;

  return value;
};

/**
 * A function that translate the material value to swedish
 * @param {String} material 
 * @returns {String} materialInSwedish
 */
const translateMaterialToSwedish = (material) => {
  let materialInSwedish;
  switch (material) {
    case 'stainless':
      materialInSwedish = 'Rostfri';
      break;
    case 'brass':
      materialInSwedish = 'Mässing';
      break;
    case 'black':
      materialInSwedish = 'Svart';
      break;
    default:
      materialInSwedish = 'Rostfri';
  }
  return materialInSwedish;
}

/**
 * A function that calculate a single orders total price (based on material and quantity)
 * @param {String} material 
 * @param {Number} quantity 
 * @returns {Number}
 */
const calculateSingleOrderPrice = (material, quantity) => {
  let totalPrice;  
  switch (material) {
    case 'stainless':
      totalPrice = 79.90 * quantity;
      break;
    case 'brass':
      totalPrice = 89.90 * quantity;
      break;
    case 'black':
      totalPrice = 79.90 * quantity;
      break;
    default:
     throw Error('Problem when calculating Order');
  }
  return totalPrice;
}


/**
 * A function that calculate all orders to a total price.
 * @param {Object[]} orderlist 
 * @returns {Number}
 */
const calculateTotalOrderPrice = (orderlist) => {
  const totalPrice = orderlist.map((order) => order.price).reduce((sum, num) => sum + num, 0);
  return totalPrice;
}

/**
 * A function that generates the next id based on number of orders.
 * @param {Object} order 
 * @returns {String}
 */
const generateUniqeId = (order) => {
  const nextId = order[order.length -1]?.id + 1 || 1;
  return nextId
}

module.exports = {
  transformValueToScale,
  translateMaterialToSwedish,
  calculateSingleOrderPrice,
  generateUniqeId,
  calculateTotalOrderPrice,
  transformScaleToValue,
}