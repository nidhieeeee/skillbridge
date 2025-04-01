import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });

  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-blue-100 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg')" }}
    >
     <div className="w-full max-w-md rounded-2xl p-6 m-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
        <h2 className="text-center text-2xl font-bold text-blue-900">
          SkillBridge Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 text-xl">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-500" size={20} />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-xl">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={20} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center text-gray-600">
              <input 
                type="checkbox" 
                checked={remember} 
                onChange={() => setRemember(!remember)} 
                className="mr-2 cursor-pointer"
              />
              Remember me
            </label>
            <p className="text-blue-900 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>
          <button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 transform transition-all duration-200 focus:scale-90 text-white p-2 rounded-lg cursor-pointer text-xl">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <p className="text-blue-900 hover:underline cursor-pointer">Sign up</p>
        </p>
      </div>
    </div>
  );
}