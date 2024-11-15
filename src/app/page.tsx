import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const projects = [
    {
      title: "Project One",
      description: "React와 TypeScript를 활용한 웹 애플리케이션",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description: "Next.js로 구현한 풀스택 솔루션",
      image: "/api/placeholder/400/300",
      tags: ["Next.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Project Three",
      description: "AI 기반 데이터 분석 플랫폼",
      image: "/api/placeholder/400/300",
      tags: ["Python", "TensorFlow", "Docker"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                안녕하세요,
              </span>
              <br />
              <span className="text-gray-800">
                프론트엔드 개발자 전민오입니다
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              사용자 경험을 중심으로 한 웹 개발을 지향합니다
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/about"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={128}
                    height={128}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Frontend", icon: "🎨", list: "React, Vue, TypeScript" },
              { name: "Backend", icon: "⚙️", list: "Node.js, Python, SQL" },
              { name: "Design", icon: "✨", list: "Figma, Tailwind CSS" },
              { name: "Tools", icon: "🛠", list: "Git, Docker, AWS" },
            ].map((skill, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-sm">{skill.list}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            새로운 프로젝트에 대해 이야기하고 싶으신가요? 언제든 연락해 주세요.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
