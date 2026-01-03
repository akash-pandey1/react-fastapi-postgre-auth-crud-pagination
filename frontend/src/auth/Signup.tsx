import { Link, useNavigate } from "react-router-dom";
import type { RegisterPayload } from "../core/types/auth.type";
import { useState } from "react";
import { register } from "../core/services/auth.api";

export default function Signup() {
  const [form, setForm] = useState<RegisterPayload>({
    email: "",
    password: "",
    name: "",
    role: "user" as "user" | "admin",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await register(form);
      setLoading(false);
      alert("Register successful, please login");
      navigate("/login");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

    return (
      <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a>K-WD</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
            UI design on us!
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link> 
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a className="underline">terms</a> and <a className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Create an Account</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-500">Name</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-500">Password</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-500">Role</label>
              </div>
              <input
                type="text"
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          
            <div>
              <button
                type="submit" 
                disabled={loading}
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
    );
  }