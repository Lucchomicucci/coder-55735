import { useEffect, useState } from "react";
import './App.css';

import { db } from "./firebase/client";

// collection es una funcion de firestore
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'


function App() {
  // Traer toda la data de una coleccion de firebase:
  const productsRef = collection(db, "products")

  const getProducts = async () => {
    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
    console.log(dataFiltrada)
  }

  // Traer toda la data de una coleccion de firebase con filtros:
  // const productsRefFilter = query(
  //     collection(db, "products"),
      // where("categoryId", "==", "pantalones"),
      // where("stock", "<", 10),
      // limit(10)
    // )
    

  // Para obtener un documento especifico:
  // const productRef = doc(db, "products", "RDIjhYFRE455GU9sKujt")
  // const getProduct = () => {
  //   getDoc(productRef).then((snapshot => {
  //     if(snapshot.exists()){
  //       // console.log(snapshot)
  //       console.log( { id: snapshot.id, ...snapshot.data() } )
  //     }
  //   }))
  // }
  
  useEffect(() => {
    // getProduct()
    getProducts()
    }, []);



  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}



export default App;
