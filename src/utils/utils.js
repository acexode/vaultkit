export const getValueType = (value) => {
    if(value === 'null') return null
    if(value === 'undefined') return undefined
    if(value === 'true') return true
    if(value === 'false') return false
    if(value === 'NaN') return NaN
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(value) && !isNaN(parseFloat(value))) return parseFloat(value);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}