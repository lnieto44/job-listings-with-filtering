import React, { Fragment } from "react";

import "./Cabecera.css";

export default function Cabecera({ filtered, deleteTag, limpiar }) {
	return (
		<Fragment>
			<div className="header"></div>
			{filtered.length > 0 && (
				<div className="board">
					<div className="tag-list">
						{filtered
							? filtered.map((tag, index) => (
									<button key={index} onClick={e => deleteTag(e.target.innerHTML)} className="tag">
										{tag}
									</button>
							  ))
							: ""}
					</div>

					<p className="clear" onClick={() => limpiar()}>
						Clear
					</p>
				</div>
			)}
		</Fragment>
	);
}
