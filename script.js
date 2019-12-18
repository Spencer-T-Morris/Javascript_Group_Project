// LISTS ALL THE BOOKS AND THEIR DESCRIPTORS
// 'RECEIPT: ' IS ONLY USED IN THE RECEIPT FUNCTION, TO ABBREVIATE THE TITLES FOR A CLEANER RECEIPT
const allBooks = [

    // 'BEGINNER' BOOKS
    
            {
                    title:      "Coding for Dummies", 
                    author:     "Nikhil Abraham", 
                    category:   "Beginner", 
                    ISBN:       "9781118951309", 
                    format:     "Kindle",
                    price:      15.47,
                    receipt:    "CODNG 4 DUMMIES"
            },
            
            {
                    title:      "Head First Design Patterns: A Brain-Friendly Guide", 
                    author:     "Eric Freeman, Bert Bates", 
                    category:   "Beginner", 
                    ISBN:       "9780596007126", 
                    format:     "Paperback",
                    price:      28.00,
                    receipt:    "HEAD1 DSGN PTRN"
            },
        
            {
                    title:      "Head First Learn to Code: A Lerner's Guide to Coding and Computational Thinking", 
                    author:     "Eric Freeman", 
                    category:   "Beginner", 
                    ISBN:       "9781491958865", // UPDATE RS
                    format:     "Paperback",
                    price:      22.00,
                    receipt:    "HEAD1 LRN2 CODE"
            },
    
            {
                    title:      "Essential TypeScript: From Beginner to Pro", 
                    author:     "Adam Freeman", 
                    category:   "Beginner", 
                    ISBN:       "9781484249796", 
                    format:     "Paperback",
                    price:      29.99,
                    receipt:    "ESNTIAL TYPSCRP"
            },
    
            {
                    title:      "Project Management: Absolute Beginner's Guide, 4th Edition", 
                    author:     "Gregory M. Horine", 
                    category:   "Beginner", 
                    ISBN:       "9780789756756", // UPDATE RS
                    format:     "Paperback",
                    price:      19.99,
                    receipt:    "PROJCT MGMT: AB"
            },
    
    // 'INTERMEDIATE' BOOKS
    
            {
                    title:      "You Don't Know JS - book 1 of 6", 
                    author:     "Kyle Simpson", 
                    category:   "Intermediate", 
                    ISBN:       "9781491924464", // book 1, UPDATE RS
                    format:     "Paperback",
                    price:      9.00,
                    receipt:    "U DON'T KNOW JS"
            },
        
            {
                    title:      "JavaScript: The Good Parts", 
                    author:     "Douglas Crockford", 
                    category:   "Intermediate", 
                    ISBN:       "9780596517748", 
                    format:     "Paperback",
                    price:      15.00,
                    receipt:    "JS:  GOOD PARTS"
            },
        
    // 'ADVANCED' BOOKS
    
            {
                    title:      "Eloquent JavaScript", 
                    author:     "Marijn Haverbeke", 
                    category:   "Advanced", 
                    ISBN:       "9781593279509", // UPDATE RS
                    format:     "Paperback",
                    price:      23.99,
                    receipt:    "ELQUNT JVASCRPT"
            },
        
            {
                    title:      "Perspectives on Predictive Coding and Other Advanced Search Methods for the Legal Practitioner", 
                    author:     "Jason R. Baron, Michael D. Berman, Ralph C. Losey", 
                    category:   "Advanced", 
                    ISBN:       "1634256573", 
                    format:     "Kindle",
                    price:      51.78,
                    receipt:    "PRSP PRDCT CDNG"
            },
    
            {
                    title:      "Regular Expressions Cookbook: Detailed Solutions in Eight Programming Languages", 
                    author:     "Steven Levithan, Jan Goyvaerts", 
                    category:   "Advanced", 
                    ISBN:       "1449319432", 
                    format:     "Paperback",
                    price:      30.99,
                    receipt:    "REG XPRES COOKB"
            },
    
            {
                    title:      "Extreme Programming Explained: Embrace Change, 2nd Edition",
                    author:     "Cynthia Andres, Kent Beck", 
                    category:   "Advanced", 
                    ISBN:       "9780321278654", // UPDATE RS
                    format:     "Paperback",
                    price:      25.99,
                    receipt:    "XTREM PROG XPLN"
            },
    
            {
                    title:      "Refactoring: Improving the Design of Existing Code",
                    author:     "Martin Fowler, Kent Beck", 
                    category:   "Advanced", 
                    ISBN:       "0134757599", 
                    format:     "Hardcover",
                    price:      31.99,
                    receipt:    "RFCTRNG: IMPROV"
            },
    
    // 'CAREER' BOOKS
    
            {
                    title:      "The Complete Software Developer's Career Guide: How to Learn Programming Languages Quickly," + 
                                    " Ace Your Programming Interview, and Land Your Software Developer Dream Job", 
                    author:     "John Sonmez", 
                    category:   "Career", 
                    ISBN:       "0999081411", 
                    format:     "Paperback",
                    price:      25.99,
                    receipt:    "SFTWR DVLP GUID"
            },
    
            {
                    title:      "Women in Tech: Take Your Career to the Next Level with Practical Advice and Inspiring Stories",
                    author:     "Tarah Wheeler", 
                    category:   "Career", 
                    ISBN:       "1632171406", 
                    format:     "Kindle",
                    price:      11.99,
                    receipt:    "WOMEN N TECH: T"
            },
    
            {
                    title:      "Cracking the Coding Interview: 150 Programming Questions and Solutions",
                    author:     "Gayle Laakmann McDowell", 
                    category:   "Career", 
                    ISBN:       "098478280X", 
                    format:     "Paperback",
                    price:      11.99,
                    receipt:    "CRKNG CDNG NTRV"
            },
            
            {
                    title:      "The Business Value of Developer Relations: How and Why Technical Communities Are Key to Your Success", 
                    author:     "Mary Thengvall", 
                    category:   "Career", 
                    ISBN:       "9781484237489", 
                    format:     "Paperback",
                    price:      16.99,
                    receipt:    "BUS VAL DEV REL"
            },
        
            {
                    title:      "Agile Software Development: The Cooperative Game, 2nd Edition", 
                    author:     "Alistair Cockburn", 
                    category:   "Career", 
                    ISBN:       "0321482751", 
                    format:     "Paperback",
                    price:      29.99,
                    receipt:    "AGILE SFTWR DEV"
            },
        
    // 'PROFESSIONAL DEVELOPMENT' BOOKS
    
            {
                    title:      "Test Driven Development: By Example", 
                    author:     "Kent Beck", 
                    category:   "Professional Development", 
                    ISBN:       "0321146530", 
                    format:     "Paperback",
                    price:      35.99,
                    receipt:    "TEST DRVN DSIGN"
            },
        
            {
                    title:      "The Pragmatic Programmer", 
                    author:     "Andrew Hunt, David Thomas", 
                    category:   "Professional Development", 
                    ISBN:       "0135957052", // UPDATE RS
                    format:     "Hardcover",
                    price:      28.99,
                    receipt:    "PRAGMA PROGRMMR"
            },
    
            {
                    title:      "The Clean Coder: A Code of Conduct for Professional Programmers", 
                    author:     "Robert C. Martin", 
                    category:   "Professional Development", 
                    ISBN:       "9780132542913", 
                    format:     "Paperback",
                    price:      25.99,
                    receipt:    "CLEAN CODR COND"
            },
        
            {
                    title:      "Clean Code: A Handbook of Agile Software Craftsmanship", 
                    author:     "Robert C. Martin", 
                    category:   "Professional Development", 
                    ISBN:       "9780132350884", // need to update RS
                    format:     "Paperback",
                    price:      29.99,
                    receipt:    "CLEAN CODE HAND"
            },
    
            {
                    title:      "Peopleware: Productive Projects and Teams, 3rd Edition", 
                    author:     "Tim Lister, Tom DeMarco", 
                    category:   "Professional Development", 
                    ISBN:       "0321934113", //UDATE RS
                    format:     "Paperback",
                    price:      27.99,
                    receipt:    "PPLWR PROD PROJ"
            },
    
            {
                    title:      "Working Effectively with Legacy Code", 
                    author:     "Michael C. Feathers", 
                    category:   "Professional Development", 
                    ISBN:       "0131177052", 
                    format:     "Paperback",
                    price:      37.99,
                    receipt:    "WRKNG EF LG CDE"
            },
    
    // 'FICTION' BOOKS
        
            {
                    title:      "The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win", 
                    author:     "Gene Kim, Kevin Behr", 
                    category:   "Fiction", 
                    ISBN:       "0988262592", 
                    format:     "Paperback",
                    price:      15.99,
                    receipt:    "PHNX PROJ A NOV"
            },
        
            {
                    title:      "The Unicorn Project: A Novel About Developers, Digital Disruption, and Thriving in the Age of Data", 
                    author:     "Gene Kim, Frankie Corzo", 
                    category:   "Fiction", 
                    ISBN:       "1942788762", 
                    format:     "Kindle",
                    price:      9.99,
                    receipt:    "UNICORN PROJECT"
            },
        
            {
                    title:      "Coders: The Making of a New Tribe and the Remaking of the World", 
                    author:     "Clive Thompson", 
                    category:   "Fiction", 
                    ISBN:       "9780735220560", 
                    format:     "Hardcover",
                    price:      17.99,
                    receipt:    "CDR MKNG NW TRB"
            },
    
            {
                    title:      "Once Upon an Algorithm: How Stories Explain Computing", 
                    author:     "Martin Erwig", 
                    category:   "Fiction", 
                    ISBN:       "9780262036634", 
                    format:     "Hardcover",
                    price:      25.99,
                    receipt:    "ONC UPN ALG HOW"
            },
        
            {
                    title:      "Pattern Recognition", 
                    author:     "William Gibson", 
                    category:   "Fiction", 
                    ISBN:       "0425198685", 
                    format:     "Kindle",
                    price:      8.99,
                    receipt:    "PATTERN RECOGNI"
            }
    ];
    //----------------------------------------------------------------------------------------------
    
    // INITIALIZES AN EMPTY SHOPPING CART
    let cart = [];
    
    //----------------------------------------------------------------------------------------------
    
    // FUNCTION TO SEARCH FOR ITEMS IN THE BOOKSTORE
    function bookSearch(key)
    {
            //SETS THE SEARCH ITEM
            key = key.toLowerCase();
    
            //CREATES 2 ARRAYS - ONE FOR FUNCTIONS, ONE FOR CLEAN PRINTING
            let searchArray = [];
            let searchPrint = [];
    
            let i = 0;
            while (i < allBooks.length) 
            {       // IF STATEMENT TO SEARCH FOR ANY POSSIBLE RESULT
                    if (key === allBooks[i].title.toLowerCase() || key == allBooks[i].author.toLowerCase() || 
                            key == allBooks[i].category.toLowerCase() || key == allBooks[i].ISBN || 
                            key == allBooks[i].format.toLowerCase() || key == allBooks[i].price)
                    {
    
                            searchArray == searchArray.push(allBooks[i]);   // FOR OTHER FUNCTIONS
                            searchPrint == searchPrint.push(                // FOR CLEAN PRINTING
                                    "Title:     " + allBooks[i].title + "\n",
                                    "Author:    " + allBooks[i].author + "\n",
                                    "Category:  " + allBooks[i].category + "\n",
                                    "ISBN:      " + allBooks[i].ISBN + "\n",
                                    "Format:    " + allBooks[i].format + "\n",
                                    "Price:     " + allBooks[i].price + "\n\n");
    
                            i++
                    }
                    else
                    {
                            i++;
                    }
            }
    
            // DEPENDING ON THE ABOVE RESULTS, ONE OF THE FOLLOWING 2 STATEMENTS LOGS THE RESULTS
            if (searchArray.length != 0) 
            {
                    searchPrint = searchPrint.join('');
                    console.log("\n" + "THE BOOKS THAT MEET YOUR SEARCH CRITERIA OF '" + key.toUpperCase() + "' ARE: \n");
                    console.log(searchPrint);
            } 
            else 
            {
                    console.log ("\n" + "NO RESULTS MEET SEARCH CRITERIA." + "\n");
            }
    }
    
    //---------------------------------------------------------------------------------------------------------------
    
    // FUNCTION TO ADD ITEMS TO SHOPPING CART
    function addBook(isbn)
    {
            //CREATES 2 ARRAYS - ONE FOR FUNCTIONS, ONE FOR CLEAN PRINTING
            let addArray = [];
            let addPrint = [];
    
            let i = 0;
    
            //ADDS BOOK(S) TO AN 'ADDARRAY' ARRAY, IF FOUND, USING ISBN - MOST SPECIFIC SEARCH METHOD
            //THE 'ADDARRAY' ARRAY IS SEPARATE FROM THE SHOPPING CART, AS BOOKS CAN BE ADDED TO THE SHOPPING CART AT DIFFERENT TIMES
            while (i < allBooks.length) 
            {
                    if (isbn == allBooks[i].ISBN)
                    {
                            addArray == addArray.push(allBooks[i]);      // FOR OTHER FUNCTIONS
                            addPrint == addPrint.push(                   // FOR CLEAN LOGGING
                                    "Title:     " + allBooks[i].title + "\n",
                                    "Author:    " + allBooks[i].author + "\n",
                                    "Category:  " + allBooks[i].category + "\n",
                                    "ISBN:      " + allBooks[i].ISBN + "\n",
                                    "Format:    " + allBooks[i].format + "\n",
                                    "Price:     " + allBooks[i].price + "\n\n");
    
                            i++;
                    } 
                    else
                    {
                            i++;
                    }
            }
    
            // PRINTS THE BOOK(S) AND NUMBER OF ITEMS THAT WERE ADDED TO SHOPPING CART, IF ANY
            if (addArray.length != 0) 
            {
                    addPrint = addPrint.join('');
                    console.log("\n" + "THE FOLLOWING ITEM(S) HAS/HAVE BEEN ADDED TO YOUR SHOPPING CART: " + "\n");
                    console.log(addPrint);
                    console.log("NUMBER OF ITEMS ADDED: " + addArray.length + "\n");
            } 
            else 
            {
                    console.log ("ITEM UNKNOWN.  NO ITEMS HAVE BEEN ADDED TO YOUR SHOPPING CART." + "\n");
            }
    
            // THIS LOOP WILL TAKE THE BOOKS IN THE 'ADDARRAY' ARRAY AND ACTUALLY ADD THEM TO THE SHOPPING CART
            for (i = 0; i < addArray.length; i++) 
            {
                    cart == cart.push(addArray[i]);
            }
    }
    //------------------------------------------------------------------------------------------
    
    // FUNCTION TO REMOVE ITEMS FROM SHOPPING CART
    function removeBook(isbn)
    {
            //CREATES 2 ARRAYS - ONE FOR FUNCTIONS, ONE FOR CLEAN PRINTING
            let removedArray = [];
            let removedPrint = [];
    
            let i = 0;
    
            while (i < cart.length) 
            {
                    //ONCE AGAIN, ISBN IS USED TO LOCATE THE BOOK THAT IS REQUESTED TO BE REMOVED FROM SHOPPING CART
                    if (isbn == cart[i].ISBN)
                    {
                            removedArray == removedArray.push(cart[i]);          // FOR OTHER FUNCTIONS
                            removedPrint == removedPrint.push(                   // FOR CLEAN LOGGING
                                    "Title:     " + cart[i].title + "\n",
                                    "Author:    " + cart[i].author + "\n",
                                    "Category:  " + cart[i].category + "\n",
                                    "ISBN:      " + cart[i].ISBN + "\n",
                                    "Format:    " + cart[i].format + "\n",
                                    "Price:     " + cart[i].price + "\n\n");
    
                            cart.splice(i,1);  // REMOVES THE REQUESTED ITEM
                            i++;
                    } 
                    else
                    {
                            i++;
                    }
            }
    
            // PRINTS THE BOOK(S) AND NUMBER OF ITEMS THAT WERE FROM SHOPPING CART, IF ANY
            if (removedArray.length != 0) 
            {
                    removedPrint = removedPrint.join('');
                    console.log("\n" + "THE FOLLOWING ITEM(S) HAS/HAVE BEEN REMOVED FROM YOUR SHOPPING CART: " + "\n");
                    console.log(removedPrint);
                    console.log("NUMBER OF ITEMS REMOVED: " + removedArray.length + "\n");
            } 
            else 
            {
                    console.log ("ITEM(S) UNKNOWN.  NO ITEMS HAVE BEEN REMOVED FROM YOUR SHOPPING CART." + "\n");
            }
    }
    
    
    //------------------------------------------------------------------------------------------------
    
    // FUNCTION TO COMPUTE SUBTOTAL, TAX, AND TOTAL OF SHOPPING CART FOR CARTVIEW, CHANGE, AND RECEIPT FUNCTIONS
    
    function cartCost()
    {
            let subtotal = 0;
            let tax = 0;
            // total = 0;
            for (i = 0; i < cart.length; i++)
            {
                    subtotal += cart[i].price;
                    tax += cart[i].price * .06;
            }
            let total = subtotal + tax;
            return [subtotal, tax, total];
    }
    
    //------------------------------------------------------------------------------------------------
    
    // FUNCTION TO SEE THE SHOPPING CART
    function cartView()
    {
    
            // CALLS THE RESULTS FROM THE 'CARTCOST() FUNCTION
            let cartViewCost = cartCost();
            let subtotal1 = cartViewCost[0];
            let tax1 = cartViewCost[1];
            let total1 = cartViewCost[2];
    
            //A LOOP TO PRINT ITEMS IN SHOPPING CART, AND THEIR PRICE WITH TAX
            if (cart.length != 0)
            {
                    console.log("\n" + "THE FOLLOWING ITEM(S) IS/ARE IN YOUR SHOPPING CART: " + "\n");
                    for (i = 0; i < cart.length; i++)
                    {
                            // THIS LOG METHOD JUST PRINTS THE CART IN A LEGIBLE MANNER
                            console.log(                  
                                    "Title:     " + cart[i].title + "\n",
                                    "Author:    " + cart[i].author + "\n",
                                    "Category:  " + cart[i].category + "\n",
                                    "ISBN:      " + cart[i].ISBN + "\n",
                                    "Format:    " + cart[i].format + "\n",
                                    "Price:     " + cart[i].price + "\n\n");
                    }
                    console.log("\n" + "THE NUMBER OF ITEMS IN YOUR SHOPPING CART: " + cart.length + "\n");
    
                    console.log ("\n" + "THE SUBTOTAL OF ALL ITEMS IN YOUR SHOPPING CART IS:                     " + '$' + subtotal1);
                    console.log ("THE TOTAL SALES TAX, AT 6%, FOR ALL ITEMS IN YOUR SHOPPING CART IS:     " + '$' + tax1);
                    console.log ("THE TOTAL COST, TO PURCHASE ALL ITEMS IN YOUR SHOPPING CART, IS:        " + '$' + total1 + "\n");
            }
            else
            {
                    console.log("\n" + "YOUR SHOPPING CART IS EMPTY!" + "\n");
            }
    }
    
    //-------------------------------------------------------------------------------------------------------
    
    // // FUNCTION TO DETERMINE CHANGE FOR PURCHASE, IF NEEDED
    function change(payment)
    {
            // CALLS THE RESULTS FROM THE 'CARTCOST()' FUNCTION
            let changeCost = cartCost();
            let total2 = changeCost[2];
            let changeDue = (payment - total2);
            let pymntDue = (total2 - payment);
    
            if (payment == total2) 
            {
                    console.log ("\n" + "CHANGE DUE THE CUSTOMER: $0.00" + "\n");
            }
            else if (payment > total2)
            {
                    console.log("\n" + "CHANGE DUE THE CUSTOMER: " + "$" + changeDue);
            }
            else if (total2 > payment)
            {
                    console.log ("\n" + "PAYMENT IS SHORT.  " + "$" + pymntDue + " IS NEEDED YET.");
            }
            let paymentMade = payment;
            console.log("from change" + payment);
            return [total2, payment];
    }
    //-----------------------------------------------------------------------------------------------------
    
    // FUNCTION FOR RECEIPT
    function receipt()
    {
            change.call(payment);
            let receiptCost = cartCost();
            let subtotal3 = receiptCost[0];
            let tax3 = receiptCost[1];
            let total3 = receiptCost[2];
            let receiptPayment = change();
            let payment3 = this.payment;
    
            console.log ("\n" + "RECEIPT, JUST FOR YOU!!" + "\n");
            for (i = 0; i < cart.length; i++)
            {
                    console.log([i+1] + " - " + cart[i].receipt + "               " + cart[i].price);
            }
    
            console.log("\n" + "Subtotal for all items:           " + subtotal3);
            console.log("Tax, at 6%, for all items:        " + tax3);
            console.log("Total cost for all items:         " + total3);
            console.log("Change tendered:                  " + payment3);
            console.log("\n");
    }
    
    //-----------------------------------------------------------------------------------------------------
    
    //FUNCTIONS WITH ARGUMENTS
    
    // bookSearch("beginner");
    
    addBook("0321146530");
    
    addBook("1942788762");
    
    addBook("9780596007126");
    
    // addBook("978148423bfg7489");
    
    // removeBook("1942788762");
    
    cartView();
    
    change(100);
    
    receipt();
    
