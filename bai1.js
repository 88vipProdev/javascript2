Array.prototype.filter2=function (callback){
    var output = []
    for(var index in this){
        if(this.hasOwnProperty(index))
           var result= callback(this[index],index , this)
            if(result){
                output.push(this[index])
            }
    }
}
var courses = [
    {
        name : 'javascript',
        coin : 600
    },
    {
        name: 'php',
        coin:860
    },
    {
        name: 'ruby',
        coin:980
    }
];
var filterCourses = courses.filter(function (courses,index, array){
    return courses.coin>700
    // console.log(courses,index,array)
});
console.log(filterCourses)