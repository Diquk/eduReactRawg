import 'common/components/platform/platform.scss';

interface PlatformProps {
  platform: string;
  mod?: string;
}
export const Platform = ({ platform, mod }: PlatformProps) => {
  const platformClassName = mod
    ? `platform platform_${platform.toLowerCase()} platform_${mod}`
    : `platform platform_${platform.toLowerCase()}`;

  return <span className={platformClassName}></span>;
};
