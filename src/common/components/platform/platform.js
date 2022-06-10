import "common/components/platform/platform.scss";

export const Platform = ({platform, mod}) => {
  const platformClassName = mod ? "platform platform_" + platform.toLowerCase() + " platform_" + mod
                                : "platform platform_" + platform.toLowerCase();

  return (
    <span className={platformClassName}></span>
  );
}