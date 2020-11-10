db.ciudades.find( {Habitantes: {$eq: 1950000} } ).pretty()
/* (BUSCAMOS LAS CIUDADES DONDE LOS HABITANTES SEAN = 1950000)
{
        "_id" : ObjectId("5faad427ffe88a678d2194cc"),       
        "Ciudad" : "Sevilla",
        "Pais" : "España",
        "Habitantes" : 1950000,
        "Monumentos" : [
                "Catedral de Sevilla",
                "Plaza de España",
                "La Giralda",
                "Archivo de Indias"
        ],
        "TiempoActual" : {
                "Temperatura" : 20,
                "Viento" : 3,
                "Humedad" : 64
        }
} */

db.ciudades.find( {Pais: {$eq:"Francia"} } ).pretty()
/* (BUSCAMOS LAS CIUDADES PERTENECIENTES AL PAIS FRANCIA)
{
        "_id" : ObjectId("5faad427ffe88a678d2194ca"),
        "Ciudad" : "Paris",
        "Pais" : "Francia",
        "Habitantes" : 2148000,
        "Monumentos" : [
                "Torre Eiffel",
                "Museo del Louvre",
                "Catedral de Notre Dame",
                "Opera Garnier"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 6,
                "Humedad" : 79
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d3"),
        "Ciudad" : "Marsella",
        "Pais" : "Francia",
        "Habitantes" : 861635,
        "Monumentos" : [
                "Opera de Marsella",
                "Palacio Longchamp",
                "Abadia de San Victor",
                "Castillo de If"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 90
        }
} */

db.ciudades.find( {"TiempoActual.Humedad": {$gt: 90} } ).pretty()
/* (BUSCAMOS LAS CIUDADES DONDE LA HUMEDAD SEA MAYOR A 90)
{
        "_id" : ObjectId("5faad427ffe88a678d2194ce"),
        "Ciudad" : "Munich",
        "Pais" : "Alemania",
        "Habitantes" : 1472000,
        "Monumentos" : [
                "Marienplatz",
                "Odeonplatz",
                "BMW Welt",
                "Olympiapark"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 6,
                "Humedad" : 98
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d1"),
        "Ciudad" : "Lisboa",
        "Pais" : "Portugal",
        "Habitantes" : 504718,
        "Monumentos" : [
                "Castillo de San Jorge",
                "Elevador de Santa Justa",
                "Torre de Belem",
                "Plaza del Comercio"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 94
        }
} */
db.ciudades.find( {"TiempoActual.Viento": {$gte: 13} } ).pretty()
/* (MUESTRA LAS CIUDADES DONDE EL VIENTO SEA MAYOR O IGUAL A 13)
{
        "_id" : ObjectId("5faad427ffe88a678d2194c9"),
        "Ciudad" : "Berlin",
        "Pais" : "Alemania",
        "Habitantes" : 3769000,
        "Monumentos" : [
                "Puerta de Brandeburgo",
                "Muro de Berlin",
                "Catedral de Berlin",
                "Checkpoint Charlie"
        ],
        "TiempoActual" : {
                "Temperatura" : 7,
                "Viento" : 13,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cf"),
        "Ciudad" : "Atenas",
        "Pais" : "Grecia",
        "Habitantes" : 664046,
        "Monumentos" : [
                "Delfos",
                "Acropolis",
                "Partenon",
                "Plaka"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 14,
                "Humedad" : 68
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d2"),
        "Ciudad" : "Moscu",
        "Pais" : "Rusia",
        "Habitantes" : 11920000,
        "Monumentos" : [
                "Kremlin",
                "Plaza Roja",
                "Catedral de San Basilio",
                "Catedral de Kazan"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 21,
                "Humedad" : 81
        }
    } */
    db.ciudades.find( { Habitantes: { $in: [  1472000,2148000 ] } } ).pretty()
    /* (MUESTRA LAS CIUDADES CON HABITANTES 1472000 O 2148000)
{
        "_id" : ObjectId("5faad427ffe88a678d2194ca"),
        "Ciudad" : "Paris",
        "Pais" : "Francia",
        "Habitantes" : 2148000,
        "Monumentos" : [
                "Torre Eiffel",
                "Museo del Louvre",
                "Catedral de Notre Dame",
                "Opera Garnier"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 6,
                "Humedad" : 79
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194ce"),
        "Ciudad" : "Munich",
        "Pais" : "Alemania",
        "Habitantes" : 1472000,
        "Monumentos" : [
                "Marienplatz",
                "Odeonplatz",
                "BMW Welt",
                "Olympiapark"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 6,
                "Humedad" : 98
        }
} */
db.ciudades.find({$and: [ {"TiempoActual.Temperatura": {$lt: 20}}, {"TiempoActual.Temperatura": {$gt: 14}}]  }).pretty()
/* (MUESTRA LAS CIUDADES DONDE LA TEMPERATURA SEA MAYOR DE 14 Y MENOR DE 20)
{
        "_id" : ObjectId("5faad427ffe88a678d2194ca"),
        "Ciudad" : "Paris",
        "Pais" : "Francia",
        "Habitantes" : 2148000,
        "Monumentos" : [
                "Torre Eiffel",
                "Museo del Louvre",
                "Catedral de Notre Dame",
                "Opera Garnier"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 6,
                "Humedad" : 79
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cf"),
        "Ciudad" : "Atenas",
        "Pais" : "Grecia",
        "Habitantes" : 664046,
        "Monumentos" : [
                "Delfos",
                "Acropolis",
                "Partenon",
                "Plaka"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 14,
                "Humedad" : 68
        }
} */
db.ciudades.find({$and: [ {"TiempoActual.Humedad": {$lte: 81}}, {"TiempoActual.Humedad": {$gte: 68}}]  }).pretty()
/* (MUESTRA LAS CIUDADES EN LAS QUE LA HUMEDAD ES < O = A 81 Y > O = A 68)
{
        "_id" : ObjectId("5faad427ffe88a678d2194ca"),
        "Ciudad" : "Paris",
        "Pais" : "Francia",
        "Habitantes" : 2148000,
        "Monumentos" : [
                "Torre Eiffel",
                "Museo del Louvre",
                "Catedral de Notre Dame",
                "Opera Garnier"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 6,
                "Humedad" : 79
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cb"),
        "Ciudad" : "Madrid",
        "Pais" : "España",
        "Habitantes" : 6642000,
        "Monumentos" : [
                "Puerta del Sol",
                "Plaza Mayor",
                "Puerta de Alcala",
                "Gran Via"
        ],
        "TiempoActual" : {
                "Temperatura" : 14,
                "Viento" : 3,
                "Humedad" : 77
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cf"),
        "Ciudad" : "Atenas",
        "Pais" : "Grecia",
        "Habitantes" : 664046,
        "Monumentos" : [
                "Delfos",
                "Acropolis",
                "Partenon",
                "Plaka"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 14,
                "Humedad" : 68
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d2"),
        "Ciudad" : "Moscu",
        "Pais" : "Rusia",
        "Habitantes" : 11920000,
        "Monumentos" : [
                "Kremlin",
                "Plaza Roja",
                "Catedral de San Basilio",
                "Catedral de Kazan"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 21,
                "Humedad" : 81
        }
} */
db.ciudades.find( { Habitantes: { $ne: 1950000  } } ).pretty()
/* (MUESTRA LAS CIUDADES QUE SU NUMERO DE HABITANTES NO ES 1950000)
{
        "_id" : ObjectId("5faad427ffe88a678d2194c9"),
        "Ciudad" : "Berlin",
        "Pais" : "Alemania",
        "Habitantes" : 3769000,
        "Monumentos" : [
                "Puerta de Brandeburgo",
                "Muro de Berlin",
                "Catedral de Berlin",
                "Checkpoint Charlie"
        ],
        "TiempoActual" : {
                "Temperatura" : 7,
                "Viento" : 13,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194ca"),
        "Ciudad" : "Paris",
        "Pais" : "Francia",
        "Habitantes" : 2148000,
        "Monumentos" : [
                "Torre Eiffel",
                "Museo del Louvre",
                "Catedral de Notre Dame",
                "Opera Garnier"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 6,
                "Humedad" : 79
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cb"),
        "Ciudad" : "Madrid",
        "Pais" : "España",
        "Habitantes" : 6642000,
        "Monumentos" : [
                "Puerta del Sol",
                "Plaza Mayor",
                "Puerta de Alcala",
                "Gran Via"
        ],
        "TiempoActual" : {
                "Temperatura" : 14,
                "Viento" : 3,
                "Humedad" : 77
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cd"),
        "Ciudad" : "Roma",
        "Pais" : "Italia",
        "Habitantes" : 2873000,
        "Monumentos" : [
                "El Coliseo",
                "Fontana de Trevi",
                "San Pedro Del Vaticano",
                "El Panteon"
        ],
        "TiempoActual" : {
                "Temperatura" : 11,
                "Viento" : 6,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194ce"),
        "Ciudad" : "Munich",
        "Pais" : "Alemania",
        "Habitantes" : 1472000,
        "Monumentos" : [
                "Marienplatz",
                "Odeonplatz",
                "BMW Welt",
                "Olympiapark"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 6,
                "Humedad" : 98
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cf"),
        "Ciudad" : "Atenas",
        "Pais" : "Grecia",
        "Habitantes" : 664046,
        "Monumentos" : [
                "Delfos",
                "Acropolis",
                "Partenon",
                "Plaka"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 14,
                "Humedad" : 68
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d0"),
        "Ciudad" : "Florencia",
        "Pais" : "Italia",
        "Habitantes" : 382258,
        "Monumentos" : [
                "Catedral de Santa Maria",
                "Ponte Vecchio",
                "David de Miguel Angel",
                "Galeria Uffizi"
        ],
        "TiempoActual" : {
                "Temperatura" : 8,
                "Viento" : 3,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d1"),
        "Ciudad" : "Lisboa",
        "Pais" : "Portugal",
        "Habitantes" : 504718,
        "Monumentos" : [
                "Castillo de San Jorge",
                "Elevador de Santa Justa",
                "Torre de Belem",
                "Plaza del Comercio"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 94
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d2"),
        "Ciudad" : "Moscu",
        "Pais" : "Rusia",
        "Habitantes" : 11920000,
        "Monumentos" : [
                "Kremlin",
                "Plaza Roja",
                "Catedral de San Basilio",
                "Catedral de Kazan"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 21,
                "Humedad" : 81
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d3"),
        "Ciudad" : "Marsella",
        "Pais" : "Francia",
        "Habitantes" : 861635,
        "Monumentos" : [
                "Opera de Marsella",
                "Palacio Longchamp",
                "Abadia de San Victor",
                "Castillo de If"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 90
        }
} */
db.ciudades.find( { $or: [ {"TiempoActual.Viento" : { $lt: 3 } }, { Habitantes: 382258 } ] } ).pretty()
/* (MUESTRA LAS CIUDADES DONDE EL VIENTO SEA MENOR QUE 3, EN EL CASO DE NO EXISTIR BUSCARA LAS CIUDADES CON NUMERO DE HABITANTES = 382258)
{
        "_id" : ObjectId("5faad427ffe88a678d2194d0"),
        "Ciudad" : "Florencia",
        "Pais" : "Italia",
        "Habitantes" : 382258,
        "Monumentos" : [
                "Catedral de Santa Maria",
                "Ponte Vecchio",
                "David de Miguel Angel",
                "Galeria Uffizi"
        ],
        "TiempoActual" : {
                "Temperatura" : 8,
                "Viento" : 3,
                "Humedad" : 90
        }
} */
db.ciudades.find( { Monumentos: { $nin: [ "Catedral de Santa Maria", "Puerta del Sol","Delfos","El Coliseo" ] } } ).pretty()
/* (MUESTRA LAS CIUDADES QUE NO CONTENGAN ESOS MONUMENTOS)
{
        "_id" : ObjectId("5faad427ffe88a678d2194c9"),
        "Ciudad" : "Berlin",
        "Pais" : "Alemania",
        "Habitantes" : 3769000,
        "Monumentos" : [
                "Puerta de Brandeburgo",
                "Muro de Berlin",
                "Catedral de Berlin",
                "Checkpoint Charlie"
        ],
        "TiempoActual" : {
                "Temperatura" : 7,
                "Viento" : 13,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194ca"),
        "Ciudad" : "Paris",
        "Pais" : "Francia",
        "Habitantes" : 2148000,
        "Monumentos" : [
                "Torre Eiffel",
                "Museo del Louvre",
                "Catedral de Notre Dame",
                "Opera Garnier"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 6,
                "Humedad" : 79
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cc"),
        "Ciudad" : "Sevilla",
        "Pais" : "España",
        "Habitantes" : 1950000,
        "Monumentos" : [
                "Catedral de Sevilla",
                "Plaza de España",
                "La Giralda",
                "Archivo de Indias"
        ],
        "TiempoActual" : {
                "Temperatura" : 20,
                "Viento" : 3,
                "Humedad" : 64
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194ce"),
        "Ciudad" : "Munich",
        "Pais" : "Alemania",
        "Habitantes" : 1472000,
        "Monumentos" : [
                "Marienplatz",
                "Odeonplatz",
                "BMW Welt",
                "Olympiapark"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 6,
                "Humedad" : 98
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d1"),
        "Ciudad" : "Lisboa",
        "Pais" : "Portugal",
        "Habitantes" : 504718,
        "Monumentos" : [
                "Castillo de San Jorge",
                "Elevador de Santa Justa",
                "Torre de Belem",
                "Plaza del Comercio"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 94
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d2"),
        "Ciudad" : "Moscu",
        "Pais" : "Rusia",
        "Habitantes" : 11920000,
        "Monumentos" : [
                "Kremlin",
                "Plaza Roja",
                "Catedral de San Basilio",
                "Catedral de Kazan"
        ],
        "TiempoActual" : {
                "Temperatura" : 3,
                "Viento" : 21,
                "Humedad" : 81
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d3"),
        "Ciudad" : "Marsella",
        "Pais" : "Francia",
        "Habitantes" : 861635,
        "Monumentos" : [
                "Opera de Marsella",
                "Palacio Longchamp",
                "Abadia de San Victor",
                "Castillo de If"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 90
        }
} */
db.ciudades.find( { Habitantes: { $not: { $gt: 861635 } } } ).pretty()
/* (MUESTRA LAS CIUDADES QUE NO TENGAN UN NUMERO DE HABITANTES MAYOR A 861635)
{
        "_id" : ObjectId("5faad427ffe88a678d2194cf"),
        "Ciudad" : "Atenas",
        "Pais" : "Grecia",
        "Habitantes" : 664046,
        "Monumentos" : [
                "Delfos",
                "Acropolis",
                "Partenon",
                "Plaka"
        ],
        "TiempoActual" : {
                "Temperatura" : 16,
                "Viento" : 14,
                "Humedad" : 68
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d0"),
        "Ciudad" : "Florencia",
        "Pais" : "Italia",
        "Habitantes" : 382258,
        "Monumentos" : [
                "Catedral de Santa Maria",
                "Ponte Vecchio",
                "David de Miguel Angel",
                "Galeria Uffizi"
        ],
        "TiempoActual" : {
                "Temperatura" : 8,
                "Viento" : 3,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d1"),
        "Ciudad" : "Lisboa",
        "Pais" : "Portugal",
        "Habitantes" : 504718,
        "Monumentos" : [
                "Castillo de San Jorge",
                "Elevador de Santa Justa",
                "Torre de Belem",
                "Plaza del Comercio"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 94
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d3"),
        "Ciudad" : "Marsella",
        "Pais" : "Francia",
        "Habitantes" : 861635,
        "Monumentos" : [
                "Opera de Marsella",
                "Palacio Longchamp",
                "Abadia de San Victor",
                "Castillo de If"
        ],
        "TiempoActual" : {
                "Temperatura" : 13,
                "Viento" : 3,
                "Humedad" : 90
        }
} */
db.ciudades.find( { Ciudad: { $regex: /a$/ } }  ).pretty()
/* (MUESTRA LAS CIUDADES TERMINADAS EN a)
{
        "_id" : ObjectId("5faad427ffe88a678d2194cc"),
        "Ciudad" : "Sevilla",
        "Pais" : "España",
        "Habitantes" : 1950000,
        "Monumentos" : [
                "Catedral de Sevilla",
                "Plaza de España",
                "La Giralda",
                "Archivo de Indias"
        ],
        "TiempoActual" : {
                "Temperatura" : 20,
                "Viento" : 3,
                "Humedad" : 64
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194cd"),
        "Ciudad" : "Roma",
        "Pais" : "Italia",
        "Habitantes" : 2873000,
        "Monumentos" : [
                "El Coliseo",
                "Fontana de Trevi",
                "San Pedro Del Vaticano",
                "El Panteon"
        ],
        "TiempoActual" : {
                "Temperatura" : 11,
                "Viento" : 6,
                "Humedad" : 90
        }
}
{
        "_id" : ObjectId("5faad427ffe88a678d2194d0"),
        "Ciudad" : "Florencia",
        "Pais" : "Italia",
        "Habitantes" : 382258,
        "Monumentos" : [
                "Catedral de Santa Maria",
                "Ponte Vecchio",
                "David de Miguel Angel",
                "Galeria Uffizi"
        ],
        "TiempoActual" : {
                "Temperatura" : 8,
                "Viento" : 3,
                "Humedad" : 90
        } */