//In a small town the population is p0 = 1000 at the beginning of a year. 
//The population regularly increases by 2 percent per year and 
//moreover 50 new inhabitants per year come to live in the town. 
//How many years does the town need to see its population greater
// or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let newPopulation = p0
    let index = 0
    
    while(newPopulation < p){ //use a while loop because we are trying to make a condition true
      newPopulation += newPopulation * (percent/100) + aug 
      index++
    }
    return index
}

//p0 is the starting population
//percent is the percentage of growth within the town
//aug is the amount of people moving in
//p is the population limit that we are trying to reach
