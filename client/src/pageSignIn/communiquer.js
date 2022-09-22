import React, { useEffect,useState } from 'react'
import Navbar from '../pageSignIn/components/Navbar';
// import SelectDropdown from 'react-native-select-dropdown'
import'../compnent/assets/css/communiquer.css'
import { Button } from '@mui/material';
export default function Communiquer() {
 const [content,setContent]=useState('')
 const send=localStorage.getItem('bureau')
 console.log(send)
  const i = send.indexOf(":")
  const j = send.lastIndexOf("\"")
  const sender = send.slice(i+2,j)
 
 function sendMessage(){

  fetch("/sendMessage",{method: "post", headers: { "Content-Type": "application/json" },body: JSON.stringify({
    text: content, postedBy:sender}
    )}).then(res => res.json()).then(result=>{console.log(result)})
 }

  

  return (
    <>
    <Navbar/>

    <div class='card' id='siege'>
      <table>
        <tr>
          <td>
      <div>  <i class="large material-icons" >account_balance</i></div>
   </td>
   <td>
      <span>Type de structure:</span>
      <span>Association/ONG</span><br/>
      <span>adresse postale:</span>
      <span> Rue Abou Kacem El-Chebbi 6000</span><br/>
      <span>Ville:</span>
      <span> Gabès ouest</span><br/>
      <span>Téléphone : </span>
      <span> 21675291600</span><br/>
      </td>
      </tr>
      </table>
    </div>
    <table>
      <tr>
        <td>
    <div class='card'  id='siegeMember1'>
      <span>
        <h6>M.Sadok Cherif</h6>
      </span>
      <span>Association Générale des Insuffisants Moteurs
Président</span>
    </div></td>
 <td>
    <div class='card' id='siegeMember'>
      <span>
        <h6>M.Abdelalem Zidi</h6>
      </span>
      <span>Association Générale des Insuffisants Moteurs
       Trésorier</span>
    </div></td></tr>
</table>
    <h5 className='h'>saisir votre Message :</h5>
    <div className='h'>
    <form>
    <textarea placeholder='votre Message' id='mail' value={content} onChange={(e) => setContent(e.target.value)}/>
    <br/>
    <button variant="contained"  onClick={sendMessage}>envoyer</button></form></div>
    
   
    
    </>
  )
}

