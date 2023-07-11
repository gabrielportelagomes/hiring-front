import { useNavigate } from "react-router-dom";

import * as Style from "./style";

interface PageButtonProps {
  title: string;
  path: string;
}

export default function PageButton({ title, path }: PageButtonProps) {
  const navigate = useNavigate();

  return (
    <Style.Container onClick={() => navigate(path)}>
      <Style.ButtonTitle> {title}</Style.ButtonTitle>
    </Style.Container>
  );
}
