import React from 'react';
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import history from "../../history";
// import {Link,Redirect} from 'react-router-dom';
import { LoginUser } from "../../REDUX/actions"
import {withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
//import { Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2
    },
    padding: {
        padding: theme.spacing.unit
    }
});

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
class LoginTab extends React.Component {
    constructor(props){
        super();
        this.state={
            email:"",
            password:"",
            formErrors:{
                email:"",
                password:""
              } 
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
          const user={
            email: this.state.email,
            password: this.state.password
          }
          //redux action handlercon
         
          this.props.LoginUser(user);
          
         
        }
    }
    
    
    handleOnChange=(e)=>{
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
          switch(name){
            case "email":
              formErrors.email = emailRegex.test(value)
                ? ""
                : "invalid email address";
              break;
            case "password":
              formErrors.password =
                value.length < 6 ? "minimum 6 characaters required" : "";
              break;
              default:
                break;
  
          }
          this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      }
      handleRegister=()=>{
          console.log('inside handle register');
        history.push('/registerUser');
    }
    render() {
      let loignErrorMsg="";
      console.log('after...',this.props.user);
    if(this.props.user.messege==='success !'){
      this.props.closeAfterLogin();
      return <Redirect to='/' />;
    }
    else if(this.props.user.messege==='Invalid Credentials'){
      loignErrorMsg='Login Failed';
    }
    else{
      loignErrorMsg="";
    }
        const { classes } = this.props;
        const { formErrors } = this.state;
        return (
            // <Paper className={classes.padding}>
            
            <form onSubmit={this.handleOnSubmit}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                            id="email"
                            name="email" 
                            label="Email" 
                            type="email" 
                            fullWidth 
                            autoFocus
                            onChange={this.handleOnChange} 
                            required />
                            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        {/* <Grid item>
                            <Fingerprint />
                        </Grid> */}
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                            id="email" 
                            name="password"
                            label="Password" 
                            type="password" 
                            fullWidth
                            onChange={this.handleOnChange} 
                            required />
                             {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" 
                        color="primary" 
                        style={{ textTransform: "none", width:"100%" }}
                        type="submit"
                        >Login
                        </Button>
                    </Grid>
                          <span>{loignErrorMsg}</span>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button 
                    disableFocusRipple disableRipple 
                    style={{ textTransform: "none" }} 
                    variant="text" 
                    color="primary"
                   onClick={this.handleRegister}
                    >New User? Register</Button>    
                    </Grid>
                   
                </div>
                </form>
            // </Paper>
        );
    }
}
const mapStateToProps = state => {
    return { user: state.user.user };
  };
const mapDispacthToProps = dispatch => {
    return {
      LoginUser:  user=> dispatch(LoginUser(user)),
    };
  };
export default connect(mapStateToProps,mapDispacthToProps)(withStyles(styles)(LoginTab));