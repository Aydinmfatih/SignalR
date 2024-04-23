$(document).ready(function () {

    const connection = new signalR.HubConnectionBuilder().withUrl("/examplehub").configureLogging(signalR.LogLevel.Information).build();


    function start() {
        connection.start().then(() => console.log("hub ile Bağlantı Kuruldu"));
    }

    try {
        start()
    }
    catch (e) {
        setTimeout(() => start(), 2000)
    }

})