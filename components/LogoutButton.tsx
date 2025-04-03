"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/sign-in");
  };

  return (
    <Button 
      onClick={handleLogout} 
      className="btn-secondary"
    >
      Logout
    </Button>
  );
};

export default LogoutButton; 