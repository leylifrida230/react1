import React from "react" // import react
import Alert from "./components/Alert"

class Main extends React.Component{ // membuat class sesuai nama
    render(){ //fungsi render untuk meletakkan tag HTML
        return(
            <div className="container">
                <Alert bg="success" title="ahh mantab">
                    Semangat ya bund
                    <Alert bg="warning" title="di jaga ya" >
                        jan maen-maen jan maen-maen
                    </Alert>
                </Alert> 
                <Alert bg="danger" title="waduh" >heh ati ati kepleset</Alert>
                <Alert bg="info" title="yok yok" >wes to lk tibo i ndang tangi</Alert>
                <Alert bg="dark" title="ngepet yok" >Yok nyerah ngepet aja uda wkwkk</Alert>
            </div>
        )
    }
}

export default Main;