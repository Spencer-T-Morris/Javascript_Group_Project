class Book {

    constructor(title, author, category, ISBN, format, price) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.isbn = ISBN;
        this.format = format;
        this.price = price;
    }
}
//1
let headStart = new Book ("HeadStart", "unkAuthor1 ", "beginner", "ISBN1 ", "format1", 100);
//2
let coding4Dummies = new Book ("Coding For Dummies", "unkAuthor2 ", "beginner", "ISBN2 ", "format2", 100);
//3
let headFirst = new Book ("Head First Design Patterns: A Brain-Friendly Guide", "Robert C. Martin", "beginner", 
                            "978059600712", "format3", 100);
//4
let uDKJS = new Book ("You Don't Know JS", "unkAuthor4", "intermediate", "ISBN4", "format4", 100);
//5
let goodParts = new Book ("JavaScript the Good Parts", "unkAuthor5", "intermediate", "ISBN5", "format5", 100);
//6
let eloquent = new Book ("Eloquent JavaScript", "Marijn Haverbeke", "advanced", "9781492071198", "format6", 100);
//7
let proGit = new Book ("ProGit", "unkAuthor5", "advanced", "ISBN7", "format7", 100);
//8
let complete = new Book ("The Complete Software Developer's Career Guide: How to Learn Programming Languages Quickly," + 
                            " Ace Your Programming Interview, and Land Your Software Developer Dream Job", 
                            "John Sonmez", "career", "0999081411", "format8", 100);
//9
let testDriven = new Book ("Test Driven Development: By Example", "Kent Beck", "professional development", 
                            "format9", "0321146530", 100);
//10
let pProg = new Book ("The Pragmatic Programmer", "Andrew Hunt, David Thomas", "professional development", 
                        "9780135956977", "format10", 100);
//11
let busValDev = new Book ("The Business Value of Developer Relations", "Mary Thengvall", "professional development", 
                            "9781484237489", "format11", 100);
//12
let cleanCoder = new Book ("The Clean Coder", "Robert C. Martin", "professional development", "ISBN12", 
                            "format12", 100);
//13
let agileCode = new Book ("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", 
                            "professional development", "9780132542913", "format13", 100);
//14
let peopleWare = new Book ("Peopleware: Productive Projects and Teams", "unkAuthor14","professional development", 
                            "ISBN14", "format14", 100);
//15
let workEff = new Book ("Working Effectively with Legacy Code", "Michael C. Feathers", "professional development", 
                            "0131177052", "format15", 100);
//16
let coopGame = new Book ("Agile Software Development: The Cooperative Game, Second Edition", "unkAuthor16", 
                        "professional development", "ISBN16", "format16", 100);
//17
let unitTest = new Book ("Starting to Unit Test", "Erik Dietrich ", "professional development", "0321482751", 
                        "format17", 100);
//18
let phoenix = new Book ("The Phoenix Project", "Gene Kim", "fiction", "0988262592", "format18", 100);
//19
let unicorn = new Book ("The Unicorn Project", "Gene Kim", "fiction", "1942788762", "format19", 100);
//20
let onceUpon = new Book ("Once Upon an Algorithm: How Stories Explain Computing", "unkAuthor20", "fiction", 
                        "ISBN20", "format20", 100);
//21
let coders = new Book ("Coders", "Clive Thompson", "fiction", "9780735220560", "format21", 100);




let allBooks = [headStart, coding4Dummies, uDKJS, eloquent, proGit, pProg, busValDev];



let search = prompt("");

if (search == "beginner") {
    let arrayB = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "beginner") {
            arrayB == arrayB.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayB.length != 0) {
    console.log(`The books that meet your seach criteria of ${search.toUpperCase()} are: \n\n ${arrayB}`);
    } else {
    console.log (`\n no results meet search criteria.`);
    }
}

if (search == "intermediate") {
    let arrayI = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "intermediate") {
            arrayI == arrayI.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayI.length != 0) {
        console.log(`The books that meet your seach criteria of ${search.toUpperCase()} are: \n\n ${arrayI}`);
        } else {
        console.log (`\n no results meet search criteria.`);
        }
}

if (search == "advanced") {
    let arrayA = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "advanced") {
            arrayA == arrayA.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayA.length != 0) {
        console.log(`The books that meet your seach criteria of ${search.toUpperCase()} are: \n\n ${arrayA}`);
        } else {
        console.log (`\n no results meet search criteria.`);
        }
}

if (search == "professional development") {
    let arrayP = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "professional development") {
            arrayP == arrayP.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayP.length != 0) {
        console.log(`The books that meet your seach criteria of ${search.toUpperCase()} are: \n\n ${arrayp}`);
        } else {
        console.log (`\n no results meet search criteria.`);
        }
}
if (search == "career") {
    let arrayC = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "Career") {
            arrayC == arrayC.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayC.length != 0) {
        console.log(`The books that meet your seach criteria of ${search.toUpperCase()} are: \n\n ${arrayC}`);
        } else {
        console.log (`\n no results meet search criteria.`);
        }
}if (search == "Fiction") {
    let arrayF = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "Fiction") {
            arrayF == arrayF.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayF.length != 0) {
        console.log(`The books that meet your seach criteria of ${search.toUpperCase()} are: \n\n ${arrayF}`);
        } else {
        console.log (`\n no results meet search criteria.`);
        }
}
