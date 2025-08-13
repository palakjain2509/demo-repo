"use client";

export default function FluentProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div id="mygets-fluent-provider">
      {children}
    </div>
  );
}