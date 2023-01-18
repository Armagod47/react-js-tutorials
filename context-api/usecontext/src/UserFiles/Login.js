const Login = ({ setName }) => {
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Login;
