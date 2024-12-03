function FormularioUsuario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
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
                    placeholder="Digite o nome do usuário"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="text"
                    id="email"
                    value={obj.email}
                    onChange={eventoTeclado}
                    name="email"
                    placeholder="Digite o email"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="idade" className="form-label">Idade</label>
                <input
                    type="number"
                    id="idade"
                    value={obj.idade}
                    onChange={eventoTeclado}
                    name="idade"
                    placeholder="Digite a idade"
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

export default FormularioUsuario;



