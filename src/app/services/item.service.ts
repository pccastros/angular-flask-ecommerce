import { Injectable } from '@angular/core';
import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  total = 0;
  quantity = 0;
  
  currentItems = [];

  items: Item[] = [
    {
      id:5827,
      name:"Solución  6 Pack Banano 200ml",
      description:"Nido",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1624917116823-42_Golden%20Start%20Banano.png?alt=media&token=43ed7721-ad60-42cb-8c83-088f009ff1e4",
      price:4.68,
      category:"Bebes",
      quantity: 0,
      selected: false

    },
   {
      id:5828,
      name:"Sal con Pimienta y Limón  Molinillo 65g",
      description:"Kasserola",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614115833173-27_molinillo%20sal%20con%20pimienta%20lim%C3%B3n%20.PNG?alt=media&token=2f406bd9-67a8-440d-be1f-c8973e7be43c",
      price:3.55,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5829,
      name:"Líquida Original Baby 400ml",
      description:"Johnson & Johnson",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620742773288-299_Crema%20l%C3%ADquida%20original%20Johnson%C2%B4s%20400ml.png?alt=media&token=b99882b1-5438-435a-afec-d977eb83a531",
      price:7.15,
      category:"Bebes",
      quantity: 0,
      selected: false

    },
   {
      id:5830,
      name:"Agua sin gas  3.8Lt",
      description:"Dasani",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-183_Dasani%20Agua%20Sin%20Gas%203.8%20Lt.PNG?alt=media&token=e5ffcd8a-13d4-4a23-ba43-163af78bc76d",
      price:1.40,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5831,
      name:"Cera fragancia Lavanda  1L",
      description:"Polwax",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1610809987150-167_POLWAX%20LAVANDA%201L.PNG?alt=media&token=01cb2cee-515e-4d5e-b867-291521614c41",
      price:3.43,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5832,
      name:"Te  Frutas Cítricas 20u",
      description:"Nature´s Heart",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-237_te%20de%20frutas%20c%C3%ADtricas%2020g.PNG?alt=media&token=bd1752b5-77c1-438d-9beb-f7d69bbc74b1",
      price:1.90,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5833,
      name:"Mostaza   550g",
      description:"Maggi",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619307220116-45_MOSTAZA%20MAGGI%C2%AE%20550G.PNG?alt=media&token=8612365c-3ec4-45fd-8408-7c0fcadd2583",
      price:2.34,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5834,
      name:"Chocolate Crunch  100g",
      description:"Nestlé",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-315_Chocolate%20Nestl%C3%A9%20Crunch%20100g.PNG?alt=media&token=3249f34d-e65e-4d96-b9a9-69683a831a46",
      price:1.97,
      category:"Snacks y Confites",
      quantity: 0,
      selected: false

    },
   {
      id:5835,
      name:"Limpia muebles Aerosol Natural 400ml",
      description:"Pride",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620680934665-58_Limpia%20muebles%20en%20aerosol%20Natural%20Pride%0400cc.png?alt=media&token=8ea99171-03a3-46a7-a4e7-1b55850ceb9f",
      price:4.60,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5836,
      name:"Shampoo Hierbas Silvestres Detox 900ml",
      description:"Ballerina",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1623780270693-306_Shampoo%20Ballerina%20Hierbas%20Silvestres%20900ml.png?alt=media&token=f4732bf8-4840-4dc4-80e3-f17dd59d2398",
      price:3.15,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5837,
      name:"Agua sin gas  600ml",
      description:"Dasani",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-187_Dasani%20Agua%20Sin%20Gas%20600%20Ml.PNG?alt=media&token=a4f77044-2e9f-4281-ac81-874afddc0c29",
      price:0.40,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5838,
      name:"Detergente Antibacterial  1.9Kg",
      description:"Deja",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1618841487556-243_Detergente%20en%20polvo%20Antibacterial%20Deja%201%2C9%20kg.png?alt=media&token=d8480167-8609-450e-98da-0ea2846b9f03",
      price:5.85,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5839,
      name:"Polvo  Frutilla 200g",
      description:"Nesquik",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619307220116-221_nesquik%20polvo%20fresa%20200g.PNG?alt=media&token=d3a97018-5d8a-48dc-b9d5-9135296dc17c",
      price:1.82,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5840,
      name:"Mostaza   330g",
      description:"ILE",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1613576204313-207_Mostaza%20330g.PNG?alt=media&token=c9347561-d000-433c-8da2-fd87c4f1ff43",
      price:1.50,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5841,
      name:"Leche Pack 2u Caffe Lato Capuccino 285ml c/u",
      description:"Toni",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619272770538-155_PACK%20LECHE%20TONI%20CAFFE%20LATO%20CAPUCCINO%20285ML%202%20UNIDADES.png?alt=media&token=c2e81c40-c0da-4973-8c8c-734959cea53b",
      price:2.86,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5842,
      name:"Galleta  Chocolate 340g",
      description:"Nestlé",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-459_Nestl%C3%A9%20Galleta%20Chocolate%20340%20Gr.PNG?alt=media&token=bf8e6196-7a09-4b79-b826-7f94faf322eb",
      price:1.95,
      category:"Panadería y Galletería",
      quantity: 0,
      selected: false

    },
   {
      id:5843,
      name:"Lechuga   Romana Unidad",
      description:"Capp",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619708686759-5_Lechuga%20Romana.PNG?alt=media&token=9fa287f5-dc61-47b5-a61c-9d556c62d679",
      price:0.66,
      category:"Frutas y Vegetales",
      quantity: 0,
      selected: false

    },
   {
      id:5844,
      name:"Lomo Lomo Fino Filete de 500g",
      description:"Celicana",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1618841487556-63_Filetes%20de%20lomo%20fino%20500g.png?alt=media&token=19feb458-cf39-4c3b-955f-649be48d6697",
      price:10.99,
      category:"Cárnicos y Pollos",
      quantity: 0,
      selected: false

    },
   {
      id:5845,
      name:"Cerveza 6 pack Light en Lata 355ml",
      description:"Pilsener",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617668586703-32_Cerveza%20Pilsener%20Light%20Lata%20Pack%206%20x%20355ml.png?alt=media&token=63fb446e-699e-4f2f-9e44-de7ecc081ba2",
      price:5.75,
      category:"Cervezas y Licores",
      quantity: 0,
      selected: false

    },
   {
      id:5846,
      name:"Champiñón Entero  400g",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1609945306169-124_Champi%C3%B1ones%20Enteros%20400g%20Snob.PNG?alt=media&token=8b656590-0220-4f15-8f26-88a986d59902",
      price:4.22,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5847,
      name:"Crema Dental Natural Extracts Detox  90ml",
      description:"Colgate",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620742773288-112_Crema%20Dental%20Natural%20Extracts%20Detox%20Colgate%2090ml.png?alt=media&token=f19011a0-26fd-42f7-8e72-3667ebf59f43",
      price:2.49,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5848,
      name:"Detergente Líquido Floral  1.9L",
      description:"Deja",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1618841487556-351_Detergente%20l%C3%ADquido%20Floral%20con%20suavizante%201%2C9l.png?alt=media&token=885b9842-166c-411f-bedf-ffc710ac1b13",
      price:6.50,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5849,
      name:"Cúrcuma Molida  50g",
      description:"ILE",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1613576204313-158_C%C3%BArcuma%2050g.PNG?alt=media&token=157a5b9b-ed4e-403a-b989-93c299309f40",
      price:0.45,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5850,
      name:"Mermelada de Mora  240g",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1609945306169-422_Sachet%20Mermelada%20Snob%20Mora%20240%20g.PNG?alt=media&token=35d5ab2b-7119-44e0-a4a8-aec42df9b8ff",
      price:1.32,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5851,
      name:"Lavavajillas  Uva 235g",
      description:"LAVA",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-538_Crema%20Lavavajillas%20Uva%20Lava%20235g.png?alt=media&token=600880c3-ad06-4e54-8c8e-ca1d6a2d643a",
      price:0.93,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5852,
      name:"Agua sin gas  1200ml",
      description:"Dasani",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1613537430547-11_Dasani%20Agua%20Sin%20Gas%201.2%20Lt.PNG?alt=media&token=8b37a632-a671-454a-ad53-7c4cd58a8b5c",
      price:0.60,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5853,
      name:"Queso Crema Pack 6u  50g c/U",
      description:"Toni",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619272770538-281_Queso%20Crema%20Toni%206%20pack%20de%2050%20Gr.png?alt=media&token=699fad1e-ef96-4dc0-981e-5faffee1b5b8",
      price:3.06,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5854,
      name:"Paño Absorbente Multiuso 3u",
      description:"Estrella",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-700_Pa%C3%B1os%20absorbentes%20Multiuso%20Estrella%203u.png?alt=media&token=d1a75bd0-0f8b-4c13-8dab-2a069453e138",
      price:2.66,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5855,
      name:"Cebollitas   250g",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1609945306169-225_Cebollitas%20Vinagre%20Doypack%20250g%20Snob.PNG?alt=media&token=2563b346-312b-4e49-9dd4-df916ec69ca7",
      price:3.75,
      category:"Embutids y Delicatessen",
      quantity: 0,
      selected: false

    },
   {
      id:5856,
      name:"Salchicha Hot Dog Super 1Kg",
      description:"Juris",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617831623967-163_SALCHICHA%20SUPER%20HOT%20DOG%20JURIS%20PREMIUM%201000G.png?alt=media&token=e4b667ab-f8dc-445b-96fd-df93fc59b6e0",
      price:10.00,
      category:"Embutids y Delicatessen",
      quantity: 0,
      selected: false

    },
   {
      id:5857,
      name:"Energizante   600ml",
      description:"220V",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1612906044547-35_energizante%20220v%20600ml.jpg?alt=media&token=85683408-51e2-4824-8552-8c29e249dbaa",
      price:0.95,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5858,
      name:"Queso Mozzarella  200g",
      description:"Kiosko",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617386430607-6_Mozzarella%20%20200g%20Kiosko.png?alt=media&token=3b80e402-ec31-4470-b121-3f4bc1c4da83",
      price:2.40,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5859,
      name:"Queso Cheddar Lonjas 200g",
      description:"Kiosko",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617386430607-37_Cheddar%20Lonjas%20200g%20Kiosko.png?alt=media&token=fd80618d-d2fb-4465-bc48-2da3bd4e763c",
      price:3.25,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5860,
      name:"Aceitunas Rellenas  240g",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1609945306169-234_Aceituna%20Rellenas%20240g%20Snob.PNG?alt=media&token=ab5fbae6-fc3f-48d3-b112-931035d8d306",
      price:3.86,
      category:"Embutids y Delicatessen",
      quantity: 0,
      selected: false

    },
   {
      id:5861,
      name:"Cepillo Dental Ultra Kid 2+ Rojo 1u",
      description:"Colgate",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620742773288-60_Cepillo%20Dental%20Ultra%20Kid%20%2B2%20Colgate%20Rojo%201u.png?alt=media&token=518a4453-d200-4b97-8e4a-291ca81bea43",
      price:0.70,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5862,
      name:"Vinagre  Blanco 1L",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614294914416-79_Vinagre%20Blanco%201000cc%20Snob.PNG?alt=media&token=223e2494-92ef-498d-8c78-7bb87df845dc",
      price:1.93,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5864,
      name:"Nutella Frasco  350g",
      description:"Ferrero",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620510503264-264_Crema%20Chocolate%20Nutella%20350g.png?alt=media&token=0bea733b-7c90-4665-b29c-1f84f996c61d",
      price:7.50,
      category:"Snacks y Confites",
      quantity: 0,
      selected: false

    },
   {
      id:5863,
      name:"Infusión de Horchata con Limón   37.5g",
      description:"ILE",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1613576204313-234_TE%20HORCHATA%20CON%20LIMON.PNG?alt=media&token=83ab1d8a-f10e-4fcf-8775-b9e437004611",
      price:1.35,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5865,
      name:"Jabón Limón Pack 2 unidades 230g",
      description:"Top Combi",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1604353849082-35_Jab%C3%B3n%20Lim%C3%B3n%20230gr%20Top%20Combi%20x2.PNG?alt=media&token=476d2502-8538-4fd3-a89d-ac943bd37fc0",
      price:1.09,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5866,
      name:"Gaseosa Sin Azúcar Lima Limón 1.35L",
      description:"Sprite",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619214186775-7_Sprite%0Botella%201.75%20Lt.PNG?alt=media&token=dbd7d719-c46d-4715-9c17-22c8a03c1b2c",
      price:1.06,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5867,
      name:"Salsa de Tomate   550g",
      description:"Maggi",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619307220116-67_SALSA%20DE%20TOMATE%20MAGGI%C2%AE%20550G.PNG?alt=media&token=9c6afc1f-ac8f-4b0b-b1a0-829ff9ed62c8",
      price:2.15,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5868,
      name:"Detergente Rosas  400g",
      description:"Surf",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1618841487556-384_Detergente%20en%20polvo%20Rosas%20Surf%20400g.png?alt=media&token=d9c9e672-e025-45c8-b91d-00c5a09fbc0b",
      price:1.00,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5869,
      name:"Polvo  Chocolate 150g",
      description:"Ricacao",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619307220116-225_Ricacao%20Chocolate%20150g.PNG?alt=media&token=451223aa-9d4f-4cf2-828c-a184db1fa791",
      price:1.00,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5870,
      name:"Vinagre con Especias Blanco 500cc",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614294914416-83_Vinagre%20Blanco%20Especias%20500cc%20Snob.PNG?alt=media&token=09e28dce-fdf5-4995-b2c7-9d364dcc0a6c",
      price:1.80,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5871,
      name:"Shampoo Multivitaminas & Sábila  550ml",
      description:"Savital",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1623780270693-269_Shampoo%20Savital%20Nutrici%C3%B3n%20Avanzada%20Multivitaminas%20y%20S%C3%A1bila%20550ml.png?alt=media&token=5b04fe8f-2eb3-440c-976f-b6d20d412c4e",
      price:5.20,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5872,
      name:"Duraznos Mitades  400g",
      description:"Facundo",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1621639191069-219_Facundo%20Durazno%20Mitades%20Alm%C3%ADbar%20Abre%20F%C3%A1cil%20400%20Gr.PNG?alt=media&token=d3166744-fb7b-430f-8ebc-c0072d20e146",
      price:2.56,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5873,
      name:"Comida para perros Premium Adultos 450g",
      description:"CANI",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-3_Alimento%20Prime%0para%20perros%20Adulto%20Canimentos%20450g.png?alt=media&token=cfda396a-1fdd-4469-8353-5811efc22f11",
      price:0.80,
      category:"Mascotas",
      quantity: 0,
      selected: false

    },
   {
      id:5874,
      name:"Café Gold Blend  100g",
      description:"Nescafé",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1624632600738-19_Nescafe%20Gold%20Blend%20100g.PNG?alt=media&token=a21b075c-515a-4b96-84dd-2d879eafb49d",
      price:5.85,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5875,
      name:"Yogurt Deslactosado Trozos Frutos Rojos 950ml",
      description:"Finesse",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617467056953-290_Yogurt%20Deslactosado%20Trozos%20Frutos%20Rojos%20Finesse%20Alpina%20950g.png?alt=media&token=b452d887-85ac-4b7b-8381-897283103347",
      price:3.30,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5876,
      name:"Salchicha Pollo  300g",
      description:"Juris",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617831623967-139_SALCHICHA%20DE%20POLLO%20x12%20JURIS%20300G.png?alt=media&token=db497a87-c653-4af9-87f2-811636853a8c",
      price:2.67,
      category:"Embutids y Delicatessen",
      quantity: 0,
      selected: false

    },
   {
      id:5877,
      name:"Pañal de Adultos  Talla M 20u",
      description:"Prudential",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1613576204313-282_PRUDENTIAL%20TOTAL%20PA%C3%91AL%20ADULTO%20M%2020u.png?alt=media&token=b271fe5e-6746-42e4-b781-5b65e05e8c53",
      price:23.80,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5880,
      name:"Chorizo Parrillero  300g",
      description:"Juris",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617831623967-174_CHORIZO%20PARRILLERO%20JURIS%20300G.png?alt=media&token=6d814efe-3ccf-4100-bbf2-1826c0ccddcb",
      price:3.95,
      category:"Embutids y Delicatessen",
      quantity: 0,
      selected: false

    },
   {
      id:5878,
      name:"Crema S Humectante 50g",
      description:"Ponds",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614179001760-355_CREMA%20S%20PONDS%20HUMECTACION%2050g.png?alt=media&token=8168e51a-c1ee-4f3c-83ee-80583cb11255",
      price:2.35,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5879,
      name:"Lavavajillas  Avena 1Kg",
      description:"LAVA",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-581_Crema%20Lavavajillas%20Avena%20Lava%201000g.png?alt=media&token=560340d6-84ae-40db-a934-d7cd7d415e3d",
      price:2.90,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5881,
      name:"Leche  Descremdada1L",
      description:"Vita",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-115_Leche%20descremada%0Vita%20Tetrapack%201L.png?alt=media&token=53877802-8af5-48f7-9a47-cca87d4101b4",
      price:1.32,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5882,
      name:"Granola Crocante Chocolate 250g",
      description:"Nature's Heart",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1624632600738-76_NH%20Granola%20Chocolate%20250gr.png?alt=media&token=0fc5b0db-ae52-462d-aa17-7c92a169fa76",
      price:1.99,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5883,
      name:"Crema para Peinar Rizos Definidos  300ml",
      description:"Sedal",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614179001760-79_CREMA%20PARA%20PEINAR%20RIZOS%20DEFINIDOS%20300ml.png?alt=media&token=5f56b087-952d-4d6c-9c43-8ce1c0cee1aa",
      price:4.50,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5885,
      name:"Martini Rosso  750ml",
      description:"Vermouth",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617128136331-107_Vermouth%20Martini%20Rosso%20750%20ml.PNG?alt=media&token=874182d9-2996-42c6-b689-303571e3f3f4",
      price:18.25,
      category:"Cervezas y Licores",
      quantity: 0,
      selected: false

    },
   {
      id:5887,
      name:"Acondicionador Jovencitos Baby 200ml",
      description:"Johnson & Johnson",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620742773288-274_Colonia%20Jovencitos%20Johnson%C2%B4s%20200ml.png?alt=media&token=785e94d3-d4cd-474f-910b-5fb5a1c2994c",
      price:7.25,
      category:"Bebes",
      quantity: 0,
      selected: false

    },
   {
      id:5884,
      name:"Crema Rejuveness Anti edad 50g",
      description:"Ponds",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614179001760-359_CREMA%20REJUVENESS%20ANTIEDAD%20AVANZADA%20PONDS%20%2050g.png?alt=media&token=260f87bb-fb0e-48bf-9643-d214ee0a9253",
      price:2.35,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5886,
      name:"Infusión de Anís Común  43g",
      description:"ILE",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1613576204313-258_TE%20ANIS%20COMUN.PNG?alt=media&token=389ed36f-be64-48c1-8c6d-473088c20c0f",
      price:1.15,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5888,
      name:"Salsa de Tomate   350g",
      description:"Maggi",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619307220116-71_SALSA%20DE%20TOMATE%20MAGGI%20DOYPACK%20350%20G.PNG?alt=media&token=01b152b2-c8e9-4a22-930e-7918aead1a54",
      price:1.49,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5889,
      name:"Mermelada de Frutilla  290g",
      description:"Snob",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1609945306169-394_Mermelada%20Frutilla%20290g%20Snob.PNG?alt=media&token=a9fa4130-5ea1-4fce-b60a-99a8dfb43c28",
      price:1.75,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5890,
      name:"Cerveza 6 pack Roja Premium 330ml",
      description:"Club",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617668586703-7_Cerveza%20Club%20Premium%20Roja%20Botella%20Pack%206%20x%20330ml.png?alt=media&token=6d628c8c-c4c8-4bc0-8b1a-88aa7559f9f0",
      price:8.80,
      category:"Cervezas y Licores",
      quantity: 0,
      selected: false

    },
   {
      id:5891,
      name:"Pastilla Desinfectante  Eucalipto 90g",
      description:"Tips",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620138743645-150_Pastilla%20desinfectante%20para%20ba%C3%B1o%20Eucalipto%20Tips%201u.png?alt=media&token=715db65a-082f-4f8f-9e70-7cd6ac8397e1",
      price:1.05,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5892,
      name:"Desodorante Roll On Femenino  Bamboo 50ml",
      description:"Rexona",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1614179001760-126_Desodorante%20Mujer%20Roll%20On%20Bamboo%2050ml.png?alt=media&token=308413c6-d619-499c-9242-816a4b1e6f8a",
      price:2.66,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5893,
      name:"Desinfectante  Floral 1L",
      description:"Tips",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-353_Desinfectante%20Antibacterial%20Floral%20Tips%20240ml.png?alt=media&token=c2780a67-5097-42a2-acd6-2eea99c52eb8",
      price:2.15,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5895,
      name:"Galleta Sal   135g",
      description:"Nestlé",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-463_Nestl%C3%A9%20Galleta%20Sal%20Taco%20135%20Gr.PNG?alt=media&token=f9648de2-f8c2-409a-a445-e3c6d1824aaf",
      price:0.57,
      category:"Panadería y Galletería",
      quantity: 0,
      selected: false

    },
   {
      id:5894,
      name:"Esponja Mixta Salva Uñas 1u",
      description:"Estrella",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-729_Esponja%20Salva%20u%C3%B1as%20Azul%20Estrella%201u.png?alt=media&token=1bedd6a6-5355-4c6d-9052-f177c32eb61d",
      price:0.60,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5896,
      name:"Pasta de Tomate  la Rojita 227g",
      description:"Maggi",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619307220116-59_pasta%20de%20tomate%20la%20rojita%20200g.PNG?alt=media&token=a6d909fb-a3a5-46d7-b473-70094076ff80",
      price:1.75,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5897,
      name:"Canguil para Microondas Bajo en Grasas 99g",
      description:"Kikos",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1612906044547-72_CANGUIL%20MICROONDAS%20NATURAL%20BAJO%20EN%20GRASAS%20KIKOS%2099G.jpg?alt=media&token=48dff1af-f7e2-4b31-b2cf-3c510f5796d3",
      price:1.30,
      category:"Snacks y Confites",
      quantity: 0,
      selected: false

    },
   {
      id:5898,
      name:"Whisky  12 años  750ml",
      description:"Chivas Regal",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1610462566887-460_Chivas%20Regal%20Whisky%20750%20Ml.PNG?alt=media&token=507363e5-6f3a-4e25-bef0-4bac6262092c",
      price:55.88,
      category:"Cervezas y Licores",
      quantity: 0,
      selected: false

    },
   {
      id:5899,
      name:"Protector Íntimo Cuidado Diario  15u",
      description:"Kotex",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1612283375419-100_PROTECTORES%20KOTEX%20CUIDADO%20DIARIO%2015U.jfif?alt=media&token=1b6534e7-e261-4301-a1a0-42078e64b636",
      price:1.63,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5900,
      name:"Chocolate Tango Clásico 700g",
      description:"Nestlé",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-325_tango%20clasico%20negro%20700g.PNG?alt=media&token=9939a090-df0a-4438-9193-4565d6902e86",
      price:8.40,
      category:"Snacks y Confites",
      quantity: 0,
      selected: false

    },
   {
      id:5901,
      name:"Papel Higénico Deluxe  6u",
      description:"Hada",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620680934665-10_Papel%20Higi%C3%A9nico%20Econ%C3%B3mico%20Hada%206u.png?alt=media&token=61f7f1e7-4140-4404-87d4-3d057d48f5ca",
      price:1.25,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5902,
      name:"Planche Fácil Repuesto 500ml",
      description:"Synteko",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1610809987150-203_PLANCHE%20FACIL%20500ML.PNG?alt=media&token=a1301c82-fb9e-43f2-b0e6-9c6dc64d7c8e",
      price:1.99,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5903,
      name:"Aromatizador Manzana Canela Automático Repuesto 270ml",
      description:"Glade",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620400883359-177_Aromatizador%20repuesto%20Manzana%20Canela%20Glade%20270ml.png?alt=media&token=ad66a790-08a8-4018-b1e0-9b7e6e297e85",
      price:10.25,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5904,
      name:"Lavavajillas  Verde 450g",
      description:"LAVA",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619707445867-505_Crema%20Lavavajillas%20Verde%20Lava%20450g.png?alt=media&token=3008dca5-c420-4881-adee-4c6f84961459",
      price:1.63,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5905,
      name:"Fideo Tallarín  400g",
      description:"Cayambe",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1616525556233-5_Fideo%20Tallar%C3%ADn%20400%20gramos.png?alt=media&token=c5f8af4f-c116-4402-83d8-a8bf9d5b350b",
      price:0.95,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5906,
      name:"Papel Higiénico Acolchamax  Grande 4u",
      description:"Familia",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1615908399251-122_PH%20FAMILIA%20ACOLCHA%20MAX%20GRANDE%204%20U.png?alt=media&token=55a606f8-8616-4e76-b81d-24f1974f7aac",
      price:2.67,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5907,
      name:"Leche Saborizada Frutilla 1L",
      description:"Toni",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619272770538-227_LECHE%20SABORIZADA%20TONI%201L%20FRUTILLA.png?alt=media&token=05f2fcb5-0863-487f-9f79-daa694337642",
      price:2.10,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5908,
      name:"Queso Mozzarella Lonjas para pizza 150g",
      description:"Kiosko",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617386430607-2_Mozzarella%20%20Pizza%20Lonjas%20150g%20Kiosko.png?alt=media&token=bf2f7097-cbd8-4fbd-b6ba-097452b643b0",
      price:2.30,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5909,
      name:"Desinfectante Lavanda  750ml",
      description:"Sansón",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1610809987150-138_DESINFECTANTE%20SANSON%20LAVANDA%20750ML.PNG?alt=media&token=1b9e0162-dee1-4fc9-8af2-3a1edf112de8",
      price:1.78,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5910,
      name:"Te Negro   550ml",
      description:"Fuze Tea",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-19_Fuze%20Tea%20Te%20Negro%20Lim%C3%B3n%20550%20Ml.PNG?alt=media&token=5a2cd20e-05d1-41f0-a3b3-c862c2b23e51",
      price:0.62,
      category:"Bebidas",
      quantity: 0,
      selected: false

    },
   {
      id:5911,
      name:"Galleta Wafer  Fresa 175g",
      description:"Amor",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619027573304-521_Amor%20Galleta%20Waffer%20Fresa%20175%20Gr.PNG?alt=media&token=2e58807a-af2b-44aa-b2ed-e1c3de175396",
      price:1.39,
      category:"Panadería y Galletería",
      quantity: 0,
      selected: false

    },
   {
      id:5912,
      name:"Fréjol con Chili  425g",
      description:"Facundo",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1621639191069-227_Facundo%20Fr%C3%A9jol%20Con%20Chili%20425%20Gr.PNG?alt=media&token=7751781d-f3d6-4d3a-8aa5-6a3ef9efabb5",
      price:2.42,
      category:"Abarrotes",
      quantity: 0,
      selected: false

    },
   {
      id:5913,
      name:"Ambientador Carro Nuevo Auto 7ml",
      description:"Glade",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620400883359-48_Ambientador%20de%20Auto%20Carro%20Nuevo%20Glade%207ml.png?alt=media&token=9f6e663f-2557-4c21-acf1-7c23611c8c0e",
      price:8.98,
      category:"Hogar y Limpieza",
      quantity: 0,
      selected: false

    },
   {
      id:5914,
      name:"Crema Dental Triple Acción Pack x 3 75ml",
      description:"Colgate",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1620742773288-154_Crema%20Dental%20Triple%20Acci%C3%B3n%20Colgate%20Pack%20x3%20de%2075ml.png?alt=media&token=192c0a36-ef29-4aaa-bd93-63324396a192",
      price:3.55,
      category:"Cuidado Personal",
      quantity: 0,
      selected: false

    },
   {
      id:5915,
      name:"Whisky Classic Black  1L",
      description:"Label 5",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1617128136331-125_Label%205%20Blended%20Scotch%20Whisky%20700%20Ml.PNG?alt=media&token=96c7005a-2cdf-424d-b598-841b2fbfc1f7",
      price:14.65,
      category:"Cervezas y Licores",
      quantity: 0,
      selected: false

    },
   {
      id:5916,
      name:"Yogurt Leche Descremada ainilla 190ml",
      description:"Toni",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1619272770538-311_YOGURT%20BEBIBLE%20TONI%20100%20VAINILLA%20190ML.png?alt=media&token=aea0a420-84c7-4c9c-8668-78c104e4ed5a",
      price:0.76,
      category:"Lácteos y Huevos",
      quantity: 0,
      selected: false

    },
   {
      id:5918,
      name:"Leche Fórmula láctea  135g",
      description:"Nestógeno Nestlé",
      image:"https://firebasestorage.googleapis.com/v0/b/la-canasta-4ffb8.appspot.com/o/products%2Frc-upload-1616538739858-43_FORMULA%20LACTEA%20NESTOGENO%20DE%200A12%20MESES%20135G.PNG?alt=media&token=0e953703-2eb2-41e5-9268-10999e7a9a3a",
      price:2.90,
      category:"Bebes",
      quantity: 0,
      selected: false

    },  
  
  ]

  constructor() { }

  getItems(){
    return this.items;
  }

  getCurrentItems(){
    return this.currentItems;
  }

  getCategories(){
    let categories = Array.from(new Set(this.items.map(item => item.category)));
    return categories
  }

  onSelect(item:Item){
    item.selected = !item.selected;
    console.log("Total")
   
    if (item.selected){
      item.quantity = 1;
    }else{
      item.quantity = 0;
    }

    this.getTotal();
  }

  onSelectCategory(category){
    this.currentItems = this.items.filter(item => item.category == category)
  }

  addQuantity(item:Item){
    item.quantity += 1;
  }

  removeQuantity(item:Item){
    if (item.quantity > 0){
      item.quantity -= 1;

      if (item.quantity == 0){
        this.onSelect(item);
      }
    }
  }

  getTotal(){
    this.total = this.items
                  .filter(item => item.selected == true)
                  .map(item => item.price * item.quantity)
                  .reduce( (acc, item) => acc += item, 0)
    
    console.log(this.items
      .filter(item => item.selected == true)
      .map(item => item.quantity)
      .reduce( (acc, item) => acc += item, 0)
      )
    console.log("---------------------------")
    return this.total;
  }

  /*
  getQuantity(){
    this.quantity = this.items
                    .filter(item => item.selected == true)
                    .map(item => item.quantity)
                    .reduce( (acc, item) => acc += item, 0)
    
    console.log(this.quantity)
    return this.quantity;
  }
  */
  getCategoryItems(category){
    this.currentItems = this.items.filter(item => item.category == category)
  }

}
