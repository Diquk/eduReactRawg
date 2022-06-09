import "common/components/platform/platform.scss";

export const Platform = ({platform}) => {
  const platformClassName = "platform platform_" + platform.toLowerCase();

  return (
    <span className={platformClassName}></span>
  );
}