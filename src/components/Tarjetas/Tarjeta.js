import React from "react";
import "./Tarjeta.css";

export default function Tarjeta({
	empresa,  logo,  destacado, posicion, rol, nivel, publicado, contrato, localidad, lenguajes,
	herramientas, nuevo, filtrado, conjunto_filtrado
}) {
	return (
		//mostrar los datos que se van a visualizar en el panel principal almacenados en la data 
			<div className={destacado ? "cuerpo_tarjeta borde" : "cuerpo_tarjeta"}>
				<img src={logo} alt="logo" />
				<div className="caja">
					<div className="especificaciones">
						<h4 className="nombre">{empresa}</h4>
						<div>
							<span className={nuevo ? "new" : ""}>{nuevo ? "NEW!" : ""}</span>
							<span className={destacado ? "featured" : ""}>{destacado ? "FEATURED" : ""}</span>
						</div>
					</div>
					<span className="position">{posicion}</span>

					<div className="info-gris">
						<ul className="list">
							<li>{publicado}</li>
							<li>{contrato}</li>
							<li>{localidad}</li>
						</ul>
					</div>
				</div>
				<Filters
					filtrado={filtrado}
					conjunto_filtrado={conjunto_filtrado}
					rol={rol}
					lenguajes={lenguajes}
					nivel={nivel}
					herramientas={herramientas}
				/>
			</div>
		
	);
}

//carga las etiquetas en el panel pricipal qen el cual va a realizar la busqueda 
const Filters = ({ filtrado, conjunto_filtrado, rol, nivel, lenguajes, herramientas }) => {
	const sendTag = e => {
		const item = e.target.innerHTML;
		if (filtrado && !filtrado.includes(item)) {
			conjunto_filtrado([...filtrado, item]);
		}
		return;
	};
	const lenguaje = lenguajes
		? lenguajes.map((lenguajes, index) => {
				return (
					<button onClick={e => sendTag(e)} className="span lang" key={index}>
						{lenguajes}
					</button>
				);
		  })
		: "";

	const herramienta = herramientas
		? herramientas.map((herramientas, index) => {
				return (
					<button onClick={e => sendTag(e)} className="span stack" key={index}>
						{herramientas}
					</button>
				);
		  })
		: "";
	return (
		<>
			<div className="filtro">
				<button onClick={e => sendTag(e)} className="span role">
					{rol}
				</button>
				<button onClick={e => sendTag(e)} className="span level">
					{nivel}
				</button>
				{lenguaje}
				{herramienta}
			</div>
		</>
	);
};
