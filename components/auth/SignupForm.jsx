export default function SignupForm() {
    return (
      <div className="bg-surface-container p-6 rounded-xl space-y-4">
        <h2 className="text-primary font-bold">
          CREATE ATHLETE PROFILE
        </h2>
  
        <div className="grid grid-cols-2 gap-2">
          <input placeholder="First Name" className="p-3 bg-black/20 rounded" />
          <input placeholder="Last Name" className="p-3 bg-black/20 rounded" />
        </div>
  
        <input
          placeholder="Email"
          className="w-full p-3 bg-black/20 rounded"
        />
  
        <button className="w-full border border-primary py-3">
          JOIN THE EVOLUTION
        </button>
      </div>
    );
  }