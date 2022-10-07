const database = {
  paintColor: [
    { id: 1, color: "Silver", price: 80},
    { id: 2, color: "Midnight Blue", price: 100},
    { id: 3, color: "Firebrick Red", price: 90},
    { id: 4, color: "Spring Green", price: 70}
  ],
  interior: [
    { id: 1, seatType: "Beige Fabric", price: 120},
    { id: 2, seatType: "Charcoal Fabric", price: 100},
    { id: 3, seatType: "White Leather", price: 200},
    { id: 4, seatType: "Black Leather", price: 180}
  ],
  technology: [
    { id: 1, name: "Basic Package (basic sound system)", price: 200},
    { id: 2, name: "Navigation Package (includes integrated navigation controls)", price: 250},
    { id: 3, name: "Visibility Package (includes side and rear cameras)", price: 300},
    { id: 4, name: "Ultra Package (includes navigation and visibility packages)", price: 450}
  ],
  wheels: [
    {id: 1, wheelType: "17-inch Pair Radial", price: 110},
    {id: 2, wheelType: "17-inch Pair Radial Black", price: 120},
    {id: 3, wheelType: "18-inch Pair Spoke Silver", price: 140},
    {id: 4, wheelType: "18-inch PAir Spoke Black", price: 150},
  ],
  customOrders: [
    {
      id: 1,
      colorId: 2,
      wheelId: 3,
      interiorId: 4,
      techId: 2,
      timestamp: 16143
    }
  ],
  orderBuilder: {}
}

export const getColors = () => {
  return database.paintColor.map(paint => ({...paint}))
}

export const getInteriors = () => {
  return database.interior.map(interiorObj => ({...interiorObj}));
}

export const getTechnologies = () => {
  return database.technology.map(technologyObj => ({...technologyObj}));
}

export const getWheels = () => {
  return database.wheels.map(wheel => ({...wheel}));
}

export const getOrders = () => {
  return database.customOrders.map(order => ({...order}));
}

export const setColors = (id) => {
  database.orderBuilder.colorId = id;
}

export const setInteriors = (id) => {
  database.orderBuilder.interiorId = id;
}

export const setTechnologies = (id) => {
  database.orderBuilder.techId = id;
}

export const setWheels = (id) => {
  return database.orderBuilder.wheelId = id;
}

//adding a custom order
export const addCustomOrder = () => {
  // Copy the current state of user choices
  const newOrder = {...database.orderBuilder}

  // Add a new primary key to the object
  const lastIndex = database.customOrders.length - 1
  newOrder.id = database.customOrders[lastIndex].id + 1

  // Add a timestamp to the order
  newOrder.timestamp = Date.now()

  // Add the new order object to custom orders state
  database.customOrders.push(newOrder)

  // Reset the temporary state for user choices
  database.orderBuilder = {}

  // Broadcast a notification that permanent state has changed
  document.dispatchEvent(new CustomEvent("stateChanged"))
}