import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";


class ShopList extends Component{

    

       state = {
        color: '',     
      }
      onChange = () => {
         this.setState({ color:'lightblue'});
                   
      }
      onChange2 = () => {
        this.setState({ color:''});
              
     }

     

      


render(){

    
return (
    
<MDBContainer>
<svg  height={100} ></svg>

<MDBRow>
<MDBCol>
<header className="font-weight-bold text-Black" >Recipes</header>

  <MDBListGroup style={{ width: "22rem", height:"10"}} >
    <MDBListGroupItem className="shadow-box-example hoverable" href="#" style={{ backgroundColor: this.state.color }} onMouseEnter={this.onChange} 
    onMouseLeave={this.onChange2}> Hello
    <MDBIcon far icon="trash-alt" className="align-middle right" ></MDBIcon>
    </MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable" href="#">Morbi leo risus</MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable" href="#">Porta ac consectetur ac</MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable" href="#">Vestibulum at eros</MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable" href="#">Dapibus ac facilisis in</MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable" href="#">Morbi leo risus</MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable" href="#">Porta ac consectetur ac</MDBListGroupItem>
    <MDBListGroupItem className="shadow-box-example hoverable"  href="#">Vestibulum at eros
    </MDBListGroupItem>  
  
  </MDBListGroup>

  </MDBCol>

  <MDBCol sm="4">
  <header className="font-weight-bold text-Black" >Ingredients</header>

  <MDBListGroup style={{ width: "22rem"}}>
    <MDBListGroupItem href="#">Dapibus ac facilisis in</MDBListGroupItem>
    <MDBListGroupItem href="#">Morbi leo risus</MDBListGroupItem>
    <MDBListGroupItem href="#">Porta ac consectetur ac</MDBListGroupItem>
    <MDBListGroupItem href="#">Vestibulum at eros</MDBListGroupItem>
  </MDBListGroup>
  </MDBCol>
</MDBRow>



<MDBRow center >
<MDBBtn gradient="purple" center> Go Shopping !</MDBBtn>
</MDBRow>



</MDBContainer>

);
};
}

export default ShopList;