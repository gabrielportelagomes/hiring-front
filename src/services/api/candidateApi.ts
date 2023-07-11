import api from "./api";

interface RegisterCandidateBody {
  nome: string;
}

export async function postStartProcess(body: RegisterCandidateBody) {
  const response = await api.post("/start", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
