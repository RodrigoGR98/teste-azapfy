import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html {
        height:100vh
    }
    
    body { background-color: #fafcfd; -webkit-font-smoothing: antialiased; height:100vh}
    
    body, input, select, button {
        font: 15px 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    #root {
        height:100vh;
    }

    :root{
        scrollbar-color: transparent;
        scrollbar-width: none !important;
    }

    iframe {
        border: 0;
    }

`;
