function Tabela({ vetor, selecionar }) {
    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th>CD</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Quantidade</th> {/* Nova coluna para exibir a quantidade */}
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice + 1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.marca}</td>
                        <td>{obj.quantidade}</td> {/* Exibição da quantidade */}
                        <td>
                            <button
                                onClick={() => selecionar(indice)}
                                className="btn btn-success"
                            >
                                <i className="bi bi-check-circle"></i> Selecionar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Tabela;

