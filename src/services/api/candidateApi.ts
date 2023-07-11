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

interface CandidateIdBody {
  codCandidato: number;
}

export async function postSchedule(body: CandidateIdBody) {
  const response = await api.post("/schedule", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function postDisqualify(body: CandidateIdBody) {
  const response = await api.post("/disqualify", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function postApprove(body: CandidateIdBody) {
  const response = await api.post("/approve", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function getStatus(id: number) {
  const response = await api.get(`/status/candidate/${id}`);

  return response.data;
}
