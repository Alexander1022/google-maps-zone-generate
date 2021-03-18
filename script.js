const citymap = {
    sofia: {
        center: {lat: 42.70908843932485, lng: 23.32273052034473}
    }
};

var distance = 10 * 100000;

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function initMap()
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.705051888226194, lng: 25.025611376973337},
        zoom: 6,
        mapId: '208fdb7b0af43a99'
      });
    
    for(i = 0 ; i < 5 ; i++)
    {
        for (const city in citymap) 
        {  
            const cityCircle = new google.maps.Circle
            ({
            strokeColor: "#8b6fdd",
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: "#8b6fdd",
            fillOpacity: 0.8,
            map: this.map,
            center: { lat: -1 * citymap[city].center.lat, lng: (citymap[city].center.lng - 180) % 180 },
            radius: 20037508.34 - distance
            });
        }
        await sleep(2000);
        distance = distance / 2;
    }
}


