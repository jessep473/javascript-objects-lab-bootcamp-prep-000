var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

const recipies = {eggs: 2 };

updateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
 
destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '3 cups')


delete recipes.chocolate;