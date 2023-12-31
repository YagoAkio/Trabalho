import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroCategoria(props){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        codigoCategoria: '',
        nomeCategoria: '',
        descricao: ''
    });
    const [modoEdicao, setModoEdicao]=useState(false);

    if(mostrarMensagem){
        return(
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
        )
    }
    else{
        return(
            <Container>
                <Pagina>
                    {
                        exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario}
                            listaCategorias={listaCategorias}
                            setListaCategorias={setListaCategorias}
                            categoriaParaEdicao={categoriaParaEdicao}
                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem}
                        />
                            :
                            <TabelaCategorias exibirFormulario={setExibirFormulario}
                                listaCategorias={listaCategorias}
                                setListaCategorias={setListaCategorias}
                                categoriaParaEdicao={categoriaParaEdicao}
                                setCategoriaParaEdicao={setCategoriaParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                    }
                </Pagina>
            </Container>
        );
    }
}
