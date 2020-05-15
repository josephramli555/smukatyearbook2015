import React,{useState} from "react";
import Card from "./card/Card";
import Navbar from "./navbar/Navbar";
import Data from "./Data";

function App() {

  const [tempList,setList]=useState(Data);
  const [searchText,setText]=useState("");

  function handleChange(event){
    const {value} = event.target;
    setText(value);
    setList(Data);
    setList(prevItem=>{
      return prevItem.filter(items=>{
        return items.name.toLowerCase().includes(value.toLowerCase());
      })
    })
    console.log(tempList);
  }


  return (
    <div>
      <Navbar />
      <h1 className="heading">Smukat Yearbook 2015</h1>
      <div className="md-form active-pink active-pink-2 mb-3 mt-0 form-wrapper">
          <input className="form-control input-search" type="text" placeholder="Search" onChange={handleChange} value={searchText}/>
      </div>

      <div className="container">
        <div className="row">
          {tempList.map((items, index) => {
            return (
              <Card
                name={items.name}
                img={items.img}
                dob={items.dob}
                place={items.place}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <footer class="page-footer font-small blue">
<br/>

<hr/>
<div class="quotes">
  "Surga adalah nasi goreng chibi campur pilus den mountea"
  <div className="quotes-author"> Anak Kantin</div>
</div>

<hr/>
  <div class="footer-copyright text-center py-3 footer">
    <a href="https://github.com/josephramli555/Buku-Tahunan-Smukat-2015.git"><i class="fab fa-github fa-2x"></i></a>
    <br></br>
    © 2020 Copyright by Joseph Ramli
  </div>

</footer>
    </div>
  );
}

export default App;
