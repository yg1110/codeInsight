const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
const member = arr.map((item, index) => {
    const [age, name] = item.split(" ");
    return {
        index: index,
        age: +age,
        name: name
    }
});
const sortedMember = member.sort((a, b) => {
    if(a.age > b.age) return 1;
    else if(a.age < b.age) return -1;
    else {
        if(a.index > b.index) return 1;
        else if(a.index < b.index) return -1;
        else return 0;
    }
});
sortedMember.forEach(member => {
    console.log(`${member.age} ${member.name}`);
});