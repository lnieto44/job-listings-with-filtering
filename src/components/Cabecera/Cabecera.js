import React, { Fragment } from "react";

import "./Cabecera.css";

export default function Cabecera({ filtered, deleteTag, clear }) {
	return (
		<Fragment>
			<div className="cabecera"></div>
			{filtered.length > 0 && (
				<div className="Tablero">
					<div className="lista-etiquetas">
						{filtered
							? filtered.map((etiqueta, index) => (
									<button key={index} onClick={e => deleteTag(e.target.innerHTML)} className="etiqueta">
										{etiqueta}
									</button>
							  ))
							: ""}
					</div>

					<p className="limpiar" onClick={() => clear()}>
						Clear
					</p>
				</div>
			)}
		</Fragment>
	);
}
