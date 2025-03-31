import { useState } from "react";
import { User, Mail, Lock , GraduationCap, MapPinHouse } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    // Implement signup logic here
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-blue-100 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg')" }}
    >
      <div className="w-full max-w-md shadow-lg rounded-2xl p-6 m-10" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
        <h2 className="text-center text-2xl font-bold text-blue-900">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Area Of Interest </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your occupation" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <div className="relative">
              <MapPinHouse className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your occupation" 
                required 
                className="w-full pl-10 mt-1 p-2 border rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Degree Status</label>
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
              className="w-full mt-1 p-2 border rounded-lg cursor-pointer"
            >
              <option value="student">Student</option>
              <option value="graduated">Graduated</option>
              <option value="employed">Employed</option>
              <option value="selfemployed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="owner">Company Owner</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-800 text-white p-2 rounded-lg cursor-pointer transform transition-all duration-200 hover:bg-blue-900 focus:scale-90 text-xl" 
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <p className="text-blue-900 hover:underline cursor-pointer">Log in</p>
        </p>
      </div>
    </div>
  );
}
