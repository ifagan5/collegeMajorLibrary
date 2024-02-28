var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Economics/College%20Majors%20%26%20Incomes.csv"

var majorCategories = getColumn(url, 6);
var majors = getColumn(url, 2);
var shareWomen = getColumn(url,7);
var unemploymentRates = getColumn(url, 10);
var totalStudents = getColumn(url, 3);

/*DOCUMENTATION: 
Take a desired major category as a parameter and returns a list of majors in 
that category.
category -- (String) desried major category
return - (List) all majors within that major category
*/
function getMajors(category) {
    var matches = [];
    for (var i = 0; i < majors.length; i++){
        if(majorCategories[i].toLowerCase().includes(category.toLowerCase())) {
            matches.push(majors[i]);
        }
    }
    if (matches.length == 0) {
        matches.push("That major category does not exist!")
      }
return matches;
}


/*DOCUMENTATION:
Takes a major category as a parameter and returns the name of the
major with the highest unemployment rate
category -- (String) desired major category
return -- (String) the name of the major with the highest umemployment rate
*/
function highestUnemployment(category) {
    var highest = 0.000;
    var highestIndex = -1;
    for (var i = 0; i < majorCategories.length; i++) {
        if (majorCategories[i].toLowerCase().includes(category.toLowerCase())) {
            if (unemploymentRates[i] > highest) {
                highest = unemploymentRates[i];
                highestIndex = i;
            }
        }
    }
    if (highestIndex == -1) {
        return "That major category doesn't exist!"
    }
    return majors[highestIndex]; 
}


/*DOCUMENTATION:
Takes a major category as a parameter and returns the name of the most
popular major in that major category
category -- (String) desired major category
return -- (String) the name of the most popular major in that
category
*/
function mostPopular(category) {
    var students = 0;
    var popularIndex = -1;
    for (var i = 0; i < majors.length; i++){
        if(majorCategories[i].toLowerCase().includes(category.toLowerCase())) {
            if (totalStudents[i] > students) {
                students = totalStudents[i];
                popularIndex = i;
            }
        }

}
if (popularIndex == -1) {
    return "That major category doesn't exist!"
}
return majors[popularIndex]
}


/*DOCUMENTATION:
Takes the desired major category as a parameter and returns a list of all
female dominated majors within that major category.
category -- (String) desired major category
return -- (List) Like of all the names of the female dominated majors 
in that library
*/
function femaleDominated(category) {
    var matches = [];
    for (var i = 0; i < majorCategories.length; i++){
        if (majorCategories[i].toLowerCase().includes(category.toLowerCase())) {
            if (shareWomen[i] > 0.5){
                matches.push(majors[i])
            }
        }
    }
    if (matches.length == 0) {
        matches.push("That major category does not exist!")
      }
return matches;
}



/*DOCUMENTATION:
Takes the name of a major as a parameter and returns whether or not
the major is female or male dominated
majorName -- (String) the name of the desired major
return -- (String) whether the major is female or male dominated
*/
function dominantGender(majorName) {
    var maleOrFemale = "";
    for (var i = 0; i < majorCategories.length; i++){
        if (majors[i].toLowerCase().includes(majorName.toLowerCase())) {
            if (shareWomen[i] > 0.5) {
                maleOrFemale = "This major is female dominated!"
                return maleOrFemale
            }
            if (shareWomen[i] < 0.5) {
                maleOrFemale = "This major is male dominated!"
                return maleOrFemale
            }
        }
    }
if (maleOrFemale = "") {
    return "That Major doesn't"
}
}
console.log(dominantGender("Aerospace"));   