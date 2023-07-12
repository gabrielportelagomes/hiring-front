import { Link } from "react-router-dom";

import * as Style from "./style";

export default function NotFoundPage() {
  return (
    <Style.Container>
      <Style.ExclamationIcon />
      <Style.Title>404</Style.Title>
      <Style.Title>Page Not Found</Style.Title>
      <Style.TextLink>
        <Link to="/">Voltar para o início</Link>
      </Style.TextLink>
    </Style.Container>
  );
}