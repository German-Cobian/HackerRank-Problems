// Objective

// To extend what we learned about Inheritance to Abstract Classes.

// Task

// Given a Book class and a Solution class, write a MyBook class that does the following:

// * Inherits from Book
// * Has a parameterized constructor taking these 3 parameters:
//  1. string title
//  2. string author
//  3. int price
// * Implements the Book class' abstract display() method so it prints these 3 lines:
//  1. Title:, a space, and then the current instance's title.
//  2. Author:, a space, and then the current instance's author.
//  3. Price:, a space, and then the current instance's price.
// Note: Because these classes are being written in the same file, you must not use an access modifier
// (e.g.: public) when declaring MyBook or your code will not execute.

// Input Format

// You are not responsible for reading any input from stdin. The Solution class creates a Book object and 
// calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method 
// on the Book object.

// Output Format

// The void display() method should print and label the respective title, author, and price of the MyBook 
// object's instance (with each value on its own line) like so:

// Title: $title
// Author: $author
// Price: $price
// Note: The $ is prepended to variable names to indicate they are placeholders for variables.

// Sample Input

// The following input from stdin is handled by the locked stub code in your editor:

// The Alchemist
// Paulo Coelho
// 248
// Sample Output

// The following output is printed by your display() method:

// Title: The Alchemist
// Author: Paulo Coelho
// Price: 248


// Declare your class here.
class MyBook extends Book {
  /**   
  *   Class Constructor
  *   
  *   @param title The book's title.
  *   @param author The book's author.
  *   @param price The book's price.
  **/
  // Write your constructor here
  constructor(title, author, price ){
     super(title, author);
     this.price = price;
  }
      
  /**   
  *   Method Name: display
  *   
  *   Print the title, author, and price in the specified format.
  **/
  // Write your method here
  display() {
      console.log("Title: " + this.title);
      console.log("Author: " + this.author);
      console.log("Price: " + this.price);
  }
// End class
}
