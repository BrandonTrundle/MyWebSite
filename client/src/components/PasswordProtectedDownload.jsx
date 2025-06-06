import { useState } from "react";

export default function PasswordProtectedDownload() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (res.status === 401) {
        setError("Incorrect password.");
        setIsLoading(false);
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "cv.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading file:", err);
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <label className="block text-left font-semibold">
        Enter password to download CV:
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        {isLoading ? "Verifying..." : "Submit"}
      </button>
    </form>
  );
}
