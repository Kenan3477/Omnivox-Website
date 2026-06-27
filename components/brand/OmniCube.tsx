"use client";

import { useEffect, useRef, type ReactNode } from "react";

const floatingIcons = [
  { icon: "phone", className: "top-2 left-1/2 -translate-x-1/2", delay: 0 },
  { icon: "chart", className: "top-1/2 right-2 -translate-y-1/2", delay: 1 },
  { icon: "chat", className: "bottom-2 left-1/2 -translate-x-1/2", delay: 2 },
  { icon: "cog", className: "top-1/2 left-2 -translate-y-1/2", delay: 3 },
  { icon: "users", className: "top-8 right-8", delay: 4 },
  { icon: "bell", className: "bottom-8 left-8", delay: 5 },
] as const;

function Icon({ type, className = "w-6 h-6" }: { type: string; className?: string }) {
  const icons: Record<string, ReactNode> = {
    phone: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    chat: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    chart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    cog: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bell: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  };

  return <span className="text-white">{icons[type]}</span>;
}

function CubeFace({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={`omni-cube-face absolute flex h-28 w-28 items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

function FloatingIcon({ icon, className, delay }: { icon: string; className: string; delay: number }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `omni-float 6s ease-in-out infinite ${delay}s, omni-icon-pulse 4s ease-in-out infinite ${delay * 0.5}s`,
      }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/20 shadow-2xl backdrop-blur-sm">
        <Icon type={icon} />
      </div>
    </div>
  );
}

interface OmniCubeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeScale = { sm: 0.65, md: 0.8, lg: 1 };

export function OmniCube({ size = "lg", className = "" }: OmniCubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const orbit = orbitRef.current;
    if (!cube || !orbit) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cube.style.transform = "perspective(1000px) rotateX(-18deg) rotateY(24deg)";
      return;
    }

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;
    let frame = 0;

    const animate = () => {
      rotX += 0.5;
      rotY += 0.7;
      rotZ += 0.3;
      cube.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotX * 0.5}deg)`;
      orbit.style.transform = `rotateZ(${rotZ}deg)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scale = sizeScale[size];

  return (
    <div
      className={`relative mx-auto flex h-80 w-80 items-center justify-center ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
      aria-hidden="true"
    >
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-16 h-4 w-4 rotate-45 border border-white/20 animate-pulse" />
        <div className="absolute bottom-20 right-12 h-6 w-6 rotate-12 border border-white/15 animate-bounce" />
        <div className="absolute right-16 top-32 h-3 w-3 rotate-45 bg-white/20 animate-ping" />
        <div className="absolute bottom-32 left-20 h-8 w-8 rotate-45 border border-white/10" />
      </div>

      {/* Orbiting icon ring */}
      <div ref={orbitRef} className="absolute h-64 w-64">
        {floatingIcons.map((item) => (
          <FloatingIcon key={item.icon} icon={item.icon} className={item.className} delay={item.delay} />
        ))}
      </div>

      {/* Glass cube */}
      <div ref={cubeRef} className="omni-cube-scene relative h-28 w-28">
        <CubeFace className="omni-face-front bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm border border-white/40 rounded-2xl shadow-2xl">
          <span className="text-3xl font-bold text-white">O</span>
        </CubeFace>
        <CubeFace className="omni-face-back bg-gradient-to-br from-slate-400/30 to-slate-600/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl">
          <Icon type="phone" className="h-10 w-10" />
        </CubeFace>
        <CubeFace className="omni-face-right bg-gradient-to-br from-blue-400/30 to-blue-600/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl">
          <Icon type="chart" className="h-10 w-10" />
        </CubeFace>
        <CubeFace className="omni-face-left bg-gradient-to-br from-blue-400/30 to-blue-600/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl">
          <Icon type="chat" className="h-10 w-10" />
        </CubeFace>
        <CubeFace className="omni-face-top bg-gradient-to-br from-purple-400/30 to-purple-600/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl">
          <Icon type="cog" className="h-10 w-10" />
        </CubeFace>
        <CubeFace className="omni-face-bottom bg-gradient-to-br from-pink-400/30 to-pink-600/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl">
          <Icon type="users" className="h-10 w-10" />
        </CubeFace>
      </div>

      {/* Glow + particles */}
      <div className="pointer-events-none absolute h-32 w-32 rounded-full bg-white/5 blur-3xl animate-pulse" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40 animate-ping"
          style={{
            top: `${20 + ((i * 17) % 60)}%`,
            left: `${20 + ((i * 23) % 60)}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}
