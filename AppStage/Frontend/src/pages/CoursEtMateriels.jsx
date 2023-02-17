import { useState, useEffect } from "react"
import axios from "axios"

export function CoursEtMateriels (){

    const [cours, setCours] = useState([])

    useEffect(() => {
        
        const listeDeMateriels = async () => {
            const resultat = await axios.get("http://localhost:5000/materielDeCours/63dae0d1e53230ab463663e9")
            console.log(resultat.data)
            setCours(resultat.data)
        }

        listeDeMateriels()
    },[])

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 d-none d-md-block">

                </div>
                <div className="col">
                {
                    cours.map(cours => {
                        return(
                            <div className="row">
                            <div className="col-md-3 text-center">
                                <img className="sizeImg" src={cours.image} alt="..."/>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col"><b>{cours.nom}</b></div>
                                    <div className="col"><b>Prof: </b>Louis Roi</div>
                                    <div className="col"><b>Code: </b>{cours.code}</div>
                                </div>
                                <div className="row">
                                    <div className="col mt-3 mb-3"><b>Description: </b>{cours.description}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                
                    
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>Materiels</h5>
                        </div>
                        <div className="col-12">
                            <ul>
                                {
                                    cours.map(item => {
                                        return(
                                            <li>{item.Materiels.map(materiel => {
                                                return materiel.typeMateriel
                                            })}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {
                            cours.map(section => {
                                return(
                                    section.Sections.map(item => {
                                        return(
                                            <div className="col-12">
                                                <div className="bg-warning">{item.titreSection}</div>
                                                <div className="row">
                                                    <div className="col-12">
                                                    </div>
                                                    <div className="offset-1 col-11">
                                                        <span>{item.SousSections.map(ss => {
                                                            return(
                                                                <div><hr/><b>{ss.titreSection}</b>
                                                                    <div className="offset-1 col-11">
                                                                        <span>{ss.Materiels.map(m => {
                                                                            return(
                                                                                <div>{m.typeMateriel}</div>
                                                                            )
                                                                        })}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}