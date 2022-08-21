import IconWrapper from "../../utils/wrapProps";
import AfterEffectsIcon from "../AfterEffectsIcon";
import FacebookIcon from "../FacebookIcon";
import FigmaIcon from "../FigmaIcon";
import IllustratorIcon from "../IllustratorIcon";
import InstagramIcon from "../InstagramIcon";
import MailIcon from "../MailIcon";
import MattermostIcon from "../MattermostIcon";
import MediumIcon from "../MediumIcon";
import ProcreateIcon from "../ProcreateIcon";
import ReactIcon from "../ReactIcon";
import ScottyLabsIcon from "../ScottyLabsIcon";
import TypeScriptIcon from "../TypeScriptIcon";

const IconMapping = {
  "after-effects": AfterEffectsIcon,
  facebook: FacebookIcon,
  figma: FigmaIcon,
  illustrator: IllustratorIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  mattermost: MattermostIcon,
  medium: MediumIcon,
  procreate: ProcreateIcon,
  react: ReactIcon,
  scottylabs: ScottyLabsIcon,
  typescript: TypeScriptIcon,
};

export type IconName = keyof typeof IconMapping;
interface IconProps {
  className?: string;
  name: IconName;
}

interface IconWrapperProps {
  element: (props: any) => JSX.Element;
  className?: string;
}

/**
 * Wrap an element to inject props
 */
function IconWrapper({
  element: Element,
  className,
}: IconWrapperProps): JSX.Element {
  return <Element className={className} />;
}

export default function Icon({ name, className }: IconProps) {
  return <IconWrapper element={IconMapping[name]} className={className} />;
}
