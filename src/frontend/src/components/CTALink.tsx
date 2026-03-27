const CTA_URL = "https://rajawin.vercel.app";

export function CTALink({
  children,
  className,
  ocid,
}: {
  children: React.ReactNode;
  className?: string;
  ocid?: string;
}) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-ocid={ocid}
    >
      {children}
    </a>
  );
}
