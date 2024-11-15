"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Posts() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tech", name: "Technology" },
    { id: "dev", name: "Development" },
    { id: "career", name: "Career" },
    { id: "life", name: "Life" },
  ];

  const posts = [
    {
      id: 1,
      title: "React 성능 최적화 가이드",
      excerpt:
        "React 애플리케이션의 성능을 최적화하는 다양한 방법들을 알아보겠습니다. 메모이제이션, 코드 스플리팅, 그리고 상태 관리 최적화 등을 다룹니다.",
      category: "dev",
      date: "2024-03-15",
      readTime: "8 min read",
      thumbnail:
        "https://velog.velcdn.com/images/shin6403/post/1b1b5daf-7b05-449e-8c9b-486d4e3d1b5f/image.jpg",
      tags: ["React", "Performance", "JavaScript"],
    },
    {
      id: 2,
      title: "프론트엔드 개발자 로드맵 2024",
      excerpt:
        "2024년 프론트엔드 개발자가 되기 위해 필요한 기술 스택과 학습 경로를 소개합니다. 초보자부터 숙련자까지 단계별 가이드를 제공합니다.",
      category: "career",
      date: "2024-03-10",
      readTime: "12 min read",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:1400/1*8u_wz6SCBjW2Qr9waVMH9g.png",
      tags: ["Career", "Frontend", "Web"],
    },
    // 더 많은 포스트 데이터...
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            개발, 기술, 그리고 커리어에 대한 이야기를 공유합니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
                    {categories.find((cat) => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
