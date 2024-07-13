
export const convertToSentenceCase =(str)=> {
    str = str.replace(/_/g, ' ');
    return str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase());
}

// export const humanReadableDate = (data) => {
//     const date = new Date(date);
//     const humanReadable = 
// }


