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