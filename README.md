# College Majors Library
## This is a library that allows you to find specific things about college majors, major categories, and the role gender plays within them

### Takes a desired major category as a parameter and returns a list of majors in that category.
###### category -- (String) desried major category
###### return -- (List) all majors within that major category
#### function getMajors(category) 

### Takes a major category as a parameter and returns the name of the major with the highest unemployment rate
###### category -- (String) desired major category
###### return -- (String) the name of the major with the highest umemployment rate
#### function highestUnemployment(category)

### Takes a major category as a parameter and returns the name of the most popular major in that major category
###### category -- (String) desired major category
###### return -- (String) the name of the most popular major in that category
#### function mostPopular(category)

### Takes the desired major category as a parameter and returns a list of all female dominated majors within that major category.
###### category -- (String) desired major category
###### return -- (List) Like of all the names of the female dominated majors in that library
#### function femaleDominated(category)

### Takes the name of a major as a parameter and returns whether or not the major is female or male dominated
###### majorName -- (String) the name of the desired major
###### return -- (String) whether the major is female or male dominated
#### function dominantGender(majorName)
