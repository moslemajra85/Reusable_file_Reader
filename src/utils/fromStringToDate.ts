/**
 * @desc - convert string having the form day/month/year to Date
 * @param {string}  dateString string parameter 
 * @returns {Date}
 */
export function fromStringToDate(dateString: string): Date {
  // dateString: has the form day/month/year
  const parts = dateString.split('/').map((part) => parseInt(part));
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
