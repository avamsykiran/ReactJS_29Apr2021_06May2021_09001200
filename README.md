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

                    test        jasmine     (javascript testing library)
                    build/pack  webpack     (javascript packaging appliction)

                    For these tools to run we use NodeJS.

                    NodeJS is a used as development platform for ReactJS.

           Create out ReactJS App
           -------------------------------------------------------

            Method 1
                        1. create a project directory
                        2. 'npm init' initialize the node project int hat directory
                        3. 'npm install' install the requried libraries
                                    react
                                    react-scripts
                                    react-dom
                                    jasmine
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





