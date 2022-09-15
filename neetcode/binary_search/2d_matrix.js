var test = function() {
  let l = 0
  let r = matrix.length - 1

  while (l <= r) {
    let mid = l + Math.floor((r-l) / 2)
    if (matrix[mid][0] <= target && target <= matrix[mid][matrix[0].length - 1]) {
      let li = 0
      let ri = matrix[0].length - 1
      while (li <= ri) {
        let midi = li + Math.floor((ri-li) / 2)
        if (matrix[mid][midi] == target) {
          return true
        }
        if (matrix[mid][midi] < target) {
          li = midi + 1
        }
        if (matrix[mid][midi] > target) {
          ri = midi - 1
        }
      }
      return false
    }
    if (matrix[mid][0] > target) {
      r = mid - 1
    }
    if (matrix[mid][matrix[0].length - 1] < target) {
      l = mid + 1
    }
  }
  return false
};

var test = function() {
  const ROWS = matrix.length - 1
  const COLS = matrix[0].length - 1

  let row = null

  let l = 0
  let r = ROWS 
  while (l <= r) {
    let mid = l + Math.floor((r-l)/2)
    if (matrix[mid][0] > target) {
      r = mid - 1
    }
    else if (matrix[mid][COLS] < target) {
      l = mid + 1
    }
    else {
      row = mid
      break
    }
  }
  if (row == null) return false

  let li = 0
  let ri = COLS
  while (li <= ri) {
    let midi = li + Math.floor((ri-li)/2)
    if (matrix[row][midi] > target) {
      ri = midi - 1
    }
    else if (matrix[row][midi] < target) {
      li = midi + 1
    }
    else {
      return true
    }
  }
  return false
};

matrix = [[1], [3]]
target = 3


console.log(test())