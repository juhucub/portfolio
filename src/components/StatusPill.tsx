interface StatusPillProps {
  children: string;
}

export function StatusPill({ children }: StatusPillProps) {
  return <div className="status-pill">{children}</div>;
}
