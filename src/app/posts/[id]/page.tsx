import React from "react";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <article className="max-w-4xl mx-auto px-4">
        {/* Post Header */}
        <header className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <time dateTime="2024-03-15">Mar 15, 2024</time>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            React 성능 최적화 가이드
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image
                src="/api/placeholder/100/100"
                alt="Author"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-800">전민오</div>
              <div className="text-sm text-gray-600">Frontend Developer</div>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 mb-6">
              React 애플리케이션의 성능을 최적화하는 것은 매우 중요합니다. 이
              글에서는 다양한 최적화 기법들을 살펴보겠습니다.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. 메모이제이션
            </h2>
            <p className="text-gray-600 mb-6">
              React에서 제공하는 메모이제이션 기능들을 활용하면 불필요한
              리렌더링을 방지할 수 있습니다.
            </p>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-gray-800">
                {`const MemoizedComponent = React.memo(() => {
  return <div>Optimized Component</div>;
});`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. 코드 스플리팅
            </h2>
            <p className="text-gray-600 mb-6">
              큰 번들 사이즈는 초기 로딩 시간을 늘립니다. 코드 스플리팅을 통해
              이를 최적화할 수 있습니다.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
            {["React", "Performance", "JavaScript"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "프론트엔드 개발자 로드맵 2024",
                image: "/api/placeholder/400/200",
                slug: "frontend-roadmap-2024",
              },
              {
                title: "TypeScript 실전 가이드",
                image: "/api/placeholder/400/200",
                slug: "typescript-guide",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white rounded-full shadow-lg px-6 py-3">
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
          </button>
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3.01s-3.56-.51-7-.51c-3.44 0-7 .51-7 .51V8.5l7-3.49 7 3.49V3.01zm-7 14.99-7-3.49v5.48s3.56.51 7 .51c3.44 0 7-.51 7-.51v-5.48l-7 3.49z" />
            </svg>
          </button>
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Post;
