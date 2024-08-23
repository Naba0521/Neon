"use client";

import { useAuth } from "@/components/providers/AuthProvider";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="w-full h-screen flex justify-center items-center text-3xl">
      Helloaaa {user?.username}
    </div>
  );
};

export default HomePage;
