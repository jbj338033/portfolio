import Image from "next/image";
import React from "react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "Git", "CI/CD"] },
  ];

  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Company",
      description: "웹 애플리케이션 개발 및 성능 최적화",
    },
    {
      period: "2020 - 2022",
      role: "Full Stack Developer",
      company: "Startup",
      description: "서비스 아키텍처 설계 및 개발",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Profile Section */}
        <section className="text-center space-y-6">
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="data:image/png;base64,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"
                alt="Profile"
                className="w-full h-full object-cover"
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">전민오</h1>
            <p className="text-xl text-gray-600">Backend Developer</p>
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
              새로운 기술을 배우는 것을 즐기며, 사용자 경험을 개선하는 것에
              열정을 가진 프론트엔드 개발자입니다. 클린 코드와 성능 최적화에
              대한 깊은 관심을 가지고 있습니다.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600">{exp.period}</p>
                </div>
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:example@email.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
