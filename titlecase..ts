function titleCase(str: string){
    const Capitalize = str.split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1))
    
    return console.log(Capitalize.join(" "))
}


titleCase("gosto de chocolate")