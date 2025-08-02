const mobile = {
    brand : "samsung",
    color : "Red",
    price : 290000,
    camera : '14 mp',
    isNew : true,
}
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys ){
    console.log(key, ':', mobile[key])
}