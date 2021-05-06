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
        -------------------------------------------------------------------------------

            Class Components
            Functional Components
            Pure Funtional Components

                a functional component that does not use any
                react library reosurces or effect any other component.

            High Order Components

                is a function
                        that accepts a component as param
                        and returns that component with some
                        modifications.

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

                Forms In Controlled Components

                        The foem elements will directly update the changes made into the 
                        state using onChange event and setState method.

                Forms in UnControlled Components

                        1. create temparary data holders called references.

                                this.ref1 = createRef();

                        2. line these referencew with the respective input elements,

                                <input defaultValue="0" type="text" ref={this.ref1} />

                        3. After the form is submitted, we can collect values from all references, and
                            then proces that.


            Routing
            ---------------------------------------------------------------------

                Navigating in a web applcation is handled by routing, or routing config.

                react-router
                react-router-dom

                        BrowserRouter           is a contaienr of reouting config.
                        Route                   configs which component msut appear
                                                for which url. (maps a url with a component)
                        Switch                  ensure that only the first matching url
                                                related component appers.


                                                home            HomeComponent
                                                emp             EmpComponent
                                                empPlus         AddEmpComponent

                                                http://localhost:8989/home          HomeComponent
                                                http://localhost:8989/emp           EmpComponent, AddEmpComponent

                                                to correct tha above glitch, we use Switch

                        Redirect                is used to navigate programatically.

                        Link                    is used as analternate to <a></a>

                        
            React Component LifeCycle
            -----------------------------------------------

                constructor() 
                     |
                    render()
                        |
                      componentDidMount()
                                 |
                                {the compoenet state might change} ----------|     
                                    |                                        |
                                    render ()                                |
                                        |                                    |   
                                        componentDidUpdate()                 |
                                            |                                |
                                            | (event handing happens ) ------|
                                                    |
                                                    | (component is asked to unmount )
                                                    componentWillUnmount()

                While at any stage in this component,
                if the react renderer ort laoder encounter an error:
                    componentDidCatch() 

        Form Validations
        ---------------------------------------------------------------

                onChagne we can collect all the validations,
                and display them on the form.

        Working With REST API
        ----------------------------------------------------------------

            Instead of rest apis from java/.net/ anythign else, we will use
            a fake rest api using 'json-server'

                npm install --save json-server

                we will add the below commadn into the scripts section of package.json 
                
                    json-server --watch datafile.json --port portNumber

            
            We will 'axios' , a tool to communciate with rest api, to
            talk to our fake rest api.

                npm install --save axios


                axios
                        .get(url)               : Promise
                        .put(url,requestBody)   : Promise
                        .post(url,requestBody)  : Promise
                        .delete(url)            : Promise

            
            React LifeCycle Hooks
            -------------------------------------------------------

                Functional Components hasve no access to the 
                component lifecycle methods:

                            like setState / componentDidMount / componentDidUpdate ..etc

                Lately in react, the cocept of lifecycle hooks
                are introduced to enable access to life cycle method in a functional component.

                Rules
                    1. The hooks must lie as the first or top statements in the 
                        functional component body.
                    2. Hooks must be used only in functional components.

                Hooks
                    1. useState
                                    is a repalcemtn for setState.
                                    it return an array of two elements, first being the monitored variable,
                                    and secodn being a function to update state.
                                    it accepts the initial value.

                                    let [x,setX] = useState(0);
                                    
                    2. useEffect 
                                    is equivalent to componentDidMount, componentDidUpdate

                                    useEffect(()=>{
                                        //this piece of code get executed
                                        //every tiem the component is loaded            componentDidMount
                                        //every tiem the component render is complete   componentDidUpdate
                                    });

                                    useEffect(()=>{
                                        //this piece of code get executed
                                        //every tiem the component is loaded            componentDidMount
                                        //every tiem the component render is complete and if
                                        //some chagne happens in the given dependencies
                                    },[dependencies]);

                                    if dependencies array is empty, then the useEffect works like
                                    componentDidMount only.


    State Mangement Tools
    ---------------------------------------------------------------------------

        "Single Source Of Truth"????

                    state -----connected---- screen

                    whatever we on the memory,
                    the same msut appear on the screen.

                    to achive this, rendering is to happen
                    immidieatly if the state is modified.

                    this render auto-trigger after state is modified,
                    can happen only if we a single source of truth.

        the state can be managed
            by each component (locally)
            or by a tool once per application (globally).

        It is very important that if one component
        makes changes to the state, all other components are
        automatically informed of the change.

        Redux   -  State Management Tool
        ------------------------------------------------------

            npm install --save redux


                store               a store is a global keeper of state.
                                    it supplies the state whenever and wherever requested.
                                    it receives the state for modification from 'reducer'

                reducer             is a pure function
                                        params:     olderState, action
                                        return:     modifeidState

                action              an action is an object with two properties:
                                        type            indicate what action must happne
                                        payload         any data needed to accomplish the action

                                        {
                                            type: 'ADD',
                                            payload: {id:1,title:'Do a task',status:'Completed'}
                                        }

                                        {
                                            type: 'DELETE',
                                            payload: 101
                                        }

                    createStore         is a built-in fucntion that 
                                        accepts a reducer and returns store object
                                        assosiated with it.

                                        const myreducer = (oldStore,action) =>{
                                            ..................
                                            return modifedStore;
                                        };

                                        const mystore = createStore(myreducer);
                
                
                npm install --save react-redux
                
                    Provider            is a inbuilt linking compoenet 
                                        this links the store with the main component of our react applciation.

                                        ReactDOM.render(
                                            <React.StrictMode>
                                                <Provider store={mystore}>
                                                    <App />
                                                </Provider>
                                            </React.StrictMode>,
                                            document.getElementById('root')
                                            );

                    connect             is a inbuilt function 
                                                accepts two functions   mapStateToProps,mapDispatchToProps
                                                and returns a high order component.

                                        const mapStateToProps = (globalState) => {
                                            return aJsonObject;
                                        };

                                        const mapDispatchToProps = (dispatch) => {
                                            return aJsonObject;
                                        };

                                        const hoc = connect(mapStateToProps,mapDispatchToProps);

                                        //the hoc can now be used to connect the state with our onw component.

                                        const connectedTaskManager = hoc(TaskManager);

                                        TaskManager can not acces the state or dispatch directly,
                                        but connectedTaskManger has access to the state and dispatch.

                    dispatch            is a function that carries actions from the component
                                        to the reducer.


                                                            TaskManager (Componet)
                                                                | connect()() //hoc
                                                                |
                 store -->supplies globalState as props--> ConnectedTaskManager       
                    |                                           |
                    |                                           | action = {type:'DELETE',payload:101}
                    |                                           | dispatch(action);
                    |                                           |
                    |<-------return the modified state  <------ reducer


        Assignment
        -----------------------------------------------------------------------
            InventoryManagement

                item: {
                    id:1,
                    title:"A4 sheets bundle",
                    price:456.0,
                    stock:45
                }

                React App to perfom CRUD operatiosn 
                on this entity using Redux
                fro state mangeemnt.

                C   Create
                R   Retrive
                U   Update
                D   Delete

        Integrate Redux, React with an asynchronous rest api caller like axios
        --------------------------------------------------------------------------

                Redux Thunk
                Redux Saga




        




            




                 

                
