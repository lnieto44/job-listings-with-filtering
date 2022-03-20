import React, { Fragment } from "react";

import "./Cabecera.css";

export default function Cabecera({ filtered, EliminarEtiqueta, limpiar }) {
	return (
		<Fragment>
			<div className="cabecera"></div>
			{filtered.length > 0 && (
				<div className="Tablero">
					<div className="lista-etiquetas">
						{filtered
							? filtered.map((etiqueta, index) => (
									<button key={index} onClick={e => EliminarEtiqueta(e.target.innerHTML)} className="etiqueta">
										{etiqueta}
									</button>
							  ))
							: ""}
					</div>

					<p className="limpiar" onClick={() => limpiar()}>
						Clear
					</p>
				</div>
			)}
		</Fragment>
	);
}
