import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow, MDBContainer, MDBCardImage } from 'mdbreact';
import Select from 'react-select';
import '/Users/yazdan/Desktop/Testing_File-master/src/Components/scrollbar.css'
import CreatableInputOnly from '/Users/yazdan/Desktop/Testing_File-master/src/Components/ingred.js'

const optionsIngredients = [
  { value: 'onion', label: 'Onion' },
  { value: 'red bell pepper', label: 'Red Bell Pepper' },
  { value: 'orange bell pepper', label: 'Orange Bell Pepper' },
  { value: 'cilantro', label: 'Cilantro' },
  { value: 'bread', label: 'Bread' },
  { value: 'Olive Oil', label: 'Olive Oil' },
  { value: 'black pepper', label: 'Black Pepper' },
  { value: 'garlic', label: 'Garlic' },
  { value: 'tomatoes', label: 'Tomatoes' },
  { value: 'eggs', label: 'Eggs' },
  

];

const Card = props => { 
  
 
  return (

    <MDBContainer>
   <MDBRow>
           
    <MDBCol >
    
      <MDBCard style={{ width: "25rem", height:"25rem" }}> 
      <MDBCardImage style={{width: '100', height:'100'}} className="img-fluid" src={"/Fruits/avocado-close-up-colors-cut-557659-removebg-preview.png"} waves />
             
        <MDBCardBody>
          <MDBCardTitle className="center"><h1>Avocado</h1></MDBCardTitle>
        </MDBCardBody>
       </MDBCard>
       </MDBCol>         

        
       <MDBCol sm="4">
          <Select options={optionsIngredients}       
            placeholder="Select ingredients from us "
            Menu
            isSearchable 
            isMulti
            autoFocus></Select> <MDBRow sm="3"><MDBCol sm="3">
            <button type="button" className="btn btn-outline-danger waves-effect">Add</button></MDBCol></MDBRow>
             
        </MDBCol> 
       


  <MDBCol>
      


    <div className="scrollbar scrollbar-primary" style={{ height: '500px' }}>
       <h1> Great Recipe's for a Healthy lifesyle </h1>
              
      <h3>1. Heat the oil in a  large skillet, add the onion and cook, covered, for 4 minutes. Add the peppers, season with 1/2 teaspoon each salt and pepper and cook, covered, stirring occasionally, until just tender, 6 to 8 minutes. Stir in the garlic and cook for 1 minute.</h3>
      <h3>2. Crush the tomatoes with your hands and add to the skillet along with their juices. Bring to a boil, then reduce heat and simmer until the mixture has slightly thickened, about 5 minutes.</h3>
      <h3>3. Make 8 small wells in the sauce and carefully crack an egg into each one. Cover and gently simmer for 6 minutes. Uncover and cook until the whites are set and the yolks are cooked to desired doneness, 6 to 7 minutes for slightly runny yolks. Sprinkle with chopped cilantro, if desired, and serve with toast.</h3>
    </div>
 
            </MDBCol>



                          
          </MDBRow>
        </MDBContainer>
    
    
  )
}


export default Card;


