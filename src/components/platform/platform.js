import "./platform.scss";

export function Platform(props) {

  const platform = "platform platform_" + props.platform.split(' ')[0].toLowerCase();

  return (
    <span className={platform}></span>
  );
}