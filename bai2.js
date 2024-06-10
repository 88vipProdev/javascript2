  Array.prototype.some2= function (callback){
    for (var index in this ){
        if(this.hasOwnProperty(index))
            {
                if(callback(this[index], index , this )){
                    return true;
                }
            }
    }
    return false
  }
var courses = [
    {
        name: 'javascript',
        coin:680,
        isFinish :true
    },
    {
        name: 'java+',
        coin:980,
        isFinish :false
    },
    {
        name: 'ruby',
        coin:860,
        isFinish :false
    },
];
var result = courses.some(function (courses,index,array){
    return courses.isFinish
});
console.log(result)