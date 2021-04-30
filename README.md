# ReactJS_29Apr2021_06May2021_09001200
---------------------------------------------------------------------
https://github.com/avamsykiran/ReactJS_29Apr2021_06May2021_09001200.git
-----------------------------------------------------------------------

Pre-Requisites
-----------------

    HTML 5
        WebStorage
        HTML 5 Form Elements and Validation Attributes
    CSS 3
    JavaScript (ES6)
        ES6 Modules 
        Arrow Functions
        Spread Operator
        Array prototype Fucntions

ReactJS
----------------------------------------------------------------------------

        SPA library

        
        Dynamic Web Applciation

            WebServer                                                               WebClient

                    Servlet     <---REQ (URL) -------------
                    JSP         ----Dynamically generated HTML + CSS +JS --->

                    C#Classes
                    ASPX

        
        Single Page Application


            WebServer                                                               WebClient

                SPA Bundle              <---REQ (URL) -------------
                    index.html          --Entire Bundle (HTML+CSS+JS)------->   SPA will execute.
                    javascriptcode.js
                    .css

                REST api                <-----------REQ---------------------
                                        ----------Only Data xml/json -------->      dynamically
                                                                                    HTML requried to
                                                                                    enclsoe and present the data.
        
        SPA  =  index.html {is a composition of small smart units called Components}

            Component = Template + Behaviour


        ReactJS Components
        ---------------------------------------------------------------------------------

            Class Components
            Functional Components
            Pure Funtional Components
            High Order Components

        Class Components
        ---------------------------------------------------------------------------------

        class MyComponent extends React.Component {

            constructor(){

            }

            render(){  ///responsible to deliver the template
                return JSXElement;
            }
        }

        JSX
        ------------------------------------------------------------------------------

            is a combination of html and JS together.

            1. all the html elements must be in lowercase
            2. instaed of the attribute 'class' we have to use className
            3. all html attribute must follow camel case.
                        <input type="text" readonly="true" />       HTML
                        <input type="text" readOnly="true" />       JSX

            4. use { } to wrtie a javascript expression.
            5. use our components as html elements <MyComponent />

        NodeJS
        ----------------------------------------------------------------

                is a javascript execution environemnt.

                developing a react applciation
                    iu need react tools and other tools to 
                    develop, test, build, pack and publish my Code.
                    And allt hese tools are made using javascirpt.

                    test        jest         (javascript testing library)
                    build/pack  webpack     (javascript packaging appliction)

                    For these tools to run we use NodeJS.

                    NodeJS is a used as development platform for ReactJS.


                    NodeJS
                            node        execution platform for javascript programs/app/tools
                            npm         node package manager
                                                package --------> an individual lib/framework/app.

                                        is a dependency mangement tool.

                                        npm init  proj-name
                                                  to create a new node project

                                        npm install package-name --save
                                                    download the package requried for our app.
                                                    --save will mke its entry in package.json

                                        package.json is a config file for npm.
                                        it cotnains the list of packages or dependencies of our current app.

                                        All the dependencis are downlaoded and palce in a folder called node_module in our project.

                                        we can delete that folder and re-create ir wiht 'npm install'. 

                            npx         node package executor.
                                        execute or run a javascript app/tool without 
                                        downloading it.

           Create our ReactJS App
           -------------------------------------------------------

            Method 1
                        1. create a project directory
                        2. 'npm init' initialize the node project int hat directory
                        3. 'npm install' install the requried libraries
                                    react
                                    react-scripts
                                    react-dom
                                    jest
                                    webpack
                                    ........etc

            Method 2

                        create-react-app        is a tool developed by FB.

                        npx create-react-app app-name
            
            Component State
            --------------------------------------------------------------------

                state is a collection of data at a given point of time.

                each component has its own state.

                And this state is immutable. (state can not be modifeid, it can only be 
                replaced).

                React Component has a method setState(newState);

                the state is initialized in the constructor
                the state is repalced using setState method.
                every tiem the state gets repalced, the component is re-rendered.

            Component Properties (props)
            --------------------------------------------------------------------------

                HTML element = tag + attributes.

                props of a component are used to access
                the attributes passed to it.

            Integrating Bootstrap
            --------------------------------------------------------------------------
            Method1
                1. install bootstrap into our app as a dependency:

                        npm install jquery popper bootstrap --save

                2. we can import bootstrap into index.js

                        import 'bootstrap/dist/css/bootstrap.min.css';
                        import * from 'jquery';
                        import * from 'bootstrap/dist/js/bootstrap.min.js';

            Method2

                include the bootstrap CDN links in index.html

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>


              Functional Components
              ----------------------------------------------

                A javascript function that accepts the props and returns a JSXElement
                can be a component, called Functional Component.

                function Abc(props){
                    return (
                        <div>
                            fhakfjjhajklfhaskljf
                        </div>
                    );
                }


                const Pqr = (props) => (
                    <div>
                        ajflkasjflkasdjf
                    </div>
                );


                <Abc />
                <Pqr />

            Event Bubbling
            -------------------------------------------

                A parent component can handle the event 
                occured in a child component.

                A parent component can pass 
                data dna functions also as props
                to the child component.

                The child component can call the fucntion passed
                by parent component in resposne to any event.



            Forms in ReactJS
            --------------------------------------------------------------

                Controled Forms
                UnControled Forms


                
