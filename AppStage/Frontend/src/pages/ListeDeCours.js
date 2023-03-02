import axios from 'axios';
import { useEffect, useState } from 'react';
import { CarteCours } from "../components/CarteCours"
import { BoutonsSidebar } from '../components/BoutonsSidebar';

export function ListeDeCours(){

    const [cours, setCours] = useState([])

    useEffect(() => {
        
        const listeDeCours = async () => {
            const resultat = await axios.get("http://localhost:5000/listeDuCours")

            setCours(resultat.data)
        }

        listeDeCours()
    },[])

    return(
        <div className='container-fluid'>
            
            <div className="row">
                <div className="col-2 d-none d-md-block">
                    <BoutonsSidebar/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className=" col text-center ">
                            <h3 className='mt-3 mb-5'>Liste de cours</h3>
                        </div>
                    </div>
                    {
                        cours.map(cours => {
                            return(
                                <CarteCours key={cours._id} id={cours._id} nom={cours.nom} prixNormal={cours.prixNormal} description={cours.description} image={cours.image} categorie={cours.nomCategorie.map(c => c.nom)}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}