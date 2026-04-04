function LogInCard() {
  return <LogInButton />;
}

export function LogInButton() {
  return <button className="bg-red-500 w-100">Iniciar sesión</button>;
}

export function EmailInput() {
  return <input>Ingrese su Email empresarial</input>;
}

export default LogInCard;
