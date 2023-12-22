/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let values={};
  for (let i = 0; i < transactions.length; i++) {
    let element = transactions[i];
    if(values[element.category]){
      values[element.category]+=element.price;
    }
    else{
      values[element.category]=0;
      values[element.category]+=element.price;
    }

    
  }
  let keys=Object.keys(values);
  let ans=[];
  for (let i = 0; i < keys.length; i++) {
    const category=keys[i];
    let obj={
      category:category,
      totalSpent:values[category],
    }
    ans.push(obj);
    
  }
  

  return ans;
}

module.exports = calculateTotalSpentByCategory;




