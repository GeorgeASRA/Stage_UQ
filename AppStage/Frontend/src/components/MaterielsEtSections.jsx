
export function MaterielsEtSections({cours}){

    return(
        <div className="row">
            <div className="col-12 text-center mb-3">
                <h5>Materiels</h5>
                <button className="btn btn-secondary btn-sm me-2">Ajouter Seccion</button>
                <button className="btn btn-secondary btn-sm">Ajouter Materiel</button>
            </div>
            {
                cours.map(section => {
                    return(
                        section.Sections.map((item, i) => {
                            return(
                                <div key={i} className="col-12">
                                    <div className="bg-warning mt-4">{item.titreSection}
                                    <button className="btn btn-secondary btn-sm me-2 ms-2">Ajouter Section</button>
                                    <button className="btn btn-secondary btn-sm">Ajouter Materiel</button></div>
                                    <div className="row">
                                        <div className="col-12">
                                        </div>
                                        <div className="col">
                                            {/* Materiels dans une section */}
                                            <div>{item.MaterielsSansSousSection.map((ss, i) => {
                                                    return(
                                                        <div className="row mt-3 ms-2" key={i}>
                                                            <div className="col-3">{ss.description}</div>
                                                            <div className="col text-center text-muted">{ss.dateAjoute.slice(0,10)}</div>
                                                            <div className="col text-center"><a href="...">{ss.lien}</a></div>
                                                            <div className="col text-center">{ss.typeMateriel}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            {/* Sections */}
                                            <div className="ms-3">{item.SousSections.map((ss, i) => {
                                                    return(
                                                        <div key={i}><hr/><b>{ss.titreSection} <button className="btn btn-secondary btn-sm ms-2">Ajouter materiel</button></b>
                                                            <div className="col ms-3">
                                                                {/* Materiels d'une section */}
                                                                <div>{ss.Materiels.map((m, i) => {
                                                                        return(
                                                                            <div className="row mt-3" key={i}>
                                                                                <div className="col-3">{m.description}</div>
                                                                                <div className="col text-center text-muted">{m.dateAjoute.slice(0,10)}</div>
                                                                                <div className="col text-center"><a href="...">{m.lien}</a></div>
                                                                                <div className="col text-center">{m.typeMateriel}</div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                })
            }
        </div>
    )
}