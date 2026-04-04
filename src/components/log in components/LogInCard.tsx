function LogInCard() {
  return (
    <div
      style={{
        width: "350px",
      }}
    >
      <EmailInput />
      <LogInButton />
    </div>
  );
}

export function LogInButton() {
  return <button>Iniciar sesión</button>;
}

export function EmailInput() {
  return <input>Ingrese su Email empresarial</input>;
}

export default LogInCard;
