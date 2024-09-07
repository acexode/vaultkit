export const resourceMap = (values, typeMapping) => {
    const result = Object.keys(values).reduce((acc, key) => {
        const mappedType = typeMapping[key];
        const formikValue = values[key];
        if (mappedType) {
          if (['basic_info', 'contact', 'financial'].includes(mappedType)) {
            const sharedData = Object.keys(formikValue).filter((subKey) => formikValue[subKey] === true);
            if (sharedData.length > 0) {
              acc.push({ type: mappedType, shared_data: sharedData });
            }
          } else if (Array.isArray(formikValue) && formikValue.length > 0) {
            const parseIntVal = formikValue.map(e => parseInt(e, 10))
            acc.push({ type: mappedType, ids: parseIntVal });
          }
        }
        return acc;
      }, []);
    return result
}
