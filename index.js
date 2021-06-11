function superbowlWin(arr) {
  let result = arr.find( function(record) {
     return record.result === "W" 
  })
  return !!result ? result.year : undefined
}