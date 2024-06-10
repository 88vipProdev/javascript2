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
});
console.log(filterCourses)