import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { handleForm } from "../../utils/handleFormUtils";
import * as Style from "./style";
import ButtonForm from "../Form/Button";
import { loadingButton } from "../../assets/styles/loading";
import InputForm from "../Form/Input";

interface FormData {
  codCandidato: number | "";
}

interface PageComponentProps {
  loadingRequest: boolean;
  requestFunction: (data: FormData) => void;
  successMessage: string;
  pageTitle: string;
  buttonName: string;
}

export default function PageComponent({
  loadingRequest,
  requestFunction,
  successMessage,
  pageTitle,
  buttonName,
}: PageComponentProps) {
  const [form, setForm] = useState<FormData>({
    codCandidato: "",
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await requestFunction(form);

      toast.success(successMessage);
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.nome) {
          toast.error(error.response.data.nome);
        } else {
          toast.error(error.response.data);
        }
      } else {
        toast.error("Ocorreu um erro na requisição.");
      }
    }
  }

  return (
    <Style.Container>
      <Style.Title>{pageTitle}</Style.Title>
      <Style.FormContainer>
        <Style.Form onSubmit={submit}>
          <InputForm
            label="Código:"
            id="codCandidato"
            name="codCandidato"
            value={form.codCandidato}
            onChange={onFormChange}
            type="number"
            placeholder="Código do candidato"
            disabled={loadingRequest}
            autoComplete="off"
            required
          />
          <ButtonForm type="submit" disabled={loadingRequest}>
            {loadingRequest ? loadingButton : buttonName}
          </ButtonForm>
        </Style.Form>
        {loadingRequest ? (
          <Style.BackToHome>Voltar para o início</Style.BackToHome>
        ) : (
          <Style.BackToHome>
            <Link to={"/"}>
              <p>Voltar para o início</p>
            </Link>
          </Style.BackToHome>
        )}
      </Style.FormContainer>
    </Style.Container>
  );
}
