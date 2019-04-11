import React, {Component} from 'react'
import validator from 'validator'
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'



class Form extends Component {
    
    state = {
        name: '',
        nameLabel: 'Name',
        nameClass: '',
        email: '',
        emailLabel: 'Email',
        emailClass: '',
        user: '',
        userLabel: 'Username',
        userClass: '',
        pass: '',
        passLabel: 'Password',
        passClass: '',
        cpass: '',
        cpassLabel: 'Confirm Password',
        cpassClass: '',
        web: '',
        webLabel: 'Website',
        webClass: '',
    }
    
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        
        var valid = true
        
        if (validator.isEmpty(this.state.name)) {
            valid = false            
            this.setState({
                nameClass : 'namebad',
                nameLabel : 'Name - Cannot be Blank'
            })
        }else{
            valid = true
            this.setState({
                nameClass: '',
                nameLabel: 'Name'
            })
        }   
         if (validator.isEmail(this.state.email)) {
            valid = true
            this.setState({
                emailClass: '',
                emailLabel: 'Email'
            })
        }else{
            valid=false
            this.setState({
                emailClass: 'namebad',
                emailLabel : 'Email- Must be valid Email'
            })}
        if (validator.isEmpty(this.state.user)) {
            valid = false            
            this.setState({
                userClass : 'namebad',
                userLabel : 'Username - Cannot be Blank'
            })
        }else{
            valid = true
            this.setState({
                userClass: '',
                userLabel: 'Username'
            })
        }
        if (validator.isEmpty(this.state.pass)) {
            valid = false            
            this.setState({
                passClass : 'namebad',
                passLabel : 'Password - Cannot be Blank'
            })
        }else{
            valid = true
            this.setState({
                passClass: '',
                passLabel: 'Password'
            })
        }
        if (validator.isEmpty(this.state.cpass)) {
            valid = false            
            this.setState({
                cpassClass : 'namebad',
                cpassLabel : 'Password - Cannot be Blank'
            })
        }else if(validator.equals(this.state.cpass,this.state.pass)){
            valid = true
            this.setState({
                cpassClass: '',
                cpassLabel: 'Confirm Password'
            })
        } else {
            valid = false
            this.setState({
                cpassClass: 'namebad',
                cpassLabel: 'Password - Must Match Password'
            })
        }if (validator.isURL(this.state.web)) {
            valid = true            
            this.setState({
                webClass : '',
                webLabel : 'Website'
            })
        }else{
            valid = false
            this.setState({
                webClass: 'namebad',
                webLabel: 'Website - Enter a valid URL'
            })
        }if (valid !== true){
            e.preventDefault()
        }  
    } 
 

    render() {
        return (
            <div id="container">
                <form id="form">
                    <h2>Profile Form - All fields required</h2>

                    <label className={this.state.nameClass}>{this.state.nameLabel}</label>
                    <input name='name' onChange={this.handleChange} type='text' value={this.state.name} className={this.state.nameClass} />

                    <label className={this.state.emailClass}>{this.state.emailLabel}</label>
                    <input name='email' onChange={this.handleChange} type='text' value={this.state.email} className={this.state.emailClass} />

                    <label className={this.state.userClass}>{this.state.userLabel}</label>
                    <input name='user' onChange={this.handleChange} type='text' value={this.state.user} className={this.state.userClass} />

                    <label className={this.state.passClass}>{this.state.passLabel}</label>
                    <input name='pass' onChange={this.handleChange} type='password' value={this.state.pass} className={this.state.passClass} />

                    <label className={this.state.cpassClass}>{this.state.cpassLabel}</label>
                    <input name='cpass' onChange={this.handleChange} type='password' value={this.state.cpass} className={this.state.cpassClass} />

                    <label className={this.state.webClass}>{this.state.webLabel}</label>
                    <input name='web' onChange={this.handleChange} type='text' value={this.state.web} className={this.state.webClass} />

                    <Link to='/Thankyou'><button type='submit' onClick={this.handleSubmit}>Submit</button></Link>
                </form>
            </div>
        )
    }
}

export default Form