function TabelaUsuario({ vetor, selecionar }) {
    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th>CD</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice + 1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.email}</td>
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

export default TabelaUsuario;

