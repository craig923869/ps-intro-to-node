function myFunc(arg, arg2) {
    console.log(arg + ' - ' + arg2);
  //console.log(`arg was => ${arg}`);
}

setTimeout(myFunc, 1500, 'funky', 'chicken');