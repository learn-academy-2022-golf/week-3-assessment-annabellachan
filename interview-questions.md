# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX (<></>) allows the user to write HTML and Javascript together. The structure component is similar to HTML. The purpose of using JSX is to convert tags into react elements. 

Researched answer: JSX(Javascript XML) is a syntax extension for Javasript and can be written as "<></>". It is a tag that is neither a string or HTML. By using JSX, it allows us to write and add HTML to react. One of the benefits of using JSX is that it allows the code to be more readable. There is one syntax difference between HTML and JSX, which is JSX must have a forward slash in the closing tags  whereas the forward slash can be optional in HTML. 
    - JSX = <img src= />
    - HTML = <img scrc= >
(Extra: JSX is written in camelCase // HTML can be written in all lowercase)

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a Javascript manager that organizes React applications. It allows users to use and share code with other developers making it easier to build software. When running yarn, files modified are node_modules, package.json, and the src(App.js)

Researched answer: Yarn is a Javascript manager developed by Meta that allows packages to be installed more quikcly and manage dependencies by sharing or in offline environments. It is known as the recommended way to start collaborative projects.This package manager was developed to solve consistency and performance problems that contain large codebases or frameworks. Files that are modified when you run are node_modules, package.json, and the src(App.js)
<!-- I'm actually not quite too sure what files are modified when running yarn. I want to say it would run all the files that are in the src folder when we modify App.js. Please correct me if I am wrong. -->

3. What is an anonymous function in JavaScript?

Your answer: Anonymous functions are nameless functions that can be declared without any named identifiers. In a function, it can be declared an unamed function and assign it to a new variable.

Researched answer: An anonymous function is a function without a name and can be declared without any identifiers. Normally in a function, there are keywords that need to be defined but with anon functions, the purpose is to the use keyword function to define the function without any supported name. Only function expressions can be annoymous. 

4. What is the difference between state values and props in React?

Your answer: Props(properties) are arguments that pass data to components through HTML and are used to pass data from one component to another. State contains data where the data can change over time. 

Researched answer: State stores data in local state of components which cannot be accessed and modified outside of the component. When data inside components are changed, State can refresh the app to reflect the changes that are managed by the component. Props passes data and events down to child. It makes components that are reuseable by giving components the ability to receive data from the parent component. 

5. What is the DOM?

Your answer: DOM allows programs and scripts to create, update, or remove elements from the webpage. Elements in the documents are accessable by using Javascript.

Researched answer: DOM (Document Object Model) are represented as nodes and objects for programming languages to be able to interact with the page. The web browser creates a DOM of webpages when a page is being loaded. The document structure, content, and style is what makes up a DOM. 

6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OOP is a compputer programming model designed to organize software around data or objects. These datas and objects can be manipulated which are well-suited for large and complex programs that need to be updated and maintained. 

2. Ruby: Ruby is a scripting language used to build desktop applications, websites, and processes data with automation tools. Ruby on rails is an application framework is a language for the cloud. It contains pre-written Ruby code that handles tedious items and does not repeat work (super effecient).

3. Implicit return: A function with values that is returned without using the keyword. The return is implied. 

4. Ruby blocks: Ruby blocks are small anonymous functions that can be passed into methods but does not belong to an object. Blocks are also known as closures. Blocks contain chunks of code and are called just like methods.

5. Ruby hashes: Ruby hashes are a collection of unique keys and their values that are stored by associated keys. Hashes are often referred to as key value pairs. Similiar to arrays but not entirely.
