import React from "react";
import { useState, useEffect } from "react";
import Base from "../img/base.jpg";

const Card = ({ greeting }) => {
  const carrito = [{ producto: "Base", precio: "$120", stock: 12 }];
  const [cantidad, setSumar] = useState(0);

  const [info, setInfo] = useState(null);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(carrito);
      }, 2000);
    });
    tarea
      .then((result) => {
        setInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div class="container">
        <div class="row mx-auto">
          <div class="col mx-auto">
            <div class="card mx-auto">
              <div class="card-body position-relative mx-auto ">
                <h5 class="card-title mx-auto">Producto</h5>
                <p class="card-text mx-auto">
                  {info &&
                    info.map((i, index) => (
                      <p key={i.index}>
                        <img
                          src={Base}
                          height="200"
                          width="150"
                          alt="..."
                        ></img>
                        <br />
                        {i.producto} <br />Precio: {i.precio} Stock: {i.stock}
                        <br />
                        <button
                          type="button"
                          class="btn btn-primary mx-auto"
                          onClick={() => {
                            if (cantidad >= 1) {
                              setSumar(cantidad - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <label>{cantidad}</label>{" "}
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            if (cantidad < i.stock) {
                              setSumar(cantidad + 1);
                            }
                          }}
                        >
                          +
                        </button>
                        <br />
                        <a href="#" class="btn btn-primary">
                          Agregar al carrito
                        </a>
                        <br />
                        <a
                          href="https://www.elle.com/es/belleza/cara-cuerpo/g795540/las-mejores-bases-de-maquillaje/"
                          class="btn btn-primary"
                        >
                          Ver detalle del producto
                        </a>
                      </p>
                    ))}
                </p>
              </div>
            </div>
          </div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
