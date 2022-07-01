import  ReactDOM from "react-dom/client";
import Game from "./components/Game";
import './style.css'
// function Hello(){
//     return(
//         <h1>Hello world</h1>
//     )
// }

let reactRoot=ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Game />)