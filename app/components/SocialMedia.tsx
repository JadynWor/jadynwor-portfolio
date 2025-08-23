// app/components/SocialMedia.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import type { SocialMedia } from "./socialmediaData";
import { socialmedias } from "./socialmediaData";

const iconMap: Record<string, JSX.Element> = {
    email:    <FaEnvelope className="w-6 h-6 text-blue-600" />,
    instagram:<FaInstagram className="w-6 h-6 text-pink-500" />,
    linkedin: <FaLinkedin className="w-6 h-6 text-blue-700" />,
    youtube:  <FaYoutube className="w-6 h-6 text-red-600" />,
};

export function SocialMediaList({
  items = socialmedias,
}: {
  items?: SocialMedia[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item) => {
        const key = item.title.toLowerCase();
        return (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-colors"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Icon */}
            <div className="text-gray-500 dark:text-gray-400">
              {iconMap[key]}
            </div>

            {/* Text */}
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
