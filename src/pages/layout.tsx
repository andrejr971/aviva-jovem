import StyledComponentsRegistry from '@/lib/registry';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
