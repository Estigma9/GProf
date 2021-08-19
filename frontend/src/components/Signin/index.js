/*

import React from 'react'
// import { Button } from '../ButtonElements'
import {Container,FormWrap,Icon,Form,FormButton,FormatContent,Text,FormatLabel,FormatInput,FormH1,IconRe} from './SigninElements'


const SignIn = () => {
    return (
        <>
            <Container>
                < FormWrap>
                    <Icon to="/">GestoProf</Icon>
                    <FormatContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormatLabel htmlFor='for'>Email</FormatLabel>
                            <FormatInput type='email' required></FormatInput>
                            <FormatLabel htmlFor='for'>Password</FormatLabel>
                            <FormatInput type='password' required></FormatInput>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                            <IconRe to="/register">Registrate aqui</IconRe>
                        </Form>
                    </FormatContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default SignIn

*/

import React, { Component } from 'react'
// import { Button } from '../ButtonElements'
import {Container,FormWrap,Icon,Form,FormButton,FormatContent,Text,FormatLabel,FormatInput,FormH1,IconRe} from './SigninElements'
import axios from 'axios';
import swal from 'sweetalert';
//import md5 from 'md5'; //instalar se lo vamos a usar npm i md5


const baseUrl = "https://localhost:4000/users/login";


class SignIn extends Component {
    state = {
        form:{
            correo: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async()=>{
        //e.preventDefault();
        await axios.post(baseUrl, {params: {correo: this.state.form.correo, password: this.state.form.password}})
        .then(request=>{
            //window.location.href="./";
            //alert(response);
            console.log(request);
            
           
            /* 
            let token = response.data.tokenReturn;
            let user = response.data.user;

            localStorage.setItem('jwt', token);
            localStorage.setItem('user', JSON.stringify(user));

            if(token){
                swal("Éxito!!", "Login correcto!", "success");
                window.location.href="./student";
            }else{
                swal("Oops!", "Algo salió mal!", "error");
            }
            */ 
        })  
        /*.catch(error=>{
            window.location.href="./student";
            console.log(error);
            swal("Oops!", "Algo salió mal!", "error");
        })     */ 
    }

    render() {  
        return (
            <>
                <Container>
                    < FormWrap>
                        <Icon to="/">GestoProf</Icon>
                        <FormatContent>
                            <Form action="#">
                                <FormH1>Sign in to your account</FormH1>
                                <FormatLabel htmlFor='for'>Email</FormatLabel>
                                <FormatInput 
                                    type='email' required
                                    name = 'correo'
                                    onChange={this.handleChange}
                                ></FormatInput>
                                <FormatLabel htmlFor='for'>Password</FormatLabel>
                                <FormatInput
                                    type='password' required
                                    nombre='password'
                                    onChange={this.handleChange}
                                ></FormatInput>
                                <FormButton 
                                    type='submit'
                                    onClick={()=> this.iniciarSesion()}
                                >Continue</FormButton>
                                <Text>Forgot password</Text>
                                <IconRe to="/register">Registrate aqui</IconRe>
                            </Form>
                        </FormatContent>
                    </FormWrap>
                </Container>  
            </>
        )
    }
}

export default SignIn;



