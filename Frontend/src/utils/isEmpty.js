export const  isEmpty = value => {
     if(value === undefined || value === null) return true;

     if(typeof value === 'object') {
         if(Array.isArray(value)) return value.length === 0;
         return Object.keys(value).length === 0
     }
     if(typeof value === 'string' && value.trim().length === 0) return true;
     return false;
}