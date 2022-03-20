import React, { Fragment, useState } from "react";
import "./Contenido.css";
import Cabecera from "./components/Cabecera/Cabecera";
import Tarjeta from "./components/Tarjetas/Tarjeta";
import data from "./data";

function Contenido() {
	const [filtrado, conjunto_filtrado] = useState([]);

	//borra la etiqueta que  seleccione en la busqueda
	const borrarEtiqueta = etiqueta => {
		const nuevaLista = filtrado.filter(e => e !== etiqueta);
		conjunto_filtrado(nuevaLista);
	};

	//limpia el panel de busqueda de todas las etiquetas filtradas
	const limpiar = () => {
		conjunto_filtrado([]);
	};

	//mediante una condicion de filtro agreaga el rol, nivel, herramienta y leguaje que hizo la busqueda
	const coleccion_lenguaje = ({ rol, nivel, herramientas, lenguajes }) => {
		const etiquetas = [rol, nivel];
		if (filtrado.length === 0) {
			return true;
		}

		if (herramientas) {
			etiquetas.push(...herramientas);
		}

		if (lenguajes) {
			etiquetas.push(...lenguajes);
		}

		return filtrado.every(filtro => etiquetas.includes(filtro));
	};

	//trae tdosos los datos de la busqueda de la data
	const DatosFiltrados = data.filter(coleccion_lenguaje);
	return (
		<Fragment>
			<Cabecera filtered={filtrado} deleteTag={borrarEtiqueta} clear={limpiar} />
			<div className="contenido">
				{DatosFiltrados.map(item => (
					<Tarjeta
						key={item.id}
						empresa={item.empresa}
						publicado={item.publicado}
						contrato={item.contrato}
						destacado={item.destacado}
						rol={item.rol}
						lenguajes={item.lenguajes}
						localidad={item.localidad}
						nivel={item.nivel}
						logo={item.logo}
						posicion={item.posicion}
						nuevo={item.nuevo}
						herramientas={item.herramientas}
						filtrado={filtrado}
						conjunto_filtrado={conjunto_filtrado}
					/>
				))}
			</div>
			
		</Fragment>
	);
}

export default Contenido;
