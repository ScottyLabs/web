/**
 * Wrap an element to inject props
 */
export default function wrapProps(icon: JSX.Element) {
  return function PropIcon(props: any) {
    return <icon.type {...icon.props} {...props} />;
  };
}
