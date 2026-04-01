export default function LoginForm() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">OPERATOR LOGIN</h2>
  
        <input
          placeholder="Email Address"
          className="w-full bg-surface-container-highest p-4 rounded-md"
        />
  
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-surface-container-highest p-4 rounded-md"
        />
  
  <button
  onClick={handleLogin}
  className="w-full bg-gradient-to-r from-[#156aff] to-[#8eabff] py-4 rounded-md"
>
  INITIALIZE SESSION
</button>
      </div>
    );
  }