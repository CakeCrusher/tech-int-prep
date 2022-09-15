
var test = function() {
  // round down nums.length/2
  let spot = Math.floor(nums.length/2)
  let history = []
  while (true) {
    console.log(spot, history)
    if (spot in history) {
      break
    }
    history.push(spot)
    if (nums[spot] == target)
      return spot
    else if (nums[spot] > target) {
      spot = Math.floor(spot/2)
    }
    else if (nums[spot] < target) {
      if (spot ==  nums.length - 1) break
      spot = spot + Math.floor((nums.length - spot)/2)
    }
    
  }
  return -1
};

var test = function() {
  let bounds = [0,nums.length]
  let idx = null
  while (idx == null) {
    if (!nums.length) {
      idx = -1
    }
    if ((bounds[1] - bounds[0]) == 1) {
      if (nums[bounds[0]] == target) {
        idx = bounds[0]
      }
      if (nums[bounds[1]] == target) {
        idx = bounds[1]
      }
    }
    let mid = Math.ceil((bounds[1] - bounds[0])/2)
    console.log(mid, bounds)
    if (nums[bounds[0] + mid] == target) {
      idx = bounds[0] + mid
      break
    }
    if (bounds[0] == bounds[1]) {
      idx = -1
    }
    if (nums[bounds[0] + mid] > target)
      bounds[1] -= mid
    else
      bounds[0] += mid

  }
    
  return idx
};

var test = function() {
  let bounds = [0,nums.length]
  let idx = null
  while (idx == null) {
    if (!nums.length) {
      idx = -1
    }
    if ((bounds[1] - bounds[0]) == 1) {
      if (nums[bounds[0]] == target) {
        idx = bounds[0]
      }
      if (nums[bounds[1]] == target) {
        idx = bounds[1]
      }
    }
    let mid = Math.ceil((bounds[1] - bounds[0])/2)
    console.log(mid, bounds)
    if (nums[bounds[0] + mid] == target) {
      idx = bounds[0] + mid
      break
    }
    if (bounds[0] == bounds[1]) {
      idx = -1
    }
    if (nums[bounds[0] + mid] > target)
      bounds[1] -= mid
    else
      bounds[0] += mid

  }
    
  return idx
};

var test = function() {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    console.log(l, r)
    let mid = l + Math.floor((r-l)/2)
    if (nums[mid] == target) {
      return mid
    }
    if (nums[mid] > target) {
      r = mid - 1
    }
    if (nums[mid] < target) {
      l = mid + 1
    }
  }
    
  return -1
};

nums = [2]
target = 2

console.log(test())