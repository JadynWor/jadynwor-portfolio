import React from "react";
import { SocialMediaList } from "~/components/SocialMedia";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto mt-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-white">Contact</h1>
      <p className="text-lg">
        Lets connect.
      </p>
      <SocialMediaList />
    </div>
  );
} 