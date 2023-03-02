import { Link } from "react-router-dom"

export function BoutonsSidebar (){

    return(
        <div className="w-100 text-center h-100 bg-light">
            <Link to={'/listeDeCours'}><button className="btn btn-warning w-100 mb-2 mt-3">Liste de cours</button></Link>
            <Link to={'/admin/ajouterCours'}><button className="btn btn-warning w-100">Ajouter cours - ADMIN</button></Link>
        </div>
    )
}