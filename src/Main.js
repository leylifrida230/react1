import React from "react" // import react
import Alert from "./components/Alert"
import Counter from "./components/Counter"
class Main extends React.Component{ // membuat class sesuai nama
    constructor(){
        super()
        this.state = {
            judul: " judul incess manjahh",
            pesan: "pesan ayam goreng"
        }
    }
    render(){ //fungsi render untuk meletakkan tag HTML
        let data = [
            { color: "success", title: "head success" , message: "Congratulation" },
            { color: "dark", title: "Drak success" , message: "I'm sorry" },
            { color: "primary", title: "Primary success" , message: "good joob" }
        ]
        return(
            <div className="container">
               {/* <Alert bg="success" title="ahh mantab">
                    Semangat ya bund
                    <Alert bg="warning" title="di jaga ya" >
                        jan maen-maen jan maen-maen
                    </Alert>
                </Alert> 
                <Alert bg="danger" title="waduh" >heh ati ati kepleset</Alert>
                <Alert bg="info" title="yok yok" >wes to lk tibo i ndang tangi</Alert>
                <Alert bg="dark" title="ngepet yok" >Yok nyerah ngepet aja uda wkwkk</Alert>*/}
               {/*<Counter/> */}

               {/* implementasi dari array to component */}
               {data.map(item => (
                   <Alert bg={item.color} title={item.title}>
                       {item.message}
                   </Alert>
               ))}

               <div className="card col-12">
                   <div className="card-title bg-success text-white">
                       <h3>Contoh manipulasi state</h3>
                   </div>
                   <div className="card-body">
                       <Alert bg="primary" title={this.state.judul}>
                           {this.state.pesan}
                       </Alert>
                   </div>
                   <div className="card-footer">
                       Judul
                       <input type="text" className="form-control-mb-2"
                       value={this.state.judul} 
                       onChange={ (ev) => this.setState({judul : ev.target.value}) }/>

                       Pesan
                       <input type="text" className="form-control-mb-2"
                       value={this.state.pesan} 
                       onChange={ (ev) => this.setState({pesan : ev.target.value}) }/>
                   </div>
               </div>
            </div>
        )
    }
}

export default Main;