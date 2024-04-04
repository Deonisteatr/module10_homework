const wsUri = "wss://echo-ws-service.herokuapp.com";

const inputData = document.querySelector(".input-field");
const btnSend = document.querySelector(".j-btn-send");
const btnGeo = document.querySelector(".j-btn-geo");
const output = document.getElementById("output");

//Вывод сообщения
function writeToScreen(message, position = "flex-end") {
    let pre = `
        <p class="messages" style="display:flex; align-self: 
        ${position}; border:4px solid lightblue; border-radius:
        5px">
        ${message}
        </p>
    `;
    output.innerHTML += pre;
    output.scrollTop = output.scrollHeight;
   
}
//Объект соединения
let websocket = new WebSocket(wsUri);
 websocket.onopen = function(evt) {
        console.log("CONNECT");
};
websocket.onmessage = function(evt) {
        writeToScreen(
            `ответ сервера: ${evt.data}`, "flex-start"
        );
};
websocket.onerror = function(evt) {
    writeToScreen(`server: ${evt.data}`, "flex-start");
};

//Отправить сообщение
btnSend.addEventListener('click', () => {
    let message = inputData.value;
    websocket.send(message);
    writeToScreen(`Я: ${message}`);
    inputData.value = ""
});

//Если получение геолокации невозможно
const error = () => {
    let textErr0r = "Невозможно получить местоположение";
    writeToScreen(textErr0r);
};

//Успешное получение
const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen(`<a  href='${geoLink}' target='_blank'>Ваша гео-локация</a>`);
};

btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером'); 
    }else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});


   
   

//btnGeo.addEventListener('click', ())


   

