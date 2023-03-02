import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BoutonsSidebar } from "../components/BoutonsSidebar";

export function AjouterCours(){

    const [code, setCode] = useState("")
    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [prix, setPrix] = useState(0.0)
    const [img, setImg] = useState("")
    const [categorie, setCategorie] = useState("")
    const [listeCategorie, setListeCategorie] = useState([])
    const [erreur, setErreur] = useState(false)
    const values = [code, nom, description, prix, img, categorie, listeCategorie]
    var validation = 0;

    useEffect(() => {
        const listeCategorie = async () => {
            const resultat = await axios.get("http://localhost:5000/categories")

            setListeCategorie(resultat.data)
        }

        listeCategorie()
    }, [])

    //Envoyé les données
    const postData = () => {
        axios.post('http://localhost:5000/createCours', {
            code: code,
            nom: nom,
            description: description,
            image: img,
            prixNormal: prix,
            idCategorie: categorie
        })
        .then(response => {console.log(response)
            alert("Cours ajouté avec success")
            window.location = "http://localhost:3000/listeDeCours"})
        .catch(error => console.log(error))
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        values.map(item => {        //Vérifier les inputs vides
            if(item.length === 0){
                setErreur(true)
            }
        })

        values.map(item => {        //Vérifier que tous les données sont remplis
            if(item.length > 0)
                validation = validation + 1
        })

        if(validation >= 7){
            postData()
        }
        console.log(validation)
        validation = 0

    }

    return(
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2 d-none d-md-block">
                    <BoutonsSidebar/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-center ">
                            <h3 className='mt-3 mb-5'>Ajouter cours</h3>
                        </div>
                    </div>
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col">
                            <label>Code :</label>
                            <input type="text" className="form-control" onChange={(e) => {setCode(e.target.value)}}/>
                            {erreur && code.length <= 0 ? <div className="text-danger">Saisir le code du cours</div>:""}

                            <label>Nom du cours :</label>
                            <input type="text" className="form-control" onChange={(e) => {setNom(e.target.value)}}/>
                            {erreur && nom.length <= 0 ? <div className="text-danger">Saisir le nom du cours</div>:""}

                            <label>Description du cours :</label>
                            <textarea rows="4" cols="50" className="form-control" onChange={(e) => {setDescription(e.target.value)}}></textarea>
                            {erreur && description.length <= 0 ? <div className="text-danger">Saisir la description du cours</div>:""}
                        </div>
                        <div className="col">
                            <label>Prix :</label>
                            <input type="number" step="any" min="0" className="form-control" onChange={(e) => {setPrix(e.target.value)}}/>
                            {erreur &&  prix <= 0 ? <div className="text-danger">Saisir un zero (0) si le cours est gratuit</div>:""}

                            <label>Image :</label>
                            <input type="text" className="form-control" onChange={(e) => {setImg(e.target.value)}}/>
                            {erreur && img.length <= 0 ? <div className="text-danger">Saisir le url de l'image</div>:""}

                            <label>Categorie :</label>
                            <select defaultValue={'DEFAULT'} onChange={(e) => {setCategorie(e.target.value)}} className="form-control">
                                <option value="DEFAULT" disabled>Choisir une categorie</option>
                                {
                                    listeCategorie.map((c, i) => {
                                        return(
                                            <option key={i} value={c._id}>{c.nom}</option>
                                        )
                                    })
                                }
                            </select>
                            {erreur && categorie.length <= 0 ? <div className="text-danger">Choisir la categorie du cours</div>:""}

                            <label>Professeur :</label>
                            <input type="text" className="form-control" disabled/>
                        </div>
                        <div className="text-center mt-4">
                            <input type="submit" className="btn btn-success me-3" value="Ajouter"/>
                            <button className="btn btn-warning">Retourner</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}