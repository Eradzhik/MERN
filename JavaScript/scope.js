var beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names) {
    console.log("Inside of printNames()");
    console.log(beatles, "i'm inside the printName");

    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
        console.log(name, "name global");
    }
    actuallyPrintingNames();

}

printNames(beatles);

console.log(beatles);