
// Get visible inverters

export default (inverters, { inverterManufacturer}) => {
  return inverters.filter((inverter) => {
    const inverterManufacturerMatch = inverter.inverterManufacturer.toLowerCase().includes(inverterManufacturer.toLowerCase());
    return inverterManufacturerMatch;
  })
};
