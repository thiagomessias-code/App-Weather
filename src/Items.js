import React from "react";
import Api from "./Api";

export function Items()  {
    return (
        <div>
            if (location === false) {
        return (
            <Fragment>
                Você precisa habilitar a localização no browser.
            </Fragment>
        )
    }if (weather === false) {
      return (
        <Fragment>
          Carregando o clima...
        </Fragment>
      )
    } 
     else {
        return (
            <Fragment >
                <div className={styles.weather}>
                    <h3>
                        Clima nas suas Coordenadas ({weather['weather'][0]['description']})
                    </h3>
                    <hr/>
                    <ul>
                        <li>Temperatura atual {weather['main']['temp']}</li>
                        <li>Temperatura Maxima {weather['main']['temp_max']}</li>
                        <li>Temperatura Minima {weather['main']['temp_min']}</li>
                        <li>Pressão: {weather['main']['pressure']}</li>
                        <li>Unidade {weather['main']['humidity']}</li>
                    </ul>
                </div>

            </Fragment>
        );
   
    }
        </div>
    )
}