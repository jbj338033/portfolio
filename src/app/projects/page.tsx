"use client";

import React, { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "backend", name: "Backend" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Next.js와 Tailwind CSS를 활용한 현대적인 E-commerce 플랫폼입니다. 사용자 경험을 최우선으로 고려하여 설계했으며, 반응형 디자인과 최적화된 성능을 제공합니다.",
      image:
        "data:image/png;base64,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",
      category: "web",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      features: [
        "상품 필터링 및 검색 기능",
        "장바구니 및 결제 시스템",
        "사용자 리뷰 시스템",
        "관리자 대시보드",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "React Native로 개발한 iOS/Android 태스크 관리 애플리케이션입니다. 직관적인 UI와 오프라인 지원으로 언제 어디서나 업무를 관리할 수 있습니다.",
      image:
        "data:image/png;base64,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",
      category: "mobile",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      features: [
        "실시간 동기화",
        "오프라인 모드 지원",
        "팀 협업 기능",
        "일정 알림",
      ],
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "OpenAI API를 활용한 콘텐츠 생성 플랫폼입니다. Python FastAPI 백엔드와 React 프론트엔드로 구성되어 있으며, 다양한 형태의 콘텐츠를 자동으로 생성합니다.",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhMTEhMVFRUVGR8VFhcYFRgVGBcXFRcWFhUWGB0aHykgGBolHRcVIjYiJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGhAQGy8dHx0tKystLS0rOCstLS0tLS0tLS0rLS0tLS0tLS0tLS0rLS0tKy0tLS0vLS0tKystLS0tLf/AABEIAKsBJgMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAAAQIDBAUGB//EAD4QAAEDAQMHCgQFAwUBAAAAAAEAAhEhAzFRBBITQWFxkgUiMlJygZGx0dKhwcLwBkKy4fEUYqIHFWOC4lP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBgUE/8QAKxEBAQABAgUDAgYDAAAAAAAAAAERAgMSITFBUQQF8GGxE3GRoeHxIzLR/9oADAMBAAIRAxEAPwDoERF752EREBERAREQEREBERAREQEREBERAREQEREBERAREQERI1/f3UICIiAiIgIiICIiAiIgIiICIiAi5DLIQJB1SZo0vnNnZEFZWTawdQJIuuBMfBZ4kURXtgAaXQDje0H5qdMcG8LfRXIzRaaY4N4W+iaY4N4W+icxmi00xwbwt9E0xwbwt9E5jNFLnTh3ADyUIoimaRTG6tY14U80a6MMKifsoIRFL3SSaVrQQO4C4IIRCSQLqbPPFATW6uzbNMEBFDHGhpStRIpiNaVQSirWq5WUWzs93Od0jrOJUyjjotNO/rO4imnf1ncRV5jMLUjPNKNFK3AbTia99ym3MmprDanstv8AVZAG4kCMZie7Wp9QcO9QpeALjP8A1gd1Z+CrVWKlFUlWQERFQREQEREBERAVrJkkDVr2AVJ8JVVeyeBMgmRFDEVGw7u9So5TWlwuMOkkZrjf0QIEQIbrxWV7s7rNcTvzXB3xE96xtHySbvkNQ7gtTlA6pqSTzus2HRSmo67ljhsFLe8dlv6WpmNABJNRNGg6yMRgq2jpMxFAL5uAHyW7WkaNwig1uA/O7bKt5SDKGdZ3CPckM6zuEe5chr3AkwNX5xPNoJM1GI1qnOzc2nGMZum/bgpkZQzrO4R7khnWdwj3JoDs4m+qaA7OJvqtZnkIZ1ncI9yQzrO4R7k0B2cTfVNAdnE31TM8hDOs7hHuSGdZ3CPcmgOzib6poDs4m+qZnkIZ1ncI9ygtZ1ncI9ynQHZxN9U0B2cTfVMzyIzWdZ3CPcphnWdwj3JoDs4m+qaA7OJvqmZ5EBrOs7hHuUwzrO4R7k0B2cTfVNAdnE31TM8iM1nWdwj3K1u0l7gATzjdvKg2B2cTfVTbiXuqBzjfOJwU7iNA/qu4Smgf1XcJUaIddvg72poh12+Dvarm/ILuc9sSCNVWjVvCi3M5p/t+ZCo5gFxB3T8wFNtc3s/U5BmdS0bZ0kmNQpM43arvFZHUt72SRGbQHGSTG9LRJtM0ANccSRIBJjxu80fDoJdBitCSSKSNR1XkKC7NDYiokmAdZEVuFPNRaCc00EiuFCROy74FQVtGQY8DiDUFVWuUUObEZtBjeTJ8VktToCIiqiIiAiIgIiICSi3tLVwgBxAhtASB0QVMo48rS0uZ2fqcp/qH9d3EU/qH9d3EVOYyRa/1D+u7iKvY2riYLiQZkEki4pbRgiItKIiICIiAiJKAiSiAiIggra3jPdPWNxjWdiyK0ynpu7R8yp3QlnVdxD2pLOq7iHtWa0yexdaODGiXOMAKXEmaKuI1AjeQfkFNqej2fqcu0yv8OZRZtzoa8f2GT4EAnulbZF+GbbKLNlowsAIIhxIILXuB1L899XscPFxzGfJmOhOpbdJoqBm0qYoSTIxN92xdplP4UyqzE5gcB1XV+MSuotbNzDDmuacCIPxW9vf293/TVKdVyS0Ac1wNRSRtiajcjmF1S4SbgaUuGqAN8KgtYEFoNdc64m47Ee+TPd4CF1FrZ1wFQ0ROOs90mmxZqQ012XqFYCIiqiIiAiIgIi1oAOaDIms4kRQjBS0ZLS3vHZb+lqaQdRvi73KXWwP5G6h+bUIH5tindFLM1vzdtflVam0d/wDU+L/RU0g6jfF3uTSDqN8Xe5LMiDbONC5x7ypyfpD71FXtMnhxAIMEgCa0+aizZmkEkDXGu6lFMzHIZtMA33j5ppDib57zrQXHeNew6vv4qq0LB5x2eN6Z5x1R3YK2ii8huwzPwBjvVX2ZG0G4i7+dhU5BpDif4uS0vO9VVrS878Z+OtUWybpt3jzQZQ/rHxTJum3ePNUs2yQMSB4qcs8xf+of1j4q7LUkPkzTX2mqma3rf4lSyBc8jcCFLgZkYXKFydICCDaEziCbiDissxvW/wASrKMyt7ezJc4gtgknptx3qrbIEgB1TS4rJOo0Fgf7af3t3Y7QuTydaGyeHc24g89tJ13rjWdz+z9bFlP3Cxr0fiabo1dLyHqMq5ZcWiyuzjJNDnNEEQcJqudyNykXGCTF0zVeOs8oIoRnNvgg0OIwK7HIsoAGeDm87MhxHOJEwCbz+y8t6v27c2M6uunz/DndOHrsu5RymwIOZpLHW9tS3tNvG+o3Lls5RyW3s5fmkHGCK7Na6/krlgAR8Fymch5Pa2mlY0MtMRdOObdO0Qdq/BLjnEdXl/4byd7gGEsLqgAzdec06hsIC89ytyJa5PznQ5hMB4unUCLwfhtXurTkwstJY0ZzulaGpjBvVXI5SyLPsLVprNm7xDSWnfIB7l9L0nuW9o1yarxT6/8AWpqr5WxxBkK7mgiW94w/b+DqJzC0sLz2XfpK9VfLbNERVRERAREQFpaXM3fU5ZrV7TmtMaj+px+YUqKNcB+UHfPyIWjATdZg7s8/NZBpNwTRnA+ClF7VpESzN7nV8SsypzDgfBTozgfAqxVso6bu0fMrMmVplHTd2j5lZpOiLC47xqrr1/epWsOluBPeGkj4hVHRN943XO+P7qGuIIIvFUvcbWDASZcLnX509E7FDB0hIIImk0IqLx3f9lAzbwc3YRIqIMG/x8VDnACGzW8mk7ANQ9AsjNS+879yhWtLzfeb779e1aFsm6bd480ybpM7Q8wmTdNu8eaZN0mdoeYUvcTk7iM6DHNPkq2QwbnbK/IqbHX2T5KrBtjx+SeRo6l9mBvzx81XSDqN8Xe5MwdceDvRVe0C5wO6fmEgvYHntpFR91WQWmTdNu8eazCvcaWVz+z9bFmtLO5/Z+tiyqpO4ldvk3J4fZ2WvOJobpLs2Y7gumqu7a1wyazLDzgSQR2iSPEL5XvN/wAE/Ofapq6K8qclPyKzZbB2czODHCatzqNc2dU0g3SIXe/hjlMzE3/eoleX/EmXZXlDbM5gFg14daZvOcS0RMamgyY1wu0ye1zc14Milcf2XmHN9HaZEq1D30PeuHyLlrbRm1dg5kIPilpZ5pLT+UkeBhWsLz2XfpK5n4iyc2eVW7f7y4bnnPb8HBcOwvPZd+kr3WnVxaJq8zLqzREXRRERAREQFLXkXEjcYUIoNTauJAFNjaCTr3n7oltZ2jKPzhNb9qjJ+mztDzC7H8RdNm75rN5WRnPPDq9K7E+JWtpaGGVPRxPWcsFo+5nZ+pyuFUREWlWFx3jXv1ffxVVIdH8A3Kc87Mbh6fBQVRWD93gNaZ27C4fc7UFVZ9537/5TPOzwGruVSUGmTdNu8earZOgtOBB8Coa4ggi8VV9McG8DfRSxFmOaLnPG4AfUqwzF3CPcmmODeBvommODeBvomL8/oWaxhBMup/aMQOttVYZi7hHuUG1JEUrg1o8gqJJRtZlgIMuoZuGrvWKIrgaWVz+z9bFmtLO5/Z+tiyqpO4a1z+T7eYsXdF7hFYLXEwCPguvqpque9s6d3RdGrpSvTWNo/Jw+ztRMAuaaQYvBw3XTOMDreRXNtLBto0mudSaA57gWiAKAzeux5HtP6mzLbTnOs6VrLXXX36/ALM5E6xBbZEBhrmESBOtuH7d68Zv7N2dy6NXZyvJ2nIWWZpi4r2+RWuc2t4+wvmPJ1uQa3tK+hcjZQHMnuXIeJ/1EsM3KGP67IO9riPIt8F5hjoncR4iF7T/Uhs6B2Gc3xzSPIrxK9h7dq4vS6P0/SumnoIiL9zQiIgIiICIiACpLybyTvMqFUFRFlpaXM7P1OWU7FpaXM7P1OSiiIR8f4+RRVWmTtBcAYrSsxJFJisTCtaZk0B7jS6sSJicVSw6Td48wqLOOaNOZg7xHonMwd4j0VGtJMC9cl2TANm+k5wNJE078cVLZBVrWZpOEzJM1HNiKXzeuOtGdF3d5qGNEEmaECBS+fRWcsiiLSWYO4h7UlmDuIe1XKs0WkswdxD2pLMHcQ9qZGaLSW4O4h7UluDuIe1MjNFqxrXECHCaXg/JZJkaWVz+z9bFVjC64Sps7n9n62KWdB0iBIINKm6NtCSplFtCJAJOdF0CJvDTW+7xWVpZuF4I3/d/quQyzuGbzSAS7u5xnVBmmxZfkoJk12QDFNta7Niko25KyzQ2jXflucMWm/wAL+5ehtDnGhkD7C8kTdRel5Atg6zIN7Tm9xqPmO5fF949PLpm9O3K/l2Z1RLrITK9J+GsoihXRWrFy+RXw9eeYcn/UHJ5sWuFzXg9xBb5kLwC+p8uZNprC0ZrLTG8Vb8QF8sXpvZtzi2bp8X7/ACumnoIiL7DQiIgIiICIiAoapVQVBZXba6i0GKCZuv1EayVnP3CgH7hKOU+3bmtEA7Kw2rrqzJka4+WWkHUb4u9yzzvuCon7gqYkRyLC0Ge3mNvHWx7SyAkwLzRWyar2iCajUcVAJacCDNcQk6jVova0j+52qMBs81naPmALhdiSbydtB91R9pIigF8DHFUSQa2RhrqA3XzjsKkuBYaAc4XTg/ElRZtOY8wYpqJWTbUi7ynzG9TyO/yflmzaxoOeIaBQCKAClVp/vlnjaeH/AKXntOdnAPRDbnZwD0XP8HT8/pj8OPQ/75Z42nh/6XE5R5TZaNAa54IM3bCNR2rqdOdnAPRNOdnAPRWbUlz8+yzRI20n/I7wPqmk/wCR3gfVYi3OzgHomnOzgHot4+fI02Y+XsqTBAk66/Y7lkLQdRvi73KBlB/hoHkFTO+4Ksg0NreA0CcJxnWTgFDLSJEAjbN4uu7/ABWU11+CkH7gpiDkc2+QBElvOvAuuumNetUfaSIAAF5ianVed/iVlP3BU533BSQCu05CtIc8YtnvaR6laDkImOeOH91GRZNo7fMmeaTMRqX5PW3Tr9Prn0v7M8UvR2tg6TB+5XKyNma+F0mXctWFgee+XD8rec7vw74XVZV+O3TNlYgbXuJ/xbHmvJ6NjXr6RjD6tZdBfMOWbDMt7RurOkbnc75rrnfjnlC05rLRrdjLJh/UHLX+ptbXnWxBebyABumKTuX2vadjc29y29LP3b0wREX32xERAREQEREBEWmlODeEKDNFppTg3hCaU4N4QnNGaLTSnBvCE0pwbwhOYqx0Gb7xXaCDdvV3ZQ44DVcNQgXrNzpw7hChMS9Rpp3Y/Aeiad2PwHos0TEGv9QYgwb4MRGcIN1LlkiJJgERFVERS0jXX4KCFZjJ8ydQGJVs5vVPF+yh75EAQMMTicfvanNEkswdxAfDNoks6ruIe1ZomBZxbqBG8g/IKqIiiIionPOJ8VW0c+HZry0kRnC8A3x3KUWdWmapZelR1DeRcX/4/uuRZck2Yvl28+i56Llp9NtTsYUs7MNENAA2CFdEXaTCiIioIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/2Q==",
      category: "backend",
      tags: ["Python", "FastAPI", "React", "OpenAI"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      features: [
        "AI 기반 텍스트 생성",
        "다국어 지원",
        "템플릿 커스터마이징",
        "API 인터페이스",
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 개발한 프로젝트들입니다. 각 프로젝트는
            실제 문제 해결을 위해 설계되었습니다.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 space-x-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    주요 기능
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
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
      </div>
    </div>
  );
}
