let data = [
    {
    _id: 1,
    "image":"https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/65386821_2333535423524757_8600615724693585920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFDEz8KPloC9S8Y2OqD2gfZ84YGbIXmtv_zhgZshea2_4DZMyNV_YSYoHu5pqC_9CY&_nc_ohc=qPAWjKNAr_IAX_a2MlG&_nc_ht=scontent.feze11-1.fna&oh=00_AfC-L4-dpocQsS5PZEvv3G_5LQTplgYoZFB190iMrwz1dA&oe=65900B08",
    "name":"Base La Trocha Norte",
    "direccion":"Garay y Chile, Ezeiza",
    "telefono":"📞 4295-3765",
    },
    {
    _id: 2,
    "image":"https://pbs.twimg.com/media/E8EKhnwWYAAzY84?format=jpg&name=medium",
    "name":"Base N°4 La Trocha Sur",
    "direccion":"Trieste 940, Ezeiza",
    "telefono":"📞 2008-2922",
    },
    {
    _id: 3,
    "image":"https://www.ezeizahoy.com.ar/fotos/0000625-01l.jpg?rnd=",
    "name":"Base N°24 “La Cunita”",
    "direccion":"Urquiza 1173, Ezeiza",
    "telefono":"📞4295-0443"
    },
    {
    _id: 4,
    "image":"https://www.infobae.com/new-resizer/YSk5cbfhWUxoAz8tfTreQzrhy8w=/768x432/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/RQHTCFQUZRHAJDYABTVVHQYHCY.jpg",
    "name":"Base N°7",
    "direccion":"Solís 650, Spegazzini",
    "telefono":"📞02274430460"
    },
    {
    _id: 5,
    "image":"https://www.ezeizahoy.com.ar/fotos/0002490-01l.jpg?rnd=",
    "name" : "Base N°18",
    "direccion":"Saavedra 947, Tristán Suárez",
    "telefono":"📞 2008-5638"
    },
    {
     _id: 6,
    "image":"https://1.bp.blogspot.com/-O2Ue5B7jxZ4/XR5z5UpBp2I/AAAAAAADb54/lbOMZL3wUDoXPjzhWKlmxrRlhuXKV5yVgCLcBGAs/s1600/desarrollo%2Bsocial%2Bde%2BEZEIZA.jpg",
    "name":"Desarrollo Social de Ezeiza",
    "direccion":"Zapala 480, La Unión",
    "telefono":"📞 4232-4141 "
    }
]
// Dividir el array en partes
let data1 = data.slice(0, 3); // Obtiene los elementos desde el índice 0 hasta el 3 (exclusivo)
let data2 = data.slice(3,4); // Obtiene los elementos del índice 3
let data3 = data.slice(4,5);
let data4 = data.slice(5,6);

// Obtener los contenedores de cada sección del acordeón
let contenedor1 = document.querySelector(".contenedorEzeiza");
let contenedor2 = document.querySelector(".contenedorSpega");
let contenedor3 = document.querySelector(".contenedorSuarez");
let contenedor4 = document.querySelector(".contenedorUnion")


// Renderizar las tarjetas para cada sección del acordeón
renderCards2(data1, contenedor1);
renderCards2(data2, contenedor2);
renderCards2(data3, contenedor3);
renderCards2(data4, contenedor4);

