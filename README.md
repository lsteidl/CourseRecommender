# CourseRecommender

Recommender
Problem 1 (1 Point)

For this problem, you will be creating a cart that users can add courses to and remove courses from.

You will likely need to create new React Component(s) to complete this problem.
Add to cart

The user should be able to add 3 slight variations of course information into the cart:

    A course with all sections and subsections
    A course with one specific section of a course with all subsections
    A course with one specific section that contains one sepcifc subsection.

For example, if course CS 639 has section Section 1 with subsections Subsection 1 and Subsection 2, the user should be able to add the either of the following with the format of: course -> sections -> subsections with one action (such as a button click)

    CS 639 -> All -> All
    CS 639 -> Section 1 -> All
    CS 639 -> Section 1 -> Subsection 1

 (Links to an external site.)Remove from cart

The user should be able to remove 3 slight variations of course information from the cart:

    A course with all sections and subsections
    A course with one specific section of a course with all subsections
    A course with one specific section that contains one sepcifc subsection.

For example, if course CS 639 has section Section 1 with subsections Subsection 1 and Subsection 2, the user should be able to remove the either of the following with the format of: course -> sections -> subsections with one action (such as a button click)

    CS 639 -> All -> All
    CS 639 -> Section 1 -> All
    CS 639 -> Section 1 -> Subsection 1

 (Links to an external site.)View courses in cart

The user should be able to view which courses are in the cart. From the cart, users should be able to remove courses as described above. For a course that only has some sections and/or subsections added to the cart, you can choose to display only these sections/subsections, or the data for the entire course while making it clear which sections/subsections the user has and has not added to the cart.
Problem 2 (1 Point)

For this problem, you will be creating a system for users to add and remove tags(corresponding to keywords in the given json data) and search by these tags.

For this problem, you should start by removing the current functionality of the search bar, as it will be replaced with the new functionality described below.
 (Links to an external site.)Add tags

The user should be able to type in an input box(e.g. Search box) and hit 'Enter' to add a tag, upon which the tag will be added to a list of tags displayed to the user, and the search bar will be cleared. These tags should be displayed to the user in a collective fashion. For example, you can type in computer and sciences in your search box, each time you click enter, you add a tag with the same name into a box as your tag list.
 (Links to an external site.)Remove tags

The user should be able to remove tags from the tag list.
 (Links to an external site.)Search by tags

The application should search and filter courses by these tags. There are two differnt search by tags methods that we want to include:

    We want to allow the user to filter results that fit all the tags (intersection of tags/and logic between tags). For example, if we have a course that only has science tag, but in our current tag list we have computer and sciencetags, we will filter out this course because it does not contain all the tags in our tag list.
    We want to allow the user to filter results that fit at least one of the tags in the tag list (union of tags/or logic between tags). For example, if we have a course that only contains tag science and a course that only contains tag computer, and in our tag list we have both computer and science, neither of the courses will be filtered out because each of them have at least one tag that fits a tag in the tag lists.

For the entire search and filter process, the intersection between the result of the tag filtering and all of the other filters should be displayed.
 (Links to an external site.)Switch tag logic

The user should be able to switch the tag logic between the two methods described above, and the current logic should be displayed to the user.

Problem 1 (1.25 points)

    Fetch data from server: https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completedLinks to an external site.
    Create a new component to represent previously taken courses. This component will look somewhat like the Course component, but it will be simpler and won’t have options to add the course to the cart.
    Create a new component to hold the previously taken courses. Make this component accessible from the app. 

 

Problem 2 (1.25 points)

    Create a component for rating a specific course.
    Allow the user to rate courses they have already taken.

 

Problem 3 (1.25 points)

    Generate a list of interest areas based on the course data (maybe look at subjects and keywords?)
    Create a component for the user to select interest areas as defined in step 1.
    Make this component available to the user.

 

Problem 4 (1.25 points)

    Create the recommender algorithm that takes in the rated courses and interest areas. Search through subjects and keywords to find the courses most similar to the highly rated courses and the courses that match the most interest areas
    Display the recommended courses to the user. (Maybe click a button in search to pop up a modal with a few recommended courses or sort all courses by their recommendation score)

 

General (1 point)

Projects will be graded on the general usability and design of the system. You should consider the way the users navigate around the application, and other concepts covered in design lecture.
