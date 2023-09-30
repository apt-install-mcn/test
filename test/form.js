async function enviarDatos(e){
    e.preventDefault()
    let name = document.getElementById("Name").value
    let phone = document.getElementById("Phone").value
    let email = document.getElementById("Email").value  
    let message = document.getElementById("Message").value
    try {
        document.getElementById("response_msg").innerHTML='Sending message...';
        await axios.post('https://send-email-node-ws5a-dev.fl0.io/easylifesalvatech.online/', {
            name,
            phone,
            email,
            message
        });

        document.getElementById("Name").value='';
        document.getElementById("Phone").value='';
        document.getElementById("Email").value='';
        document.getElementById("Message").value='';

        document.getElementById("response_msg").innerHTML='Message sent succesfully';
        return 'Mensaje enviado con exito'

    } catch (error) {
        document.getElementById("response_msg").innerHTML=`Error sending message ${error}`;
        return 'Error sending message'
    }
}