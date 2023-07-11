export function handleForm<T>(
  event: React.ChangeEvent<HTMLInputElement>,
  _form: T,
  setForm: React.Dispatch<React.SetStateAction<T>>
): void {
  const { name, value } = event.target;

  setForm((prevForm) => ({
    ...prevForm,
    [name]: value,
  }));
}
