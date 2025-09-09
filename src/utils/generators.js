// const date1 = new Date("2025-09-08T10:00:00Z");
// const date2 = new Date("2025-09-08T12:30:00Z");

// const diffMs = date2 - date1; 
// console.log(diffMs); // 9000000 (milliseconds)


// 2025-09-08T17:34:12.456Z
const getIsoTimestamp = () => {
  return new Date().toISOString();
}  

module.exports = { getIsoTimestamp };
