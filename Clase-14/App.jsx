import { useEffect, useState } from "react";
import './App.css';

import { db } from "./firebase/client";

// collection es una funcion de firestore
import {getDocs, collection, query, where, limit, getDoc, doc, addDoc, updateDoc, writeBatch } from 'firebase/firestore'


function App() {
  const [products, setProducts] = useState([])
  // Traer toda la data de una coleccion de firebase:
  const productsRef = collection(db, "products")

  const getProducts = async () => {
    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
    console.log(dataFiltrada)
    setProducts(dataFiltrada)
  }

  // Para obtener un documento especifico:
  const productRef = doc(db, "products", "RDIjhYFRE455GU9sKujt")
  const getProduct = () => {
    getDoc(productRef).then((snapshot => {
      if(snapshot.exists()){
        // console.log(snapshot)
        console.log( { id: snapshot.id, ...snapshot.data() } )
      }
    }))
  }

  // Crear un DOC y una collection (En el caso de que no exista)
  const createOrder = () => {
    const order = {
      
      buyer: {name: "Abel", phone: "1155889966", email: "abel@abel.com"},
      items: products[1],
      // items: cart
      total: products[1].price
      // total: totalCart
    }

    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, order).then(({id}) => console.log(id))
  }

  // Hacer un update de un DOC
  const updateOrder = (id) => {
    const orderToUpdate = doc(db, "orders", id)
    updateDoc(orderToUpdate, { total: 99}) // Segundo parametro: Los campos que quiero updatear
  }

  // Distintas Operaciones en una sola func
  const updateMultipleDocs = async () => {
    const batch = writeBatch(db);

    // Setea nuevos campos a un doc. OJO
    const orderRef = doc(db, "orders", "IfdlpJ6jp6897V3wZJmF");
    batch.set(orderRef, {stockOferta: 20});

    // Actualiza uno o varios campos de un doc.
    const productRef = doc(db, "products", "uYfqWZ1BtyCGjNs3B54l");
    batch.update(productRef, {"stock": 99});

    // Borra un doc
    const deleteProdRef = doc(db, "products", "dSPGco0xb3BOyOCSLhAz");
    batch.delete(deleteProdRef);

    // Commit del batch
    await batch.commit();
  }
  
  useEffect(() => {
    // getProduct()
    getProducts()
    }, []);



  return (
    <div className="App">
      <header className="App-header">
        <div className="card-container">
          {products?.map(pr => {
            return(
              <div className="card" key={pr.id}>
                <p>{pr.title}</p>
                <p>{pr.description}</p>
                <p>{pr.price}</p>
              </div>
            )
          })}
      </div>
      <div>
      <button className="btn" onClick={createOrder}>Terminar Compra</button>
      <button className="btn" onClick={() => updateOrder('IfdlpJ6jp6897V3wZJmF')}>Editar orden</button>
      <button className="btn" onClick={updateMultipleDocs}>Editar multiples docs</button>
      </div>
      </header>
    </div>
  );
}



export default App;
