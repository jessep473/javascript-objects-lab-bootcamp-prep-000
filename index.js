var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

recipie = {eggs: 2 };

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')