import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


const CardExample = () => {
  return (
      <MDBContainer>
      <MDBRow>
    <MDBCol sm="3">
      <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/avocado.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Avocado</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      
      <MDBCol sm="3">
      <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/apple.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Apple</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>

      <MDBCol sm="3">
      <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/pineapple.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Pineapple</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>

      <MDBCol sm="3">
      <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/banana.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Banana</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBRow>
    
    <MDBRow>
        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/cherries.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Cherries</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/grapefruit.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Grapefruit</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/grapes.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Grapes</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/kiwi.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Kiwi</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>
    </MDBRow>

    <MDBRow>
        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/lemon.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Lemon</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/orange.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Orange</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/papaya.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Papaya</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

        <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage style={{width: 150, height:150}} className="img-fluid" src={"/pictures/Fruits/strawberry.png"} waves />
        <MDBCardBody>
          <MDBCardTitle>Strawberry</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>

    </MDBRow>
    </MDBContainer>
  )
}

export default CardExample;