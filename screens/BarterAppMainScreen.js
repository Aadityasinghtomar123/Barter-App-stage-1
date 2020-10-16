import React,{Component} from 'react';
import { StyleSheet,Text,View,Alert,TextInput,TouchableOpacity } from 'react-native';
export default class BarterAppMainScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''}}
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert. alert("Succesfully LogIn")})
        .catch((error)=>{
            var errorMessage = error.message
            return Alert.alert(errorMessage)})}
    userSignUp=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert. alert("Succesfully SignUp")})
        .catch(function(error){
            var errorMessage = error.message
            return Alert.alert(errorMessage)})}
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.maincontainer}>
                <View >
                    <Text style={styles.header}>
                        Barter
                    </Text>
                </View>
                <View>
                    <TextInput
                    style={styles.loginInput}
                    placeholder="abc@gmail.com"
                    placeholderTextColor="#000000"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })}}/>
                     <TextInput
                    style={styles.loginInput}
                    placeholder="password"
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })}}/>
                    <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:200}]}
                    onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}
                    ><Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}
                    ><Text style={styles.buttonText}>SignUP</Text>
                    </TouchableOpacity>
                </View></View>
            </View>)}}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    maincontainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    header :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginInput:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ffffff',
      fontSize: 20,
      margin:10,
      paddingLeft:10,
      marginTop:50
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ffffff",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#000000',
      fontWeight:'200',
      fontSize:20
    },
    maincontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }
  })