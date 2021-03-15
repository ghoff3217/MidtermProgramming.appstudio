let bucketList = ['mountain climbing', 'skiing', 'surfing']
let question = prompt('Would you like to see your bucket list or add an item? (Enter either "add item" or "bucket list" to make selection)')
let addItem = []

if (question === 'add item') {
  while (question === 'add item') {
    addItem = prompt('Enter item here (Enter "stop" to break)')
    if (addItem === 'stop') {
      break;
    }
    bucketList.push(addItem)
    }
  } else if (question === 'bucket list') {
    console.log(bucketList)
  } else {
    alert('Enter one of indicated prompts')
    }

console.log(bucketList)