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

export const mapShareViewFields = (data, key) => {
  let res = []
  switch (key) {
    case 'eduInfo':
      res = data.map(e => ({title: `${e?.degree} ${e.field_of_study}`, subtitle:  `${e?.institution_name} | ${e?.institution_country}`, id: e.id     }))
      break;
    case 'empInfo':
      res = data.map(e => ({title: `${e?.job_title}`, subtitle:  `${e?.employer} | ${e?.start_date} - ${e?.end_date}`, id: e.id      }))
      break;
    case 'reInfo':
      res = data.map(e => ({title: `${e?.mortgage_details} `, subtitle:  `${e?.property_address} | ${e?.state}`, id: e.id     }))
      break;
    case 'resInfo':
      res = data.map(e => ({title: `${e?.last_address}`, subtitle:  `${e?.state} | ${e?.city}`, id: e.id     }))
      break;
    case 'assets':
      res = data.map(e => ({title: `${e?.asset_type}`, subtitle:  `${e?.currency} ${e.value} | ${e?.location}`, id: e.id     }))
      break;
    case 'bank_details':
      res = data.map(e => ({title: `${e?.name} - ${e?.account_number}`, subtitle:  `Bank Name: ${e?.bank_name} | Address: ${e.address}  ${e?.state}`, id: e.financial_information_id     }))
      break;
    case 'insurances':
      res = data.map(e => ({title: `${e?.insurance_type}`, subtitle:  `${e?.provider_name} | ${e?.policy_number}`, id: e.id     }))
      break;
    case 'investments':
      res = data.map(e => ({title: `${e?.name}`, subtitle:  `Type: ${e?.investment_type} | Value: ${e?.value}`, id: e.id     }))
      break;
    case 'liabilities':
      res = data.map(e => ({title: `Type: ${e?.liability_type}`, subtitle:  `Amount: ${e?.amount} | Due Date: ${e?.due_date}`, id: e.id     }))
      break;
  
    default:
      break;
  }
  return res
}

export const getKeysWithTrueValues =(obj) => {
  // Use Object.entries to get key-value pairs, filter out false values, and map to get keys
  const keys = Object.entries(obj)
      .filter(([key, value]) => value !== false)
      .map(([key, value]) => key);

  return keys;
}

export const  isImage = (file) => {
  console.log(file);
  const acceptedImageTypes = ['jpeg', 'png', 'gif', 'jpg'];
  if (file) {
    const ext = file.split('.')[1];

    if (acceptedImageTypes.includes(ext)) {
      return true;
    }
  }

  return false;
}
