import React, {useState} from "react";
import Search from "../components/common/Search";
import getWikiResponse from "../services/getWikiResponse";
import SpinnerLoading from "../components/common/SpinnerLoading";
import CardWiki from "../components/CardWiki";

const Wikipedia = () => {
    const [stateText, setStateText ] = useState('');
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    //RECIBO DESDE SUBMIT EL TEXTO
    const onSearch = (text) => {
        //HAGO FETCH DE ELLO
        fetchData(text);
        //LO ESTABLEZCO COMO STATE PARA REUTILIZACIÓN
        setStateText(text);
    }

    const fetchData =  async (text) => {
        //ESTABLEZCO QUE SE ESTÁ CARGANDO ANTES DE OBTENER DATOS
        setLoading(true);
        try {
            //HAGO FETCH
            const resData = await getWikiResponse(text);
            //OBTENGO RESPUESTA Y ESTABLEZCO ESTADO
            setResponse(resData)
        } catch (err) {
            console.warn(err);
        }
        //UNA VEZ OBTENIDA LA RESPUESTA, YA NO HAY SPINNER DE LOADING
        setLoading(false);
        console.log(response);
    }
    
    const renderData = response?.map(elem => <CardWiki key={elem.pageid} title={elem.title} content={elem.snippet} pageid={elem.pageid}/>);

     //EN EL RETURN VALORO SI EL ESTADO DE LOADING ES TRUE O NO; SI LO ES, SPINNER, SI NO, RENDERIZA LOS DATOS DEL renderData
    return (
        <div className="container-fluid">
            <Search onSubmit={onSearch}/>
            <div className="row">
                {loading ? <SpinnerLoading/> : renderData}
            </div>
        </div>
    )
}

export default Wikipedia;