import React from 'react';
import {Row,Col} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import ImgMediaCard from "./cards/cards.js";
import {getAllCards} from "../../REDUX/actions";
import RecipeReviewCard from "./cards/sampleCards";
import RenderCards from "./RenderCards";
class Homepage extends React.Component{
constructor(props){
  super()
  this.state={
    cards:[]
  }
}
  componentDidMount(){
    this.props.getAllCards();
    if(this.props.AllCARDS.length>0){
      console.log('inside if........')
      this.setState({cards:this.props.AllCARDS});
    }
  }
  render() {
    console.log(this.props.AllCARDS);
    let Hard_Coded=[
      {
        name:"saurabh",phone_number: "9693782017",
        photo: "uploads\\093b3a2d37a0f4f8d9ebb6c9ef0662fe",
        role: "U",
        verified: false,
    },
    {
      name:"saurabh",phone_number: "9693782017",
      photo: "uploads\\093b3a2d37a0f4f8d9ebb6c9ef0662fe",
      role: "U",
      verified: false,
  },
  {
    name:"saurabh",phone_number: "9693782017",
    photo: "uploads\\093b3a2d37a0f4f8d9ebb6c9ef0662fe",
    role: "U",
    verified: false,
},
{
  name:"saurabh",phone_number: "9693782017",
  photo: "uploads\\093b3a2d37a0f4f8d9ebb6c9ef0662fe",
  role: "U",
  verified: false,
},
{
  name:"saurabh",phone_number: "9693782017",
  photo: "uploads\\093b3a2d37a0f4f8d9ebb6c9ef0662fe",
  role: "U",
  verified: false,
},
{
  name:"saurabh",phone_number: "9693782017",
  photo: "uploads\\093b3a2d37a0f4f8d9ebb6c9ef0662fe",
  role: "U",
  verified: false,
}]
    let temp=[];
    let t=[];
    for(let i=0;i<Hard_Coded.length;i+4){
     let j=0;
     let k=i;
     while(j!==3){
       t.push(Hard_Coded[k]);
       j++;
       k++;
     }
      temp.push(t);
    }
    console.log('after everything....',temp);
  const myarr=Hard_Coded.map((value,index)=>{
    return (
       <Row style={{marginTop:'2rem'}}>
          <RenderCards data={temp}/>
       </Row>
    )
  })
    return (
      <React.Fragment>
      {/* <h1>this is the landing page</h1> */}
      {/* <Container fluid>
        <Row style={{marginTop:'2rem'}}>
          <Col md={4}>
         {myarr[0]}
          </Col>
          <Col md={4}>
          {myarr[1]}
          </Col>
          <Col md={4}>
          {myarr[2]}
          </Col>
          </Row>
            
            
       </Container>  */}
       <h1>hello</h1>
       {myarr}
       </React.Fragment>
     
     
    );
  };
};
const mapStateToProps = state => {
  return { AllCARDS: state.user.AllCARDS };
};
const mapDispacthToProps = dispatch => {
  return {
    getAllCards:()=> dispatch(getAllCards()),
  };
};
export default connect(mapStateToProps,mapDispacthToProps)(Homepage)