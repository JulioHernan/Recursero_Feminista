let data = [
    {
    _id: 1,
    "image":"https://scontent.feze14-1.fna.fbcdn.net/v/t1.6435-9/65386821_2333535423524757_8600615724693585920_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFDEz8KPloC9S8Y2OqD2gfZ84YGbIXmtv_zhgZshea2_4DZMyNV_YSYoHu5pqC_9CY&_nc_ohc=SJyPvZysZPQAX8ZSbBL&_nc_ht=scontent.feze14-1.fna&oh=00_AfDcYdtnShNykoZcAXRQzzBgexTl9eUC_vPtw-Gn6nz3vg&oe=64CC4448",
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
    "image":"https://scontent.feze14-1.fna.fbcdn.net/v/t1.6435-9/128368127_1711141329063339_7445736049448678969_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE9kRdPf4mq6gFjOu-rsvNriDDQYkcOygWIMNBiRw7KBc8EOzpkPbyuzr0Jdyvdv2Y&_nc_ohc=79v_PIa9jPUAX813Ogm&_nc_ht=scontent.feze14-1.fna&oh=00_AfAMgRUNC7cNL6D-qz0lHo0j22GqmfC9HgVhIJHw9ld_Ig&oe=64CC624F",
    "name":"Base N°24 “La Cunita”",
    "direccion":"Urquiza 1173, Ezeiza",
    "telefono":"📞4295-0443"
    },
    {
    _id: 4,
    "image":"https://scontent.feze14-1.fna.fbcdn.net/v/t1.6435-9/61684953_2050733161705305_5235305034899521536_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFjwd4AGwG-JLLKJN792k_8b_lK9yOb5zFv-Ur3I5vnMbzU-Mdyhmp5zLgrl47XFdc&_nc_ohc=vZnufJ9IbEIAX8znN3U&_nc_ht=scontent.feze14-1.fna&oh=00_AfA2Fl6wxcyqcRhxpJnuyxd0ogSdjka4Am0PUyZcduGtag&oe=64CC3F80",
    "name":"Base N°7",
    "direccion":"Solís 650, Spegazzini",
    "telefono":"📞02274430460"
    },
    {
    _id: 5,
    "image":"https://scontent.feze14-1.fna.fbcdn.net/v/t39.30808-6/278602523_1602722703437922_6521502438240861926_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGhjpOr2D5eh_7fBhUX0riZ1mwa6TQtD8jWbBrpNC0PyMumT9U_rhugcrA44bhhKLA&_nc_ohc=dK3DwO5-nZEAX9JSwbh&_nc_zt=23&_nc_ht=scontent.feze14-1.fna&oh=00_AfARrJb4_YXzaXXwb0CRryIqWD9N_R5UQLczVIOUpr5S5g&oe=64A904C5",
    "name":"Base N°18",
    "direccion":"Saavedra 947, Tristán Suárez",
    "telefono":"📞 2008-5638"
    },
    {
     _id: 6,
    "image":"https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/11987159_151180771891428_5761569949143757276_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGHmRXRLkE3Z_3E3-FCp6t2SmQ3v3VtYhtKZDe_dW1iG70uyW9uHT5vaDWUmVf9_ZY&_nc_ohc=B2qcnozg8CYAX9rOqK_&_nc_ht=scontent.feze14-1.fna&oh=00_AfByN3GHX340CSgeV6Aa4xe-qufzTyxORuSrHlbx7DMyVw&oe=64CC35EF",
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

