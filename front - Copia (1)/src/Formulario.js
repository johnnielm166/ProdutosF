function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    return (
        <form className="p-4 shadow-sm rounded border">
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                    type="text"
                    id="nome"
                    value={obj.nome}
                    onChange={eventoTeclado}
                    name="nome"
                    placeholder="Digite o nome do produto"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input
                    type="text"
                    id="marca"
                    value={obj.marca}
                    onChange={eventoTeclado}
                    name="marca"
                    placeholder="Digite a marca"
                    className="form-control"
                />
            </div>

            <div className="mb-3"> {/* Adicionado campo de quantidade */}
                <label htmlFor="quantidade" className="form-label">Quantidade</label>
                <input
                    type="number"
                    id="quantidade"
                    value={obj.quantidade}
                    onChange={eventoTeclado}
                    name="quantidade"
                    placeholder="Digite a quantidade"
                    className="form-control"
                />
            </div>

            <div className="d-flex justify-content-between">
                {botao ? (
                    <input
                        type="button"
                        value="Cadastrar"
                        onClick={cadastrar}
                        className="btn btn-primary w-45"
                    />
                ) : (
                    <div className="d-flex gap-2">
                        <input
                            type="button"
                            value="Alterar"
                            onClick={alterar}
                            className="btn btn-warning w-45"
                        />
                        <input
                            type="button"
                            value="Remover"
                            onClick={remover}
                            className="btn btn-danger w-45"
                        />
                        <input
                            type="button"
                            value="Cancelar"
                            onClick={cancelar}
                            className="btn btn-secondary w-45"
                        />
                    </div>
                )}
            </div>
        </form>
    );
}

export default Formulario;


