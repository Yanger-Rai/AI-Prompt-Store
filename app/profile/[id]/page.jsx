"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const OtherProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("username");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (userName) fetchPosts();
  }, []);

  return <Profile name={userName} desc="Feed yourself :)" data={posts} />;
};

export default OtherProfile;
