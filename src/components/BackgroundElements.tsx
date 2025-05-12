
import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating shapes */}
      <div className="absolute h-32 w-32 border border-portfolio-mint/10 rounded-full top-[15%] left-[85%]"></div>
      <div className="absolute h-16 w-16 border border-portfolio-blue/10 rounded-md top-[25%] left-[10%] rotate-45"></div>
      <div className="absolute h-24 w-24 border border-portfolio-pink/10 rounded top-[75%] left-[80%]"></div>
      
      {/* Animated dots */}
      <div className="absolute top-1/4 right-1/3 w-1 h-1 rounded-full bg-portfolio-mint animate-pulse"></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-portfolio-blue animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-portfolio-pink animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-portfolio-purple animate-pulse"></div>
      
      {/* Light beam effect */}
      <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-portfolio-mint/5 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[500px] h-[500px] bg-portfolio-blue/5 rounded-full blur-[100px] opacity-30"></div>
      
      {/* Additional subtle background elements */}
      <div className="absolute top-[60%] left-[20%] w-[300px] h-[300px] bg-portfolio-purple/5 rounded-full blur-[80px] opacity-20"></div>
      <div className="absolute top-[20%] right-[30%] w-[250px] h-[250px] bg-portfolio-pink/5 rounded-full blur-[70px] opacity-20"></div>
      
      {/* Grain effect overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]"></div>
    </div>
  );
};

export default BackgroundElements;
