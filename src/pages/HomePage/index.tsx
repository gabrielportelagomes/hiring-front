import PageButton from "../../components/PageButton";
import * as Style from "./style";

export default function HomePage() {
  const pages = [
    { title: "Cadastrar Candidato", path: "/iniciar" },
    { title: "Agendar Entrevista", path: "/entrevista" },
    { title: "Desqualificar Candidato", path: "/desqualificar" },
    { title: "Aprovar Candidato", path: "/aprovar" },
    { title: "Verificar Status do Candidato", path: "/status" },
    { title: "Candidatos Aprovados", path: "/aprovados" },
  ];

  return (
    <Style.Container>
      <Style.Title>Processo Seletivo</Style.Title>
      <Style.PagesContainer>
        {pages.map((page) => {
          return (
            <PageButton key={page.path} title={page.title} path={page.path} />
          );
        })}
      </Style.PagesContainer>
    </Style.Container>
  );
}
