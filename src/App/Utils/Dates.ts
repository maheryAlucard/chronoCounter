export function formatDate(date: Date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  // const year = d.getFullYear();
  const min = d.getMinutes();
  const hour = d.getHours();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [day, month].join('-') + ` (${hour}:${min})`;
}
