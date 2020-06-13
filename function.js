let userPosition = {
    latitude: null,
    longitude: null
}
function getUserPosition() {
    if (!navigator.geolocation) {
        window.alert("Geolocation is not supported.");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        position => {
            userPosition.latitude = position.coords.latitude;
            userPosition.longitude = position.coords.longitude;
            displayPosition();
        },
        error => {
            window.alert("Unable to retrieve your location.");
        }
    );
}

function displayPosition() {
    document.getElementById("display_position").innerText = "latitude:" + userPosition.latitude + " longitude:" + userPosition.longitude;
}