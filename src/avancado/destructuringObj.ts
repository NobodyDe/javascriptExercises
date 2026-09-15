interface ResponseApiProps {
  usuario: UsuarioProps;
  permissoes: Array<string>;
  token: string;
}

interface UsuarioProps {
  nome: string;
  email: string | undefined;
  endereco: Record<string, string>;
}

const respostaApi: ResponseApiProps = {
  usuario: {
    nome: "Henrique",
    email: undefined,
    endereco: { cidade: "São Paulo" },
  },
  permissoes: ["editar_card", "criar_board"],
  token: "abc123",
};

const {
  usuario: {
    nome: userName,
    email = "Não informado",
    endereco: { cidade },
  },
  permissoes: [permissaoPrincipal],
  token,
} = respostaApi;

console.log(userName, email, cidade, permissaoPrincipal);
