import React from "react";

export default function AdminRoute({children}) {
  const { user, loading } = UseAuth();
  const { role, roleLoading } = UseRole();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== 'admin') {
    return <Forbidden></Forbidden>
  }

  return children;
}
