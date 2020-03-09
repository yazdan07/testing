import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBView, MDBBtn, MDBMask } from "mdbreact";
import {NavLink} from 'react-router-dom';



class Home extends Component{

 Testonclick = () => {
  
  console.log('The link was clicked.')
 }

  render(){

  return (
    <MDBContainer className="elegant-color" size="1x">
        <svg  height={100} ></svg>
        <header className="font-weight-bold text-white" size="lg" >Have no idea what to cook? Or always for got what to buy in the market? 
        Try out our website, we provide recipes and shopping list !!! The most important is we also have the market navigation 
        function !! Try IT !!</header>
 
        <svg  height={250} ></svg>
      
      <MDBRow lg="4" center>
        <MDBIcon icon="fire-alt" size="2x" className="red-text">  Hottest Recipes</MDBIcon>
      </MDBRow>

      <svg  height={50} ></svg>


      <MDBRow >
          <MDBCol  sm="2" center>
            <MDBView waves>
              <img src={"/pictures/BeefHot.jpg"} style={{width: 150, height:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
          
          <MDBCol  sm="2">
            <MDBView waves>
              <img src={"/pictures/VegHot.jpg"} style={{width: 150, height:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol  sm="2">
            <MDBView waves>
              <img src={"/pictures/PorkHot.jpg"} style={{width: 150, height:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol  sm="2">
            <MDBView waves>
              <img src={"/pictures/DesHot.jpg"} style={{width: 150, height:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol  sm="2">
            <MDBView waves>
              <img src={"/pictures/Dessert/black-brown-and-white-melted-cake-on-round-white-ceramic-954199.jpg"} style={{width: 150, height:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol  sm="2">
            <MDBView waves>
              <img src={"/pictures/Dessert/blur-breakfast-close-up-dairy-product-376464.jpg"} style={{width: 150, height:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
        </MDBRow>
        
        <svg  height={100} ></svg>

        <MDBRow lg="4" center> 
        <i class="fas fa-book-reader fa-3x text-white"> Recipes</i>
        </MDBRow>

        <svg  height={20} ></svg>

        <MDBRow lg="4" center> 
        <p className="font-weight-normal fa-2x text-white">Normal weight text.</p>        
        </MDBRow>

        <MDBRow lg="4" center> 
        <p className="font-weight-bolder fa-2x text-white">Try It !!!</p>        
        </MDBRow>




        <MDBRow className="mt-4" >
          <MDBCol sm="4" >
            <MDBView hover zoom>
            <li><NavLink to="/VegRec">
              <img src={"/pictures/VegRec.jpg"} style={{height:500}} className="img-fluid" alt="" />
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x" >Vagetarian</p>
              </MDBMask>
              </NavLink>
              </li>
            </MDBView>           
          </MDBCol>


          <MDBCol sm="4">
            <MDBView hover zoom>
              <img src={"/pictures/beefRec.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Beef</p>
              </MDBMask>
            </MDBView>
            </MDBCol>

            <MDBCol sm="4">
            <MDBView hover zoom>
              <img src={"/pictures/DesHot.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Dessert</p>
              </MDBMask>
            </MDBView>

            <svg  height={20} ></svg>

            <MDBView hover zoom>
              <img src={"/pictures/PorkRec.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Pork</p>
              </MDBMask>
            </MDBView>
            </MDBCol>

          </MDBRow>

          <svg  height={100} ></svg>



          <MDBRow lg="4" center> 
          <MDBIcon icon="crosshairs" className="fa-3x text-white">Ingredients</MDBIcon>
          </MDBRow>

          <svg  height={100} ></svg>



<MDBRow >
          <MDBCol sm="4">
            <MDBView hover zoom>
              <img src={"/pictures/MeatIng.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Meat</p>
              </MDBMask>
            </MDBView>
            </MDBCol>

            <MDBCol sm="4">
            <MDBView hover zoom>
              <img src={"/pictures/DesHot.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Dessert</p>
              </MDBMask>
            </MDBView>

            <svg  height={20} ></svg>

            <MDBView hover zoom>
              <img src={"/pictures/VegRec.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Vegetable</p>
              </MDBMask>
            </MDBView>
            </MDBCol>

            <MDBCol sm="4">
            <MDBView hover zoom>
              <img src={"/pictures/Sauce.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Sauce</p>
              </MDBMask>
            </MDBView>

            <svg  height={20} ></svg>

            <MDBView hover zoom>
            <li><NavLink to="/FruitIng">
              <img src={"/pictures/FruitIng.jpg"} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
                <p className="font-weight-bolder white-text fa-2x">Fruit</p>
              </MDBMask>
              </NavLink>
              </li>
            </MDBView>
            </MDBCol>

            

          </MDBRow>



    </MDBContainer> 
  );
}
}
export default Home;

